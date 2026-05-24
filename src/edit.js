import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody, RangeControl, ToggleControl, ColorPicker,
	BaseControl, TextControl, FontSizePicker, SelectControl, Tooltip,
	ExternalLink, Button,
} from '@wordpress/components';
import './editor.scss';

// ─── Links ────────────────────────────────────────────────────────────────────
const rateLink    = 'https://wordpress.org/support/plugin/wbd-progress-bar/reviews/#new-post';
const pageLink    = 'https://www.wpbranddigital.org/contact/';

// ─── 10 Linear Templates ──────────────────────────────────────────────────────
const TEMPLATES = [
	{ name:'Ocean Blue',     slug:'ocean-blue',     fillColor:'#1a73e8', trackColor:'#d2e3fc', textColor:'#1a1a2e', percentageTextColor:'#ffffff', progressHeight:14, animationType:'ease',        animationDuration:1.2, showPercentage:true, barRadius:999, gradientFill:false, gradientColor2:'#1a73e8' },
	{ name:'Sunset Fire',    slug:'sunset-fire',    fillColor:'#ff6b35', trackColor:'#ffe8e0', textColor:'#2d1b0e', percentageTextColor:'#ffffff', progressHeight:16, animationType:'ease-out',    animationDuration:1.0, showPercentage:true, barRadius:999, gradientFill:true,  gradientColor2:'#f7c59f' },
	{ name:'Forest Green',   slug:'forest-green',   fillColor:'#2d6a4f', trackColor:'#d8f3dc', textColor:'#1b4332', percentageTextColor:'#d8f3dc', progressHeight:12, animationType:'ease-in-out', animationDuration:1.5, showPercentage:true, barRadius:4,   gradientFill:true,  gradientColor2:'#74c69d' },
	{ name:'Purple Galaxy',  slug:'purple-galaxy',  fillColor:'#7b2d8b', trackColor:'#f3e5f5', textColor:'#3d0066', percentageTextColor:'#ffffff', progressHeight:18, animationType:'bounce',      animationDuration:1.3, showPercentage:true, barRadius:999, gradientFill:true,  gradientColor2:'#ce93d8' },
	{ name:'Golden Hour',    slug:'golden-hour',    fillColor:'#f9a825', trackColor:'#fff8e1', textColor:'#4a3500', percentageTextColor:'#4a3500', progressHeight:20, animationType:'ease',        animationDuration:1.0, showPercentage:true, barRadius:999, gradientFill:true,  gradientColor2:'#fff176' },
	{ name:'Midnight Dark',  slug:'midnight-dark',  fillColor:'#00e5ff', trackColor:'#263238', textColor:'#eceff1', percentageTextColor:'#000000', progressHeight:14, animationType:'ease-in-out', animationDuration:1.2, showPercentage:true, barRadius:0,   gradientFill:false, gradientColor2:'#00e5ff' },
	{ name:'Rose Pink',      slug:'rose-pink',      fillColor:'#e91e8c', trackColor:'#fce4f3', textColor:'#880e4f', percentageTextColor:'#ffffff', progressHeight:14, animationType:'ease',        animationDuration:1.0, showPercentage:true, barRadius:999, gradientFill:true,  gradientColor2:'#f48fb1' },
	{ name:'Arctic Ice',     slug:'arctic-ice',     fillColor:'#4fc3f7', trackColor:'#e1f5fe', textColor:'#01579b', percentageTextColor:'#003d6b', progressHeight:10, animationType:'ease-out',    animationDuration:0.8, showPercentage:true, barRadius:999, gradientFill:true,  gradientColor2:'#e1f5fe' },
	{ name:'Corporate Gray', slug:'corporate-gray', fillColor:'#546e7a', trackColor:'#eceff1', textColor:'#263238', percentageTextColor:'#ffffff', progressHeight:12, animationType:'ease',        animationDuration:1.0, showPercentage:true, barRadius:2,   gradientFill:false, gradientColor2:'#546e7a' },
	{ name:'Lemon Lime',     slug:'lemon-lime',     fillColor:'#76c442', trackColor:'#f1f8e9', textColor:'#33691e', percentageTextColor:'#1b5e20', progressHeight:16, animationType:'ease-out',    animationDuration:1.1, showPercentage:true, barRadius:999, gradientFill:true,  gradientColor2:'#dce775' },
];
const TEMPLATE_COLORS = {
	'ocean-blue':['#1a73e8','#d2e3fc'],'sunset-fire':['#ff6b35','#f7c59f'],'forest-green':['#2d6a4f','#74c69d'],
	'purple-galaxy':['#7b2d8b','#ce93d8'],'golden-hour':['#f9a825','#fff176'],'midnight-dark':['#00e5ff','#263238'],
	'rose-pink':['#e91e8c','#f48fb1'],'arctic-ice':['#4fc3f7','#e1f5fe'],'corporate-gray':['#546e7a','#eceff1'],'lemon-lime':['#76c442','#dce775'],
};

// ─── 10 Circular Themes ───────────────────────────────────────────────────────
const CIRCULAR_THEMES = [
	{ name:'Classic Blue',  strokeColor:'#1a73e8', trackStroke:'#d2e3fc', textColor:'#1a73e8', bg:'transparent', strokeWidth:8  },
	{ name:'Neon Green',    strokeColor:'#00e676', trackStroke:'#1b3a24', textColor:'#00e676', bg:'#0d1f14',     strokeWidth:10 },
	{ name:'Warm Coral',    strokeColor:'#ff6b35', trackStroke:'#ffe8e0', textColor:'#ff6b35', bg:'transparent', strokeWidth:7  },
	{ name:'Purple Glow',   strokeColor:'#ce93d8', trackStroke:'#3d0066', textColor:'#ce93d8', bg:'#1a0033',     strokeWidth:10 },
	{ name:'Golden Ring',   strokeColor:'#f9a825', trackStroke:'#fff8e1', textColor:'#f9a825', bg:'transparent', strokeWidth:6  },
	{ name:'Icy Blue',      strokeColor:'#4fc3f7', trackStroke:'#e1f5fe', textColor:'#01579b', bg:'transparent', strokeWidth:8  },
	{ name:'Rose Red',      strokeColor:'#e91e8c', trackStroke:'#fce4f3', textColor:'#e91e8c', bg:'transparent', strokeWidth:9  },
	{ name:'Slate Gray',    strokeColor:'#546e7a', trackStroke:'#eceff1', textColor:'#546e7a', bg:'transparent', strokeWidth:7  },
	{ name:'Lime Fresh',    strokeColor:'#76c442', trackStroke:'#f1f8e9', textColor:'#33691e', bg:'transparent', strokeWidth:8  },
	{ name:'Midnight Teal', strokeColor:'#00bcd4', trackStroke:'#263238', textColor:'#00bcd4', bg:'#0a1f26',     strokeWidth:10 },
];



export default function Edit( { attributes, setAttributes } ) {
	const {
		progressName, percentage, fillColor, trackColor, showPercentage, progressHeight,
		textColor, percentageTextColor, textFontSize, percentageFontSize, textFontFamily, percentageFontFamily,
		animationType, animationDuration, animateOnScroll,
		showMilestone, milestoneValue, milestoneLabel, showTooltip, tooltipText,
		gradientFill, gradientColor2, barRadius, labelPosition, percentagePosition, inlineGap,
		blockMode,
		circularThemeIndex, circularSize, circularStrokeWidth, circularStrokeColor, circularTrackColor, circularTextColor, circularBg, circularShowLabel,
		groupItems, groupTrackColor, groupBarHeight, groupBarRadius, groupGap, groupShowPercentage, groupLabelPosition, groupPercentagePosition, groupInlineGap,
		counterTarget, counterPrefix, counterSuffix, counterDuration, counterFontSize, counterColor, counterShowBar,
	} = attributes;

	const blockProps = useBlockProps( { className: 'wbd-progress-bar' } );
	const isCircle   = blockProps.className.includes( 'is-style-circle' );

	const fillStyle = gradientFill
		? { background: `linear-gradient(90deg,${ fillColor },${ gradientColor2 || fillColor })` }
		: { backgroundColor: fillColor };

	const applyTemplate = ( t ) => setAttributes({
		fillColor:t.fillColor, trackColor:t.trackColor, textColor:t.textColor,
		percentageTextColor:t.percentageTextColor, progressHeight:t.progressHeight,
		animationType:t.animationType, animationDuration:t.animationDuration,
		showPercentage:t.showPercentage, barRadius:t.barRadius,
		gradientFill:t.gradientFill, gradientColor2:t.gradientColor2,
	});

	const applyCircularTheme = ( idx ) => {
		const t = CIRCULAR_THEMES[ idx ];
		setAttributes({ circularThemeIndex:idx, circularStrokeColor:t.strokeColor, circularTrackColor:t.trackStroke, circularTextColor:t.textColor, circularBg:t.bg, circularStrokeWidth:t.strokeWidth });
	};

	const updateGroupItem = ( idx, key, val ) => setAttributes({ groupItems: groupItems.map( ( it, i ) => i === idx ? { ...it, [key]: val } : it ) });
	const addGroupItem    = () => setAttributes({ groupItems: [ ...groupItems, { label:'New Skill', percentage:50, color: fillColor } ] });
	const removeGroupItem = ( idx ) => setAttributes({ groupItems: groupItems.filter( ( _, i ) => i !== idx ) });

	const fontSizes           = [ {name:__('Small','wbd-progress-bar'),slug:'small',size:12},{name:__('Normal','wbd-progress-bar'),slug:'normal',size:14},{name:__('Medium','wbd-progress-bar'),slug:'medium',size:16},{name:__('Large','wbd-progress-bar'),slug:'large',size:20},{name:__('Extra Large','wbd-progress-bar'),slug:'extra-large',size:24} ];
	const percentageFontSizes = [ {name:__('Extra Small','wbd-progress-bar'),slug:'extra-small',size:8},{name:__('Small','wbd-progress-bar'),slug:'small',size:10},{name:__('Normal','wbd-progress-bar'),slug:'normal',size:12},{name:__('Medium','wbd-progress-bar'),slug:'medium',size:14},{name:__('Large','wbd-progress-bar'),slug:'large',size:16} ];
	const fontFamilyOptions   = [ {label:__('Inherit from theme','wbd-progress-bar'),value:'inherit'},{label:__('System Default','wbd-progress-bar'),value:'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'},{label:__('Arial','wbd-progress-bar'),value:'Arial,sans-serif'},{label:__('Helvetica','wbd-progress-bar'),value:'"Helvetica Neue",Helvetica,sans-serif'},{label:__('Georgia','wbd-progress-bar'),value:'Georgia,serif'},{label:__('Times New Roman','wbd-progress-bar'),value:'"Times New Roman",Times,serif'},{label:__('Courier New','wbd-progress-bar'),value:'"Courier New",Courier,monospace'},{label:__('Verdana','wbd-progress-bar'),value:'Verdana,sans-serif'},{label:__('Trebuchet MS','wbd-progress-bar'),value:'"Trebuchet MS",sans-serif'} ];

	return (
		<>
			<InspectorControls>

				{/* ══ HELP BANNER ═══════════════════════════════════════════ */}
				<div className="wbd-help-banner">
					<div className="wbd-help-links">
						<ExternalLink href={ pageLink }>{ __('Support','wbd-progress-bar') }</ExternalLink>
						<span className="wbd-help-sep">·</span>
						<ExternalLink href={ rateLink }>{ __('Rate Us ★','wbd-progress-bar') }</ExternalLink>
					</div>
				</div>

				{/* ══ BLOCK MODE ════════════════════════════════════════════ */}
				<PanelBody title={ __('Block Mode','wbd-progress-bar') } initialOpen={ true }>
					<SelectControl
						label={ __('Display Mode','wbd-progress-bar') }
						value={ blockMode }
						options={ [
							{ label: __('Single Bar','wbd-progress-bar'),            value:'single'   },
							{ label: __('Circular / Radial','wbd-progress-bar'),     value:'circular' },
							{ label: __('Group / Skills Section','wbd-progress-bar'),value:'group'    },
							{ label: __('Number Counter','wbd-progress-bar'),         value:'counter'  },
						] }
						onChange={ v => setAttributes({ blockMode: v }) }
					/>

				</PanelBody>

				{/* ══ CIRCULAR ─ Pro only ════════════════════════════════════ */}
				{ blockMode === 'circular' && (
					<PanelBody title={ __('Circular Settings','wbd-progress-bar') } initialOpen={ true }>
						<p style={{ fontSize:12, color:'#757575', marginBottom:10 }}>{ __('Choose a theme:','wbd-progress-bar') }</p>
						<div className="wbd-circular-theme-grid">
							{ CIRCULAR_THEMES.map( ( t, i ) => (
								<Tooltip key={ i } text={ t.name }>
									<button className={ `wbd-circular-theme-btn${ circularThemeIndex === i ? ' is-active' : '' }` } onClick={ () => applyCircularTheme(i) }>
										<svg viewBox="0 0 100 100" width="44" height="44">
											<circle cx="50" cy="50" r="38" fill={ t.bg === 'transparent' ? '#f0f0f0' : t.bg } stroke={ t.trackStroke } strokeWidth="8" />
											<circle cx="50" cy="50" r="38" fill="none" stroke={ t.strokeColor } strokeWidth="8"
												strokeDasharray={ `${ 0.72 * 2 * Math.PI * 38 } ${ 2 * Math.PI * 38 }` }
												strokeLinecap="round" transform="rotate(-90 50 50)" />
										</svg>
										<span>{ t.name }</span>
									</button>
								</Tooltip>
							) ) }
						</div>
						<RangeControl label={ __('Size (px)','wbd-progress-bar') }             value={ circularSize }        onChange={ v=>setAttributes({circularSize:v}) }        min={80}  max={300} />
						<RangeControl label={ __('Stroke Width','wbd-progress-bar') }          value={ circularStrokeWidth } onChange={ v=>setAttributes({circularStrokeWidth:v}) } min={3}   max={20}  />
						<RangeControl label={ __('Progress Percentage','wbd-progress-bar') }   value={ percentage }          onChange={ v=>setAttributes({percentage:v}) }           min={0}   max={100} />
						<ToggleControl label={ __('Show Label Below','wbd-progress-bar') }     checked={ circularShowLabel } onChange={ v=>setAttributes({circularShowLabel:v}) } />
						{ circularShowLabel && <TextControl label={ __('Label','wbd-progress-bar') } value={ progressName } onChange={ v=>setAttributes({progressName:v}) } /> }
						<BaseControl label={ __('Stroke Color','wbd-progress-bar') }><ColorPicker color={ circularStrokeColor } onChangeComplete={ v=>setAttributes({circularStrokeColor:v.hex}) } disableAlpha /></BaseControl>
						<BaseControl label={ __('Track Color','wbd-progress-bar') }><ColorPicker color={ circularTrackColor }  onChangeComplete={ v=>setAttributes({circularTrackColor:v.hex}) }  disableAlpha /></BaseControl>
						<BaseControl label={ __('Center Text Color','wbd-progress-bar') }><ColorPicker color={ circularTextColor } onChangeComplete={ v=>setAttributes({circularTextColor:v.hex}) } disableAlpha /></BaseControl>
					</PanelBody>
				) }

				{/* ══ GROUP ─ Pro only ═══════════════════════════════════════ */}
				{ blockMode === 'group' && (
					<PanelBody title={ __('Group / Skills Settings','wbd-progress-bar') } initialOpen={ true }>
						<RangeControl label={ __('Gap Between Bars (px)','wbd-progress-bar') } value={ groupGap }         onChange={ v=>setAttributes({groupGap:v}) }         min={4}  max={48}  />
						<RangeControl label={ __('Bar Height (px)','wbd-progress-bar') }       value={ groupBarHeight }   onChange={ v=>setAttributes({groupBarHeight:v}) }   min={6}  max={40}  />
						<RangeControl label={ __('Bar Radius','wbd-progress-bar') }            value={ groupBarRadius }   onChange={ v=>setAttributes({groupBarRadius:v}) }   min={0}  max={999} />

						<SelectControl label={ __('Label Position','wbd-progress-bar') } value={ groupLabelPosition }
							options={ [ {label:__('Above bar','wbd-progress-bar'),value:'above'}, {label:__('Inline row','wbd-progress-bar'),value:'inline'} ] }
							onChange={ v=>setAttributes({groupLabelPosition:v}) } />

						{ groupLabelPosition === 'inline' && (
							<RangeControl label={ __('Inline Gap (px)','wbd-progress-bar') } value={ groupInlineGap } onChange={ v=>setAttributes({groupInlineGap:v}) } min={4} max={60} />
						) }

						<SelectControl label={ __('Percentage Position','wbd-progress-bar') } value={ groupPercentagePosition }
							options={ [
								{label:__('Inside bar','wbd-progress-bar'),value:'inside'},
								{label:__('Outside right','wbd-progress-bar'),value:'outside-right'},
								{label:__('Same line as label (right)','wbd-progress-bar'),value:'label-right'},
							] }
							onChange={ v=>setAttributes({groupPercentagePosition:v}) } />

						<ToggleControl label={ __('Show Percentage','wbd-progress-bar') } checked={ groupShowPercentage } onChange={ v=>setAttributes({groupShowPercentage:v}) } />

						<BaseControl label={ __('Track Color','wbd-progress-bar') }><ColorPicker color={ groupTrackColor } onChangeComplete={ v=>setAttributes({groupTrackColor:v.hex}) } disableAlpha /></BaseControl>

						<p style={{ fontWeight:600, marginTop:12, marginBottom:8, fontSize:13 }}>{ __('Bar Items','wbd-progress-bar') }</p>
						{ groupItems.map( ( item, idx ) => (
							<div key={ idx } className="wbd-group-item-editor">
								<div className="wbd-group-item-header">
									<span className="wbd-group-item-num">{ idx + 1 }</span>
									<button className="wbd-group-item-remove" onClick={ ()=>removeGroupItem(idx) }>✕</button>
								</div>
								<TextControl    label={ __('Label','wbd-progress-bar') }      value={ item.label }      onChange={ v=>updateGroupItem(idx,'label',v) } />
								<RangeControl   label={ __('Percentage','wbd-progress-bar') } value={ item.percentage } onChange={ v=>updateGroupItem(idx,'percentage',v) } min={0} max={100} />
								<BaseControl    label={ __('Bar Color','wbd-progress-bar') }><ColorPicker color={ item.color } onChangeComplete={ v=>updateGroupItem(idx,'color',v.hex) } disableAlpha /></BaseControl>
							</div>
						) ) }
						<button className="wbd-add-item-btn" onClick={ addGroupItem }>{ __('+ Add Bar','wbd-progress-bar') }</button>
					</PanelBody>
				) }

				{/* ══ COUNTER (free) ════════════════════════════════════════ */}
				{ blockMode === 'counter' && (
					<PanelBody title={ __('Number Counter Settings','wbd-progress-bar') } initialOpen={ true }>
						<RangeControl label={ __('Target Number','wbd-progress-bar') }       value={ counterTarget }   onChange={ v=>setAttributes({counterTarget:v}) }   min={0}   max={99999} />
						<TextControl  label={ __('Prefix (e.g. $)','wbd-progress-bar') }     value={ counterPrefix }   onChange={ v=>setAttributes({counterPrefix:v}) } />
						<TextControl  label={ __('Suffix (e.g. %, K+)','wbd-progress-bar') } value={ counterSuffix }   onChange={ v=>setAttributes({counterSuffix:v}) } />
						<TextControl  label={ __('Label / Description','wbd-progress-bar') } value={ progressName }    onChange={ v=>setAttributes({progressName:v}) } />
						<RangeControl label={ __('Animation Duration (s)','wbd-progress-bar') } value={ counterDuration } onChange={ v=>setAttributes({counterDuration:v}) } min={0.5} max={5} step={0.1} />
						<RangeControl label={ __('Font Size (px)','wbd-progress-bar') }      value={ counterFontSize } onChange={ v=>setAttributes({counterFontSize:v}) } min={20} max={100} />
						<BaseControl  label={ __('Number Color','wbd-progress-bar') }><ColorPicker color={ counterColor } onChangeComplete={ v=>setAttributes({counterColor:v.hex}) } disableAlpha /></BaseControl>
						<ToggleControl label={ __('Show Progress Bar Below','wbd-progress-bar') } checked={ counterShowBar } onChange={ v=>setAttributes({counterShowBar:v}) } />
						{ counterShowBar && <RangeControl label={ __('Bar Percentage','wbd-progress-bar') } value={ percentage } onChange={ v=>setAttributes({percentage:v}) } min={0} max={100} /> }
					</PanelBody>
				) }

				{/* ══ SINGLE: TEMPLATES ─────────────────────────────────── */}
				{ blockMode === 'single' && (
					<PanelBody title={ __('Template Styles','wbd-progress-bar') } initialOpen={ false }>
						<div className="wbd-template-grid">
							{ TEMPLATES.map( tpl => {
								const [c1,c2] = TEMPLATE_COLORS[tpl.slug];
								return (
									<Tooltip key={ tpl.slug } text={ tpl.name }>
										<button className="wbd-template-btn" onClick={ ()=>applyTemplate(tpl) }>
											<span className="wbd-template-swatch" style={{ background:`linear-gradient(135deg,${c1} 50%,${c2} 50%)` }} />
											<span className="wbd-template-label">{ tpl.name }</span>
										</button>
									</Tooltip>
								);
							} ) }
						</div>
					</PanelBody>
				) }

				{/* ══ SINGLE: PROGRESS SETTINGS ─────────────────────────── */}
				{ blockMode === 'single' && (
					<PanelBody title={ __('Progress Settings','wbd-progress-bar') } initialOpen={ true }>
						<TextControl  label={ __('Progress Name','wbd-progress-bar') }       value={ progressName }  onChange={ v=>setAttributes({progressName:v}) } placeholder={ __('e.g., Project Completion','wbd-progress-bar') } />
						<RangeControl label={ __('Progress Percentage','wbd-progress-bar') } value={ percentage }    onChange={ v=>setAttributes({percentage:v}) }   min={0}   max={100} />
						<RangeControl label={ __('Progress Height (px)','wbd-progress-bar') } value={ progressHeight } onChange={ v=>setAttributes({progressHeight:v}) } min={6} max={40} />
						<RangeControl label={ __('Bar Corner Radius','wbd-progress-bar') }   value={ barRadius }     onChange={ v=>setAttributes({barRadius:v}) }     min={0}   max={999} />
						<ToggleControl label={ __('Show Percentage Text','wbd-progress-bar') } checked={ showPercentage } onChange={ v=>setAttributes({showPercentage:v}) } />

						{ showPercentage && (
							<SelectControl label={ __('Percentage Position','wbd-progress-bar') } value={ percentagePosition }
								options={ [ {label:__('Inside bar','wbd-progress-bar'),value:'inside'}, {label:__('Outside right','wbd-progress-bar'),value:'outside-right'}, {label:__('Above bar','wbd-progress-bar'),value:'above'} ] }
								onChange={ v=>setAttributes({percentagePosition:v}) } />
						) }

						<SelectControl label={ __('Label Position','wbd-progress-bar') } value={ labelPosition }
							options={ [ {label:__('Above bar','wbd-progress-bar'),value:'above'}, {label:__('Below bar','wbd-progress-bar'),value:'below'}, {label:__('Inline row','wbd-progress-bar'),value:'inline'} ] }
							onChange={ v=>setAttributes({labelPosition:v}) } />

						{ labelPosition === 'inline' && (
							<RangeControl label={ __('Inline Gap (px)','wbd-progress-bar') } value={ inlineGap } onChange={ v=>setAttributes({inlineGap:v}) } min={4} max={60} />
						) }
					</PanelBody>
				) }

				{/* ══ ANIMATION ─────────────────────────────────────────── */}
				{ ( blockMode === 'single' || blockMode === 'counter' ) && (
					<PanelBody title={ __('Animation','wbd-progress-bar') } initialOpen={ false }>
						<SelectControl label={ __('Animation Type','wbd-progress-bar') } value={ animationType }
							options={ [ {label:__('Ease','wbd-progress-bar'),value:'ease'},{label:__('Ease In','wbd-progress-bar'),value:'ease-in'},{label:__('Ease Out','wbd-progress-bar'),value:'ease-out'},{label:__('Ease In Out','wbd-progress-bar'),value:'ease-in-out'},{label:__('Linear','wbd-progress-bar'),value:'linear'},{label:__('Bounce','wbd-progress-bar'),value:'bounce'},{label:__('Elastic','wbd-progress-bar'),value:'elastic'} ] }
							onChange={ v=>setAttributes({animationType:v}) } />
						<RangeControl label={ __('Duration (s)','wbd-progress-bar') } value={ animationDuration } onChange={ v=>setAttributes({animationDuration:v}) } min={0.2} max={3.0} step={0.1} />
						<ToggleControl label={ __('Animate on Scroll','wbd-progress-bar') } checked={ animateOnScroll } onChange={ v=>setAttributes({animateOnScroll:v}) } />
					</PanelBody>
				) }

				{/* ══ MILESTONE & TOOLTIP ───────────────────────────────── */}
				{ blockMode === 'single' && (
					<PanelBody title={ __('Milestone & Tooltip','wbd-progress-bar') } initialOpen={ false }>
						<ToggleControl label={ __('Show Milestone Marker','wbd-progress-bar') } checked={ showMilestone } onChange={ v=>setAttributes({showMilestone:v}) } />
						{ showMilestone && (
							<>
								<RangeControl label={ __('Milestone at (%)','wbd-progress-bar') } value={ milestoneValue } onChange={ v=>setAttributes({milestoneValue:v}) } min={1} max={100} />
								<TextControl  label={ __('Milestone Label','wbd-progress-bar') }   value={ milestoneLabel } onChange={ v=>setAttributes({milestoneLabel:v}) } placeholder={ __('e.g., Half Goal!','wbd-progress-bar') } />
							</>
						) }

						{/* Tooltip — Pro (shown in editor, frontend locked) */}
						<>
							<ToggleControl label={ __('Show Hover Tooltip','wbd-progress-bar') } checked={ showTooltip } onChange={ v=>setAttributes({showTooltip:v}) } />
							{ showTooltip && (
								<TextControl label={ __('Tooltip Text','wbd-progress-bar') } value={ tooltipText } onChange={ v=>setAttributes({tooltipText:v}) } placeholder={ __('e.g., Fundraising Goal','wbd-progress-bar') } />
							) }
						</>
					</PanelBody>
				) }

				{/* ══ TYPOGRAPHY ────────────────────────────────────────── */}
				{ blockMode === 'single' && (
					<PanelBody title={ __('Typography','wbd-progress-bar') } initialOpen={ false }>
						<BaseControl label={ __('Progress Name Font Family','wbd-progress-bar') }><SelectControl value={ textFontFamily } options={ fontFamilyOptions } onChange={ v=>setAttributes({textFontFamily:v}) } /></BaseControl>
						<BaseControl label={ __('Progress Name Font Size','wbd-progress-bar') }><FontSizePicker fontSizes={ fontSizes } value={ textFontSize } onChange={ v=>setAttributes({textFontSize:v}) } withReset fallbackFontSize={14} /></BaseControl>
						<BaseControl label={ __('Percentage Font Family','wbd-progress-bar') }><SelectControl value={ percentageFontFamily } options={ fontFamilyOptions } onChange={ v=>setAttributes({percentageFontFamily:v}) } /></BaseControl>
						<BaseControl label={ __('Percentage Font Size','wbd-progress-bar') }><FontSizePicker fontSizes={ percentageFontSizes } value={ percentageFontSize } onChange={ v=>setAttributes({percentageFontSize:v}) } withReset fallbackFontSize={10} /></BaseControl>
					</PanelBody>
				) }

				{/* ══ COLOR SETTINGS ────────────────────────────────────── */}
				{ blockMode === 'single' && (
					<PanelBody title={ __('Color Settings','wbd-progress-bar') } initialOpen={ false }>
						<ToggleControl label={ __('Gradient Fill','wbd-progress-bar') } checked={ gradientFill } onChange={ v=>setAttributes({gradientFill:v}) } />
						<BaseControl label={ __('Fill Color','wbd-progress-bar') }><ColorPicker color={ fillColor } onChangeComplete={ v=>setAttributes({fillColor:v.hex}) } disableAlpha /></BaseControl>
						{ gradientFill && <BaseControl label={ __('Gradient End Color','wbd-progress-bar') }><ColorPicker color={ gradientColor2 } onChangeComplete={ v=>setAttributes({gradientColor2:v.hex}) } disableAlpha /></BaseControl> }
						<BaseControl label={ __('Track Color','wbd-progress-bar') }><ColorPicker color={ trackColor } onChangeComplete={ v=>setAttributes({trackColor:v.hex}) } disableAlpha /></BaseControl>
						<BaseControl label={ __('Label Color','wbd-progress-bar') }><ColorPicker color={ textColor } onChangeComplete={ v=>setAttributes({textColor:v.hex,iconColor:v.hex}) } disableAlpha /></BaseControl>
						<BaseControl label={ __('Percentage Text Color','wbd-progress-bar') }><ColorPicker color={ percentageTextColor } onChangeComplete={ v=>setAttributes({percentageTextColor:v.hex}) } disableAlpha /></BaseControl>
					</PanelBody>
				) }
				{ blockMode === 'group' && (
					<PanelBody title={ __('Color Settings','wbd-progress-bar') } initialOpen={ false }>				
						<BaseControl label={ __('Label Color','wbd-progress-bar') }><ColorPicker color={ textColor } onChangeComplete={ v=>setAttributes({textColor:v.hex,iconColor:v.hex}) } disableAlpha /></BaseControl>
						<BaseControl label={ __('Percentage Text Color','wbd-progress-bar') }><ColorPicker color={ percentageTextColor } onChangeComplete={ v=>setAttributes({percentageTextColor:v.hex}) } disableAlpha /></BaseControl>
					</PanelBody>
				) }

			</InspectorControls>

			{/* ══ EDITOR CANVAS ════════════════════════════════════════════ */}
			<div { ...blockProps }>

				{ blockMode === 'circular' && (
					<RadialPreview percentage={percentage} size={circularSize} strokeWidth={circularStrokeWidth}
						strokeColor={circularStrokeColor} trackColor={circularTrackColor} textColor={circularTextColor}
						bg={circularBg} label={circularShowLabel ? progressName : ''}
						labelStyle={{ color:textColor, fontFamily:textFontFamily, fontSize:textFontSize }} />
				) }

				{ blockMode === 'group' && (
					<GroupPreview items={groupItems} trackColor={groupTrackColor} barHeight={groupBarHeight}
						barRadius={groupBarRadius} gap={groupGap} showPct={groupShowPercentage}
						labelPos={groupLabelPosition} pctPos={groupPercentagePosition} inlineGap={groupInlineGap}
						textFontSize={textFontSize} textFontFamily={textFontFamily} textColor={textColor}
						pctColor={percentageTextColor} pctFontSize={percentageFontSize} pctFontFamily={percentageFontFamily} />
				) }

				{ blockMode === 'counter' && (
					<CounterPreview target={counterTarget} prefix={counterPrefix} suffix={counterSuffix}
						label={progressName} fontSize={counterFontSize} color={counterColor}
						showBar={counterShowBar} percentage={percentage} fillStyle={fillStyle}
						trackColor={trackColor} barRadius={barRadius}
						textColor={textColor} textFontSize={textFontSize} textFontFamily={textFontFamily} />
				) }

				{ blockMode === 'single' && (
					<SinglePreview isCircle={isCircle} percentage={percentage} fillColor={fillColor}
						trackColor={trackColor} showPercentage={showPercentage} progressHeight={progressHeight}
						textColor={textColor} percentageTextColor={percentageTextColor}
						textFontSize={textFontSize} percentageFontSize={percentageFontSize}
						textFontFamily={textFontFamily} percentageFontFamily={percentageFontFamily}
						fillStyle={fillStyle} barRadius={barRadius} labelPosition={labelPosition}
						percentagePosition={percentagePosition} progressName={progressName}
						showMilestone={showMilestone} milestoneValue={milestoneValue} milestoneLabel={milestoneLabel}
						showTooltip={ showTooltip } tooltipText={tooltipText} inlineGap={inlineGap} />
				) }

			</div>
		</>
	);
}

// ─── Radial Preview ───────────────────────────────────────────────────────────
function RadialPreview( { percentage, size, strokeWidth, strokeColor, trackColor, textColor, bg, label, labelStyle } ) {
	const r    = ( size / 2 ) - strokeWidth - 2;
	const circ = 2 * Math.PI * r;
	const dash = ( percentage / 100 ) * circ;
	const cx   = size / 2;
	return (
		<div style={{ textAlign:'center' }}>
			<div style={{ width:size, height:size, background:bg, borderRadius:'50%', display:'inline-block', position:'relative' }}>
				<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform:'rotate(-90deg)' }}>
					<circle cx={cx} cy={cx} r={r} fill="none" stroke={trackColor}  strokeWidth={strokeWidth} />
					<circle cx={cx} cy={cx} r={r} fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
						strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" />
				</svg>
				<div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
					<span style={{ fontSize:size*0.18, fontWeight:700, color:textColor, lineHeight:1 }}>{ percentage }%</span>
				</div>
			</div>
			{ label && <div style={{ ...labelStyle, marginTop:8 }}>{ label }</div> }
		</div>
	);
}

// ─── Group Preview ────────────────────────────────────────────────────────────
function GroupPreview( { items, trackColor, barHeight, barRadius, gap, showPct, labelPos, pctPos, inlineGap, textFontSize, textFontFamily, textColor, pctColor, pctFontSize, pctFontFamily } ) {
	const pctRightOfLabel = pctPos === 'label-right';
	const pctInsideBar    = pctPos === 'inside';
	const pctOutsideRight = pctPos === 'outside-right';
	return (
		<div style={{ display:'flex', flexDirection:'column', gap }}>
			{ items.map( ( item, i ) => (
				<div key={i}>
					{ ( labelPos === 'above' || ( labelPos === 'inline' && pctRightOfLabel ) ) && (
						<div style={{ display:'flex', alignItems:'center', justifyContent: pctRightOfLabel ? 'space-between' : 'flex-start', marginBottom: labelPos === 'above' ? 6 : 0, gap: inlineGap }}>
							<span style={{ fontSize:textFontSize, fontFamily:textFontFamily, color:textColor, fontWeight:600 }}>{ item.label }</span>
							{ showPct && pctRightOfLabel && <span style={{ fontSize:pctFontSize, fontFamily:pctFontFamily, color:pctColor, fontWeight:600, flexShrink:0 }}>{ item.percentage }%</span> }
						</div>
					) }
					<div style={{ display:'flex', alignItems:'center', gap: labelPos === 'inline' ? inlineGap : 0 }}>
						{ labelPos === 'inline' && !pctRightOfLabel && (
							<span style={{ fontSize:textFontSize, fontFamily:textFontFamily, color:textColor, fontWeight:600, flexShrink:0 }}>{ item.label }</span>
						) }
						<div style={{ flex:1, position:'relative' }}>
							<div style={{ backgroundColor:trackColor, height:barHeight, borderRadius:barRadius, overflow:'hidden', position:'relative' }}>
								<div style={{ width:`${item.percentage}%`, height:'100%', backgroundColor:item.color, borderRadius:barRadius, display:'flex', alignItems:'center', justifyContent:'center', transition:'width .3s ease' }}>
									{ showPct && pctInsideBar && <span style={{ fontSize:pctFontSize, fontFamily:pctFontFamily, color:pctColor, fontWeight:600, whiteSpace:'nowrap' }}>{ item.percentage }%</span> }
								</div>
							</div>
						</div>
						{ showPct && pctOutsideRight && (
							<span style={{ fontSize:pctFontSize, fontFamily:pctFontFamily, color:pctColor, fontWeight:600, flexShrink:0, minWidth:36, textAlign:'right' }}>{ item.percentage }%</span>
						) }
					</div>
				</div>
			) ) }
		</div>
	);
}

// ─── Counter Preview ──────────────────────────────────────────────────────────
function CounterPreview( { target, prefix, suffix, label, fontSize, color, showBar, percentage, fillStyle, trackColor, barRadius, textColor, textFontSize, textFontFamily } ) {
	return (
		<div style={{ textAlign:'center' }}>
			<div style={{ fontSize, fontWeight:700, color, lineHeight:1.1 }}>{ prefix }{ target.toLocaleString() }{ suffix }</div>
			{ label && <div style={{ fontSize:textFontSize, fontFamily:textFontFamily, color:textColor, marginTop:6 }}>{ label }</div> }
			{ showBar && (
				<div style={{ marginTop:10 }}>
					<div style={{ backgroundColor:trackColor, height:8, borderRadius:barRadius, overflow:'hidden' }}>
						<div style={{ width:`${percentage}%`, height:'100%', borderRadius:barRadius, ...fillStyle }} />
					</div>
				</div>
			) }
		</div>
	);
}

// ─── Single Bar Preview ───────────────────────────────────────────────────────
function SinglePreview( {
	isCircle, percentage, fillColor, trackColor, showPercentage, progressHeight,
	textColor, percentageTextColor, textFontSize, percentageFontSize, textFontFamily, percentageFontFamily,
	fillStyle, barRadius, labelPosition, percentagePosition, progressName,
	showMilestone, milestoneValue, milestoneLabel, showTooltip, tooltipText, inlineGap,
} ) {
	if ( isCircle ) {
		return (
			<div className="progress-circle">
				<svg viewBox="0 0 36 36">
					<path className="circle-bg"   d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
					<path className="circle-fill" strokeDasharray={`${percentage}, 100`} style={{ stroke:fillColor }}
						d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
				</svg>
				{ showPercentage && <span className="circle-percentage" style={{ color:percentageTextColor, fontSize:percentageFontSize, fontFamily:percentageFontFamily }}>{ percentage }%</span> }
			</div>
		);
	}

	const nameStyle = { color:textColor, fontSize:textFontSize, fontFamily:textFontFamily };
	const pctStyle  = { color:percentageTextColor, fontSize:percentageFontSize, fontFamily:percentageFontFamily, fontWeight:600, whiteSpace:'nowrap' };
	const bothAbove = progressName && labelPosition === 'above' && showPercentage && percentagePosition === 'above';
	const isInline  = labelPosition === 'inline';

	const bar = (
		<div style={{ flex: isInline ? 1 : undefined, position:'relative' }}
			title={ showTooltip && tooltipText ? `${tooltipText}: ${percentage}%` : undefined }>
			<div style={{ backgroundColor:trackColor, height:progressHeight, borderRadius:barRadius, overflow:'hidden', position:'relative' }}>
				<div style={{ width:`${percentage}%`, height:'100%', borderRadius:barRadius, ...fillStyle, display:'flex', alignItems:'center', justifyContent:'center', transition:'width .3s ease' }}>
					{ showPercentage && percentagePosition === 'inside' && (
						<span style={{ ...pctStyle, textShadow:'0 1px 2px rgba(0,0,0,.2)' }}>{ percentage }%</span>
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
		<div>
			{ bothAbove && (
				<div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:6 }}>
					<span style={{ ...nameStyle, fontWeight:600 }}>{ progressName }</span>
					<span style={ pctStyle }>{ percentage }%</span>
				</div>
			) }
			{ !bothAbove && !isInline && labelPosition === 'above' && progressName && (
				<div style={{ ...nameStyle, fontWeight:600, marginBottom:8 }}>{ progressName }</div>
			) }
			{ !bothAbove && !isInline && showPercentage && percentagePosition === 'above' && (
				<div style={{ ...pctStyle, textAlign:'right', marginBottom:4 }}>{ percentage }%</div>
			) }
			{ isInline ? (
				<div style={{ display:'flex', alignItems:'center', gap:inlineGap }}>
					{ progressName && <span style={{ ...nameStyle, fontWeight:600, flexShrink:0 }}>{ progressName }</span> }
					{ bar }
					{ showPercentage && percentagePosition === 'outside-right' && <span style={ pctStyle }>{ percentage }%</span> }
				</div>
			) : (
				<>
					{ bar }
					{ showPercentage && percentagePosition === 'outside-right' && <div style={{ ...pctStyle, marginTop:4 }}>{ percentage }%</div> }
				</>
			) }
			{ !isInline && labelPosition === 'below' && progressName && (
				<div style={{ ...nameStyle, fontWeight:600, marginTop:8 }}>{ progressName }</div>
			) }
		</div>
	);
}