
( function () {
	'use strict';

	const EASING = {
		ease:          'ease',
		'ease-in':     'ease-in',
		'ease-out':    'ease-out',
		'ease-in-out': 'ease-in-out',
		linear:        'linear',
		bounce:        'cubic-bezier(0.34,1.56,0.64,1)',
		elastic:       'cubic-bezier(0.68,-0.55,0.27,1.55)',
	};

	// ── 1. Linear bar animation ────────────────────────────────────────────
	function animateBar( el ) {
		const fill   = el.querySelector( '.progress-fill' );
		if ( ! fill ) return;
		const target = parseFloat( el.dataset.wbdPercent )  || 0;
		const dur    = parseFloat( el.dataset.wbdDuration ) || 1.2;
		const ease   = EASING[ el.dataset.wbdEasing ] || 'ease';
		requestAnimationFrame( () => {
			fill.style.transition = `width ${ dur }s ${ ease }`;
			requestAnimationFrame( () => { fill.style.width = `${ target }%`; } );
		} );
	}

	// ── 2. Radial ring animation ───────────────────────────────────────────
	function animateRadial( outer ) {
		const fillCircle = outer.querySelector( '.wbd-radial-fill' );
		const numEl      = outer.querySelector( '.wbd-radial-number' );
		const target     = parseFloat( outer.dataset.wbdPercent )  || 0;
		const dur        = parseFloat( outer.dataset.wbdDuration ) || 1.2;
		const ease       = EASING[ outer.dataset.wbdEasing ] || 'ease';

		if ( fillCircle ) {
			const parts = ( fillCircle.getAttribute( 'strokeDasharray' ) || '0 283' ).split( ' ' );
			const circ  = parseFloat( parts[1] ) || 283;
			const dash  = ( target / 100 ) * circ;
			requestAnimationFrame( () => {
				fillCircle.style.transition = `stroke-dasharray ${ dur }s ${ ease }`;
				requestAnimationFrame( () => {
					fillCircle.setAttribute( 'strokeDasharray', `${ dash } ${ circ }` );
				} );
			} );
		}
		if ( numEl ) animateNumber( numEl, target, dur, '%' );
	}

	// ── 3. Counter animation ───────────────────────────────────────────────
	function animateCounterBlock( wrap ) {
		const numEl  = wrap.querySelector( '.wbd-counter-value' );
		const target = parseFloat( wrap.dataset.wbdTarget   ) || 0;
		const dur    = parseFloat( wrap.dataset.wbdDuration ) || 2.0;
		if ( numEl ) animateNumber( numEl, target, dur, '' );
		// Also animate any bar below the counter
		const barParent = wrap.querySelector( '[data-wbd-animate]' );
		if ( barParent ) animateBar( barParent );
	}

	// ── 4. Generic number count-up ─────────────────────────────────────────
	function animateNumber( el, target, dur, suffix ) {
		const start  = performance.now();
		const isPct  = suffix === '%';
		function step( now ) {
			const t   = Math.min( ( now - start ) / ( dur * 1000 ), 1 );
			const val = Math.round( target * easeOut( t ) );
			el.textContent = isPct ? `${ val }${ suffix }` : val.toLocaleString();
			if ( t < 1 ) requestAnimationFrame( step );
		}
		requestAnimationFrame( step );
	}
	function easeOut( t ) { return 1 - Math.pow( 1 - t, 3 ); }

	// ── 5. IntersectionObserver ────────────────────────────────────────────
	function init() {
		const observer = new IntersectionObserver(
			( entries ) => {
				entries.forEach( entry => {
					if ( ! entry.isIntersecting ) return;
					const el = entry.target;
					if      ( el.dataset.wbdMode === 'circular' ) animateRadial( el );
					else if ( el.dataset.wbdMode === 'counter'  ) animateCounterBlock( el );
					else                                           animateBar( el );
					observer.unobserve( el );
				} );
			},
			{ threshold: 0.2 }
		);

		// Radial (scroll)
		document.querySelectorAll( '[data-wbd-mode="circular"][data-wbd-animate="true"]' )
			.forEach( el => observer.observe( el ) );

		// Counters
		document.querySelectorAll( '[data-wbd-mode="counter"]' ).forEach( el => {
			if ( el.dataset.wbdAnimate === 'true' ) observer.observe( el );
			else animateCounterBlock( el );
		} );

		// Linear bars + group rows (scroll)
		document.querySelectorAll( '[data-wbd-animate="true"]:not([data-wbd-mode])' )
			.forEach( el => observer.observe( el ) );
	}

	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', init );
	} else {
		init();
	}
} )();