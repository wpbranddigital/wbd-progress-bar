import { useBlockProps } from '@wordpress/block-editor';

const EASING = { ease:'ease','ease-in':'ease-in','ease-out':'ease-out','ease-in-out':'ease-in-out',linear:'linear',bounce:'cubic-bezier(0.34,1.56,0.64,1)',elastic:'cubic-bezier(0.68,-0.55,0.27,1.55)' };

export default function save( { attributes } ) {
	const {
		progressName, percentage, fillColor, trackColor, showPercentage, progressHeight,
		textColor, percentageTextColor, textFontSize, percentageFontSize, textFontFamily, percentageFontFamily,
		animationType, animationDuration, animateOnScroll,
		showMilestone, milestoneValue, milestoneLabel, showTooltip, tooltipText,
		gradientFill, gradientColor2, barRadius, labelPosition, percentagePosition, inlineGap,
		blockMode,
		circularSize, circularStrokeWidth, circularStrokeColor, circularTrackColor, circularTextColor, circularBg, circularShowLabel,
		groupItems, groupTrackColor, groupBarHeight, groupBarRadius, groupGap, groupShowPercentage, groupLabelPosition, groupPercentagePosition, groupInlineGap,
		counterTarget, counterPrefix, counterSuffix, counterDuration, counterFontSize, counterColor, counterShowBar,
	} = attributes;

	const blockProps = useBlockProps.save( { className: 'wbd-progress-bar' } );
	const isCircle   = blockProps.className.includes( 'is-style-circle' );
	const easing     = EASING[ animationType ] || 'ease';
	const fillStyle  = gradientFill
		? { background: `linear-gradient(90deg,${ fillColor },${ gradientColor2 || fillColor })` }
		: { backgroundColor: fillColor };

	// ── CIRCULAR ─────────────────────────────────────────────────────────
	if ( blockMode === 'circular' ) {
		const size = circularSize   || 140;
		const sw   = circularStrokeWidth || 8;
		const r    = ( size / 2 ) - sw - 2;
		const circ = 2 * Math.PI * r;
		const dash = ( percentage / 100 ) * circ;
		const cx   = size / 2;

		return (
			<div { ...blockProps }>
				<div className="wbd-radial-wrap">
					<div className="wbd-radial-outer"
						style={{ width:size, height:size, background:circularBg || 'transparent', borderRadius:'50%', display:'inline-block', position:'relative' }}
						data-wbd-mode="circular" data-wbd-percent={ percentage }
						data-wbd-animate={ animateOnScroll ? 'true' : undefined }
						data-wbd-duration={ animationDuration } data-wbd-easing={ easing }>
						<svg width={ size } height={ size } viewBox={`0 0 ${ size } ${ size }`} className="wbd-radial-svg">
							<circle cx={ cx } cy={ cx } r={ r } fill="none" stroke={ circularTrackColor } strokeWidth={ sw } />
							<circle cx={ cx } cy={ cx } r={ r } fill="none" stroke={ circularStrokeColor } strokeWidth={ sw }
								strokeDasharray={ animateOnScroll ? `0 ${ circ }` : `${ dash } ${ circ }` }
								strokeLinecap="round" className="wbd-radial-fill" />
						</svg>
						<div className="wbd-radial-text" style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
							<span className="wbd-radial-number" data-wbd-target={ percentage }
								style={{ fontSize:size*0.18, fontWeight:700, color:circularTextColor, lineHeight:1 }}>
								{ animateOnScroll ? 0 : percentage }%
							</span>
						</div>
					</div>
					{ circularShowLabel && progressName && (
						<div className="wbd-radial-label" style={{ color:textColor, fontFamily:textFontFamily, fontSize:textFontSize, marginTop:8, textAlign:'center' }}>{ progressName }</div>
					) }
				</div>
			</div>
		);
	}

	// ── GROUP ─────────────────────────────────────────────────────────────
	if ( blockMode === 'group' ) {
		const pctRightOfLabel = groupPercentagePosition === 'label-right';
		const pctInsideBar    = groupPercentagePosition === 'inside';
		const pctOutsideRight = groupPercentagePosition === 'outside-right';

		return (
			<div { ...blockProps }>
				<div className="wbd-group-wrap" style={{ display:'flex', flexDirection:'column', gap:groupGap }}>
					{ groupItems.map( ( item, i ) => (
						<div key={ i } className="wbd-group-row"
							data-wbd-animate={ animateOnScroll ? 'true' : undefined }
							data-wbd-percent={ item.percentage }
							data-wbd-easing={ easing }
							data-wbd-duration={ animationDuration }>

							{ ( groupLabelPosition === 'above' || ( groupLabelPosition === 'inline' && pctRightOfLabel ) ) && (
								<div style={{ display:'flex', alignItems:'center', justifyContent: pctRightOfLabel ? 'space-between' : 'flex-start', marginBottom: groupLabelPosition === 'above' ? 6 : 0, gap: groupInlineGap }}>
									<span className="wbd-group-label" style={{ fontWeight:600, color:textColor, fontFamily:textFontFamily, fontSize:textFontSize }}>{ item.label }</span>
									{ groupShowPercentage && pctRightOfLabel && (
										<span className="wbd-group-pct" style={{ fontWeight:600, color:percentageTextColor, fontFamily:percentageFontFamily, fontSize:percentageFontSize, flexShrink:0 }}>{ item.percentage }%</span>
									) }
								</div>
							) }

							<div style={{ display:'flex', alignItems:'center', gap: groupLabelPosition === 'inline' ? groupInlineGap : 0 }}>
								{ groupLabelPosition === 'inline' && !pctRightOfLabel && (
									<span className="wbd-group-label" style={{ fontWeight:600, color:textColor, fontFamily:textFontFamily, fontSize:textFontSize, flexShrink:0 }}>{ item.label }</span>
								) }
								<div style={{ flex:1, position:'relative' }}>
									<div className="progress-track" style={{ backgroundColor:groupTrackColor, height:groupBarHeight, borderRadius:groupBarRadius }}>
										<div className="progress-fill"
											style={{ width: animateOnScroll ? '0%' : `${item.percentage}%`, height:'100%', backgroundColor:item.color, borderRadius:groupBarRadius, display:'flex', alignItems:'center', justifyContent:'center', transition: animateOnScroll ? 'none' : `width ${animationDuration}s ${easing}` }}>
											{ groupShowPercentage && pctInsideBar && (
												<span style={{ fontWeight:600, color:percentageTextColor, fontFamily:percentageFontFamily, fontSize:percentageFontSize, whiteSpace:'nowrap' }}>{ item.percentage }%</span>
											) }
										</div>
									</div>
								</div>
								{ groupShowPercentage && pctOutsideRight && (
									<span className="wbd-group-pct" style={{ fontWeight:600, color:percentageTextColor, fontFamily:percentageFontFamily, fontSize:percentageFontSize, flexShrink:0, minWidth:36, textAlign:'right' }}>{ item.percentage }%</span>
								) }
							</div>
						</div>
					) ) }
				</div>
			</div>
		);
	}

	// ── COUNTER ───────────────────────────────────────────────────────────
	if ( blockMode === 'counter' ) {
		return (
			<div { ...blockProps }>
				<div className="wbd-counter-wrap" style={{ textAlign:'center' }}
					data-wbd-mode="counter" data-wbd-target={ counterTarget }
					data-wbd-duration={ counterDuration } data-wbd-animate={ animateOnScroll ? 'true' : 'false' }>
					<div className="wbd-counter-number" style={{ fontSize:counterFontSize, fontWeight:700, color:counterColor, lineHeight:1.1 }}>
						<span className="wbd-counter-prefix">{ counterPrefix }</span>
						<span className="wbd-counter-value">{ counterTarget.toLocaleString() }</span>
						<span className="wbd-counter-suffix">{ counterSuffix }</span>
					</div>
					{ progressName && (
						<div className="wbd-counter-label" style={{ fontSize:textFontSize, fontFamily:textFontFamily, color:textColor, marginTop:6 }}>{ progressName }</div>
					) }
					{ counterShowBar && (
						<div style={{ marginTop:10 }}
							data-wbd-animate={ animateOnScroll ? 'true' : undefined }
							data-wbd-percent={ percentage } data-wbd-easing={ easing } data-wbd-duration={ animationDuration }>
							<div className="progress-track" style={{ backgroundColor:trackColor, height:8, borderRadius:barRadius }}>
								<div className="progress-fill"
									style={{ width: animateOnScroll ? '0%' : `${percentage}%`, height:'100%', borderRadius:barRadius, ...fillStyle, transition: animateOnScroll ? 'none' : `width ${animationDuration}s ${easing}` }} />
							</div>
						</div>
					) }
				</div>
			</div>
		);
	}

	// ── SINGLE BAR ────────────────────────────────────────────────────────
	const nameStyle = { color:textColor, fontSize:textFontSize, fontFamily:textFontFamily };
	const pctStyle  = { color:percentageTextColor, fontSize:percentageFontSize, fontFamily:percentageFontFamily, fontWeight:600, whiteSpace:'nowrap' };
	const fillWidth = animateOnScroll ? '0%' : `${ percentage }%`;
	const trans     = animateOnScroll ? 'none' : `width ${ animationDuration }s ${ easing }`;
	const bothAbove = progressName && labelPosition === 'above' && showPercentage && percentagePosition === 'above';
	const isInline  = labelPosition === 'inline';

	const hasTooltip = showTooltip && tooltipText;

	if ( isCircle ) {
		return (
			<div { ...blockProps }>
				<div className="progress-circle">
					<svg viewBox="0 0 36 36">
						<path className="circle-bg"   d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
						<path className="circle-fill" strokeDasharray={`${ percentage }, 100`} style={{ stroke:fillColor }}
							d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
					</svg>
					{ showPercentage && <span className="circle-percentage" style={ pctStyle }>{ percentage }%</span> }
				</div>
			</div>
		);
	}

	const barEl = (
		<div className={ `progress-track-wrapper${ hasTooltip ? ' has-tooltip' : '' }` }
			style={{ flex: isInline ? 1 : undefined }}
			{ ...( hasTooltip ? { 'data-tooltip': `${ tooltipText }: ${ percentage }%` } : {} ) }
			data-wbd-animate={ animateOnScroll ? 'true' : undefined }
			data-wbd-percent={ percentage } data-wbd-easing={ easing } data-wbd-duration={ animationDuration }>
			<div className="progress-track" style={{ backgroundColor:trackColor, height:progressHeight, borderRadius:barRadius }}>
				<div className="progress-fill" style={{ width:fillWidth, borderRadius:barRadius, transition:trans, ...fillStyle }}>
					{ showPercentage && percentagePosition === 'inside' && (
						<span className="progress-percentage" style={ pctStyle }>{ percentage }%</span>
					) }
				</div>
				{ showMilestone && milestoneValue > 0 && (
					<div className="progress-milestone" style={{ left:`${milestoneValue}%` }}>
						<span className="progress-milestone-line" />
						{ milestoneLabel && <span className="progress-milestone-label">{ milestoneLabel }</span> }
					</div>
				) }
			</div>
		</div>
	);

	return (
		<div { ...blockProps }>
			{ bothAbove && (
				<div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:6 }}>
					<span className="progress-name" style={ nameStyle }>{ progressName }</span>
					<span style={ pctStyle }>{ percentage }%</span>
				</div>
			) }
			{ !bothAbove && !isInline && labelPosition === 'above' && progressName && (
				<div className="progress-name" style={{ ...nameStyle, marginBottom:8 }}>{ progressName }</div>
			) }
			{ !bothAbove && !isInline && showPercentage && percentagePosition === 'above' && (
				<div style={{ ...pctStyle, textAlign:'right', marginBottom:4 }}>{ percentage }%</div>
			) }
			{ isInline ? (
				<div style={{ display:'flex', alignItems:'center', gap:inlineGap }}>
					{ progressName && <span className="progress-name" style={{ ...nameStyle, flexShrink:0 }}>{ progressName }</span> }
					{ barEl }
					{ showPercentage && percentagePosition === 'outside-right' && <span style={ pctStyle }>{ percentage }%</span> }
				</div>
			) : (
				<>
					{ barEl }
					{ showPercentage && percentagePosition === 'outside-right' && <div style={{ ...pctStyle, marginTop:4 }}>{ percentage }%</div> }
				</>
			) }
			{ !isInline && labelPosition === 'below' && progressName && (
				<div className="progress-name progress-name--below" style={{ ...nameStyle, marginTop:8 }}>{ progressName }</div>
			) }
		</div>
	);
}