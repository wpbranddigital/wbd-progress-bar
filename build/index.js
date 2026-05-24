/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wpbb/wbd-progress-bar","version":"1.1.1","title":"Progress Bar","category":"widgets","icon":"chart-bar","description":"Display progress, skills, or statistics with a beautiful animated progress bar.","keywords":["progress","bar","percentage","chart","statistics","skills","animated","counter","radial","circular"],"example":{"attributes":{"blockMode":"single","progressName":"Project Completion","percentage":75,"fillColor":"#4CAF50","trackColor":"#e5e5e5","showPercentage":true,"progressHeight":14,"textColor":"#333333","percentageTextColor":"#ffffff","textFontSize":14,"percentageFontSize":10,"textFontFamily":"inherit","percentageFontFamily":"inherit","animationType":"ease","animationDuration":1.2,"barRadius":999,"labelPosition":"above","percentagePosition":"inside"}},"attributes":{"blockMode":{"type":"string","default":"single"},"progressName":{"type":"string","default":""},"percentage":{"type":"number","default":50},"fillColor":{"type":"string","default":"#4CAF50"},"trackColor":{"type":"string","default":"#e5e5e5"},"showPercentage":{"type":"boolean","default":true},"progressHeight":{"type":"number","default":12},"textColor":{"type":"string","default":"#333333"},"percentageTextColor":{"type":"string","default":"#FFE200"},"textFontSize":{"type":"number","default":14},"percentageFontSize":{"type":"number","default":10},"textFontFamily":{"type":"string","default":"inherit"},"percentageFontFamily":{"type":"string","default":"inherit"},"animationType":{"type":"string","default":"ease"},"animationDuration":{"type":"number","default":1.2},"animateOnScroll":{"type":"boolean","default":false},"showMilestone":{"type":"boolean","default":false},"milestoneValue":{"type":"number","default":50},"milestoneLabel":{"type":"string","default":""},"showTooltip":{"type":"boolean","default":false},"tooltipText":{"type":"string","default":""},"gradientFill":{"type":"boolean","default":false},"gradientColor2":{"type":"string","default":"#4CAF50"},"barRadius":{"type":"number","default":999},"labelPosition":{"type":"string","default":"above"},"percentagePosition":{"type":"string","default":"inside"},"inlineGap":{"type":"number","default":12},"circularThemeIndex":{"type":"number","default":0},"circularSize":{"type":"number","default":140},"circularStrokeWidth":{"type":"number","default":8},"circularStrokeColor":{"type":"string","default":"#1a73e8"},"circularTrackColor":{"type":"string","default":"#d2e3fc"},"circularTextColor":{"type":"string","default":"#1a73e8"},"circularBg":{"type":"string","default":"transparent"},"circularShowLabel":{"type":"boolean","default":false},"groupItems":{"type":"array","default":[{"label":"HTML & CSS","percentage":90,"color":"#1a73e8"},{"label":"JavaScript","percentage":75,"color":"#f9a825"},{"label":"React","percentage":65,"color":"#00bcd4"},{"label":"WordPress","percentage":80,"color":"#7b2d8b"}]},"groupTrackColor":{"type":"string","default":"#e5e5e5"},"groupBarHeight":{"type":"number","default":12},"groupBarRadius":{"type":"number","default":999},"groupGap":{"type":"number","default":16},"groupShowPercentage":{"type":"boolean","default":true},"groupLabelPosition":{"type":"string","default":"above"},"groupPercentagePosition":{"type":"string","default":"label-right"},"groupInlineGap":{"type":"number","default":12},"counterTarget":{"type":"number","default":1000},"counterPrefix":{"type":"string","default":""},"counterSuffix":{"type":"string","default":"+"},"counterDuration":{"type":"number","default":2},"counterFontSize":{"type":"number","default":48},"counterColor":{"type":"string","default":"#1a73e8"},"counterShowBar":{"type":"boolean","default":false}},"styles":[{"name":"medium","label":"Medium","isDefault":true},{"name":"circle","label":"Circle"},{"name":"striped","label":"Striped"},{"name":"thin","label":"Thin"},{"name":"thick","label":"Thick"}],"supports":{"html":false,"align":["wide","full"],"spacing":{"margin":true,"padding":true}},"textdomain":"wbd-progress-bar","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





// ─── Links ────────────────────────────────────────────────────────────────────

const rateLink = 'https://wordpress.org/support/plugin/wbd-progress-bar/reviews/#new-post';
const pageLink = 'https://www.wpbranddigital.org/contact/';

// ─── 10 Linear Templates ──────────────────────────────────────────────────────
const TEMPLATES = [{
  name: 'Ocean Blue',
  slug: 'ocean-blue',
  fillColor: '#1a73e8',
  trackColor: '#d2e3fc',
  textColor: '#1a1a2e',
  percentageTextColor: '#ffffff',
  progressHeight: 14,
  animationType: 'ease',
  animationDuration: 1.2,
  showPercentage: true,
  barRadius: 999,
  gradientFill: false,
  gradientColor2: '#1a73e8'
}, {
  name: 'Sunset Fire',
  slug: 'sunset-fire',
  fillColor: '#ff6b35',
  trackColor: '#ffe8e0',
  textColor: '#2d1b0e',
  percentageTextColor: '#ffffff',
  progressHeight: 16,
  animationType: 'ease-out',
  animationDuration: 1.0,
  showPercentage: true,
  barRadius: 999,
  gradientFill: true,
  gradientColor2: '#f7c59f'
}, {
  name: 'Forest Green',
  slug: 'forest-green',
  fillColor: '#2d6a4f',
  trackColor: '#d8f3dc',
  textColor: '#1b4332',
  percentageTextColor: '#d8f3dc',
  progressHeight: 12,
  animationType: 'ease-in-out',
  animationDuration: 1.5,
  showPercentage: true,
  barRadius: 4,
  gradientFill: true,
  gradientColor2: '#74c69d'
}, {
  name: 'Purple Galaxy',
  slug: 'purple-galaxy',
  fillColor: '#7b2d8b',
  trackColor: '#f3e5f5',
  textColor: '#3d0066',
  percentageTextColor: '#ffffff',
  progressHeight: 18,
  animationType: 'bounce',
  animationDuration: 1.3,
  showPercentage: true,
  barRadius: 999,
  gradientFill: true,
  gradientColor2: '#ce93d8'
}, {
  name: 'Golden Hour',
  slug: 'golden-hour',
  fillColor: '#f9a825',
  trackColor: '#fff8e1',
  textColor: '#4a3500',
  percentageTextColor: '#4a3500',
  progressHeight: 20,
  animationType: 'ease',
  animationDuration: 1.0,
  showPercentage: true,
  barRadius: 999,
  gradientFill: true,
  gradientColor2: '#fff176'
}, {
  name: 'Midnight Dark',
  slug: 'midnight-dark',
  fillColor: '#00e5ff',
  trackColor: '#263238',
  textColor: '#eceff1',
  percentageTextColor: '#000000',
  progressHeight: 14,
  animationType: 'ease-in-out',
  animationDuration: 1.2,
  showPercentage: true,
  barRadius: 0,
  gradientFill: false,
  gradientColor2: '#00e5ff'
}, {
  name: 'Rose Pink',
  slug: 'rose-pink',
  fillColor: '#e91e8c',
  trackColor: '#fce4f3',
  textColor: '#880e4f',
  percentageTextColor: '#ffffff',
  progressHeight: 14,
  animationType: 'ease',
  animationDuration: 1.0,
  showPercentage: true,
  barRadius: 999,
  gradientFill: true,
  gradientColor2: '#f48fb1'
}, {
  name: 'Arctic Ice',
  slug: 'arctic-ice',
  fillColor: '#4fc3f7',
  trackColor: '#e1f5fe',
  textColor: '#01579b',
  percentageTextColor: '#003d6b',
  progressHeight: 10,
  animationType: 'ease-out',
  animationDuration: 0.8,
  showPercentage: true,
  barRadius: 999,
  gradientFill: true,
  gradientColor2: '#e1f5fe'
}, {
  name: 'Corporate Gray',
  slug: 'corporate-gray',
  fillColor: '#546e7a',
  trackColor: '#eceff1',
  textColor: '#263238',
  percentageTextColor: '#ffffff',
  progressHeight: 12,
  animationType: 'ease',
  animationDuration: 1.0,
  showPercentage: true,
  barRadius: 2,
  gradientFill: false,
  gradientColor2: '#546e7a'
}, {
  name: 'Lemon Lime',
  slug: 'lemon-lime',
  fillColor: '#76c442',
  trackColor: '#f1f8e9',
  textColor: '#33691e',
  percentageTextColor: '#1b5e20',
  progressHeight: 16,
  animationType: 'ease-out',
  animationDuration: 1.1,
  showPercentage: true,
  barRadius: 999,
  gradientFill: true,
  gradientColor2: '#dce775'
}];
const TEMPLATE_COLORS = {
  'ocean-blue': ['#1a73e8', '#d2e3fc'],
  'sunset-fire': ['#ff6b35', '#f7c59f'],
  'forest-green': ['#2d6a4f', '#74c69d'],
  'purple-galaxy': ['#7b2d8b', '#ce93d8'],
  'golden-hour': ['#f9a825', '#fff176'],
  'midnight-dark': ['#00e5ff', '#263238'],
  'rose-pink': ['#e91e8c', '#f48fb1'],
  'arctic-ice': ['#4fc3f7', '#e1f5fe'],
  'corporate-gray': ['#546e7a', '#eceff1'],
  'lemon-lime': ['#76c442', '#dce775']
};

// ─── 10 Circular Themes ───────────────────────────────────────────────────────
const CIRCULAR_THEMES = [{
  name: 'Classic Blue',
  strokeColor: '#1a73e8',
  trackStroke: '#d2e3fc',
  textColor: '#1a73e8',
  bg: 'transparent',
  strokeWidth: 8
}, {
  name: 'Neon Green',
  strokeColor: '#00e676',
  trackStroke: '#1b3a24',
  textColor: '#00e676',
  bg: '#0d1f14',
  strokeWidth: 10
}, {
  name: 'Warm Coral',
  strokeColor: '#ff6b35',
  trackStroke: '#ffe8e0',
  textColor: '#ff6b35',
  bg: 'transparent',
  strokeWidth: 7
}, {
  name: 'Purple Glow',
  strokeColor: '#ce93d8',
  trackStroke: '#3d0066',
  textColor: '#ce93d8',
  bg: '#1a0033',
  strokeWidth: 10
}, {
  name: 'Golden Ring',
  strokeColor: '#f9a825',
  trackStroke: '#fff8e1',
  textColor: '#f9a825',
  bg: 'transparent',
  strokeWidth: 6
}, {
  name: 'Icy Blue',
  strokeColor: '#4fc3f7',
  trackStroke: '#e1f5fe',
  textColor: '#01579b',
  bg: 'transparent',
  strokeWidth: 8
}, {
  name: 'Rose Red',
  strokeColor: '#e91e8c',
  trackStroke: '#fce4f3',
  textColor: '#e91e8c',
  bg: 'transparent',
  strokeWidth: 9
}, {
  name: 'Slate Gray',
  strokeColor: '#546e7a',
  trackStroke: '#eceff1',
  textColor: '#546e7a',
  bg: 'transparent',
  strokeWidth: 7
}, {
  name: 'Lime Fresh',
  strokeColor: '#76c442',
  trackStroke: '#f1f8e9',
  textColor: '#33691e',
  bg: 'transparent',
  strokeWidth: 8
}, {
  name: 'Midnight Teal',
  strokeColor: '#00bcd4',
  trackStroke: '#263238',
  textColor: '#00bcd4',
  bg: '#0a1f26',
  strokeWidth: 10
}];
function Edit({
  attributes,
  setAttributes
}) {
  const {
    progressName,
    percentage,
    fillColor,
    trackColor,
    showPercentage,
    progressHeight,
    textColor,
    percentageTextColor,
    textFontSize,
    percentageFontSize,
    textFontFamily,
    percentageFontFamily,
    animationType,
    animationDuration,
    animateOnScroll,
    showMilestone,
    milestoneValue,
    milestoneLabel,
    showTooltip,
    tooltipText,
    gradientFill,
    gradientColor2,
    barRadius,
    labelPosition,
    percentagePosition,
    inlineGap,
    blockMode,
    circularThemeIndex,
    circularSize,
    circularStrokeWidth,
    circularStrokeColor,
    circularTrackColor,
    circularTextColor,
    circularBg,
    circularShowLabel,
    groupItems,
    groupTrackColor,
    groupBarHeight,
    groupBarRadius,
    groupGap,
    groupShowPercentage,
    groupLabelPosition,
    groupPercentagePosition,
    groupInlineGap,
    counterTarget,
    counterPrefix,
    counterSuffix,
    counterDuration,
    counterFontSize,
    counterColor,
    counterShowBar
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wbd-progress-bar'
  });
  const isCircle = blockProps.className.includes('is-style-circle');
  const fillStyle = gradientFill ? {
    background: `linear-gradient(90deg,${fillColor},${gradientColor2 || fillColor})`
  } : {
    backgroundColor: fillColor
  };
  const applyTemplate = t => setAttributes({
    fillColor: t.fillColor,
    trackColor: t.trackColor,
    textColor: t.textColor,
    percentageTextColor: t.percentageTextColor,
    progressHeight: t.progressHeight,
    animationType: t.animationType,
    animationDuration: t.animationDuration,
    showPercentage: t.showPercentage,
    barRadius: t.barRadius,
    gradientFill: t.gradientFill,
    gradientColor2: t.gradientColor2
  });
  const applyCircularTheme = idx => {
    const t = CIRCULAR_THEMES[idx];
    setAttributes({
      circularThemeIndex: idx,
      circularStrokeColor: t.strokeColor,
      circularTrackColor: t.trackStroke,
      circularTextColor: t.textColor,
      circularBg: t.bg,
      circularStrokeWidth: t.strokeWidth
    });
  };
  const updateGroupItem = (idx, key, val) => setAttributes({
    groupItems: groupItems.map((it, i) => i === idx ? {
      ...it,
      [key]: val
    } : it)
  });
  const addGroupItem = () => setAttributes({
    groupItems: [...groupItems, {
      label: 'New Skill',
      percentage: 50,
      color: fillColor
    }]
  });
  const removeGroupItem = idx => setAttributes({
    groupItems: groupItems.filter((_, i) => i !== idx)
  });
  const fontSizes = [{
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Small', 'wbd-progress-bar'),
    slug: 'small',
    size: 12
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'wbd-progress-bar'),
    slug: 'normal',
    size: 14
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Medium', 'wbd-progress-bar'),
    slug: 'medium',
    size: 16
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Large', 'wbd-progress-bar'),
    slug: 'large',
    size: 20
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Extra Large', 'wbd-progress-bar'),
    slug: 'extra-large',
    size: 24
  }];
  const percentageFontSizes = [{
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Extra Small', 'wbd-progress-bar'),
    slug: 'extra-small',
    size: 8
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Small', 'wbd-progress-bar'),
    slug: 'small',
    size: 10
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'wbd-progress-bar'),
    slug: 'normal',
    size: 12
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Medium', 'wbd-progress-bar'),
    slug: 'medium',
    size: 14
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Large', 'wbd-progress-bar'),
    slug: 'large',
    size: 16
  }];
  const fontFamilyOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inherit from theme', 'wbd-progress-bar'),
    value: 'inherit'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('System Default', 'wbd-progress-bar'),
    value: 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Arial', 'wbd-progress-bar'),
    value: 'Arial,sans-serif'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Helvetica', 'wbd-progress-bar'),
    value: '"Helvetica Neue",Helvetica,sans-serif'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Georgia', 'wbd-progress-bar'),
    value: 'Georgia,serif'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Times New Roman', 'wbd-progress-bar'),
    value: '"Times New Roman",Times,serif'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Courier New', 'wbd-progress-bar'),
    value: '"Courier New",Courier,monospace'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Verdana', 'wbd-progress-bar'),
    value: 'Verdana,sans-serif'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Trebuchet MS', 'wbd-progress-bar'),
    value: '"Trebuchet MS",sans-serif'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "wbd-help-banner",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "wbd-help-links",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
            href: pageLink,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Support', 'wbd-progress-bar')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "wbd-help-sep",
            children: "\xB7"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
            href: rateLink,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rate Us ★', 'wbd-progress-bar')
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Mode', 'wbd-progress-bar'),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display Mode', 'wbd-progress-bar'),
          value: blockMode,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Single Bar', 'wbd-progress-bar'),
            value: 'single'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Circular / Radial', 'wbd-progress-bar'),
            value: 'circular'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Group / Skills Section', 'wbd-progress-bar'),
            value: 'group'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Number Counter', 'wbd-progress-bar'),
            value: 'counter'
          }],
          onChange: v => setAttributes({
            blockMode: v
          })
        })
      }), blockMode === 'circular' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Circular Settings', 'wbd-progress-bar'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          style: {
            fontSize: 12,
            color: '#757575',
            marginBottom: 10
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Choose a theme:', 'wbd-progress-bar')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "wbd-circular-theme-grid",
          children: CIRCULAR_THEMES.map((t, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
            text: t.name,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
              className: `wbd-circular-theme-btn${circularThemeIndex === i ? ' is-active' : ''}`,
              onClick: () => applyCircularTheme(i),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                viewBox: "0 0 100 100",
                width: "44",
                height: "44",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
                  cx: "50",
                  cy: "50",
                  r: "38",
                  fill: t.bg === 'transparent' ? '#f0f0f0' : t.bg,
                  stroke: t.trackStroke,
                  strokeWidth: "8"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
                  cx: "50",
                  cy: "50",
                  r: "38",
                  fill: "none",
                  stroke: t.strokeColor,
                  strokeWidth: "8",
                  strokeDasharray: `${0.72 * 2 * Math.PI * 38} ${2 * Math.PI * 38}`,
                  strokeLinecap: "round",
                  transform: "rotate(-90 50 50)"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                children: t.name
              })]
            })
          }, i))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Size (px)', 'wbd-progress-bar'),
          value: circularSize,
          onChange: v => setAttributes({
            circularSize: v
          }),
          min: 80,
          max: 300
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stroke Width', 'wbd-progress-bar'),
          value: circularStrokeWidth,
          onChange: v => setAttributes({
            circularStrokeWidth: v
          }),
          min: 3,
          max: 20
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Progress Percentage', 'wbd-progress-bar'),
          value: percentage,
          onChange: v => setAttributes({
            percentage: v
          }),
          min: 0,
          max: 100
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Label Below', 'wbd-progress-bar'),
          checked: circularShowLabel,
          onChange: v => setAttributes({
            circularShowLabel: v
          })
        }), circularShowLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label', 'wbd-progress-bar'),
          value: progressName,
          onChange: v => setAttributes({
            progressName: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stroke Color', 'wbd-progress-bar'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: circularStrokeColor,
            onChangeComplete: v => setAttributes({
              circularStrokeColor: v.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Track Color', 'wbd-progress-bar'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: circularTrackColor,
            onChangeComplete: v => setAttributes({
              circularTrackColor: v.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center Text Color', 'wbd-progress-bar'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: circularTextColor,
            onChangeComplete: v => setAttributes({
              circularTextColor: v.hex
            }),
            disableAlpha: true
          })
        })]
      }), blockMode === 'group' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Group / Skills Settings', 'wbd-progress-bar'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gap Between Bars (px)', 'wbd-progress-bar'),
          value: groupGap,
          onChange: v => setAttributes({
            groupGap: v
          }),
          min: 4,
          max: 48
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bar Height (px)', 'wbd-progress-bar'),
          value: groupBarHeight,
          onChange: v => setAttributes({
            groupBarHeight: v
          }),
          min: 6,
          max: 40
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bar Radius', 'wbd-progress-bar'),
          value: groupBarRadius,
          onChange: v => setAttributes({
            groupBarRadius: v
          }),
          min: 0,
          max: 999
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label Position', 'wbd-progress-bar'),
          value: groupLabelPosition,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Above bar', 'wbd-progress-bar'),
            value: 'above'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inline row', 'wbd-progress-bar'),
            value: 'inline'
          }],
          onChange: v => setAttributes({
            groupLabelPosition: v
          })
        }), groupLabelPosition === 'inline' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inline Gap (px)', 'wbd-progress-bar'),
          value: groupInlineGap,
          onChange: v => setAttributes({
            groupInlineGap: v
          }),
          min: 4,
          max: 60
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Percentage Position', 'wbd-progress-bar'),
          value: groupPercentagePosition,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inside bar', 'wbd-progress-bar'),
            value: 'inside'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Outside right', 'wbd-progress-bar'),
            value: 'outside-right'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Same line as label (right)', 'wbd-progress-bar'),
            value: 'label-right'
          }],
          onChange: v => setAttributes({
            groupPercentagePosition: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Percentage', 'wbd-progress-bar'),
          checked: groupShowPercentage,
          onChange: v => setAttributes({
            groupShowPercentage: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Track Color', 'wbd-progress-bar'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: groupTrackColor,
            onChangeComplete: v => setAttributes({
              groupTrackColor: v.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          style: {
            fontWeight: 600,
            marginTop: 12,
            marginBottom: 8,
            fontSize: 13
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bar Items', 'wbd-progress-bar')
        }), groupItems.map((item, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "wbd-group-item-editor",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "wbd-group-item-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "wbd-group-item-num",
              children: idx + 1
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              className: "wbd-group-item-remove",
              onClick: () => removeGroupItem(idx),
              children: "\u2715"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label', 'wbd-progress-bar'),
            value: item.label,
            onChange: v => updateGroupItem(idx, 'label', v)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Percentage', 'wbd-progress-bar'),
            value: item.percentage,
            onChange: v => updateGroupItem(idx, 'percentage', v),
            min: 0,
            max: 100
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bar Color', 'wbd-progress-bar'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
              color: item.color,
              onChangeComplete: v => updateGroupItem(idx, 'color', v.hex),
              disableAlpha: true
            })
          })]
        }, idx)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "wbd-add-item-btn",
          onClick: addGroupItem,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Add Bar', 'wbd-progress-bar')
        })]
      }), blockMode === 'counter' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Number Counter Settings', 'wbd-progress-bar'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Target Number', 'wbd-progress-bar'),
          value: counterTarget,
          onChange: v => setAttributes({
            counterTarget: v
          }),
          min: 0,
          max: 99999
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Prefix (e.g. $)', 'wbd-progress-bar'),
          value: counterPrefix,
          onChange: v => setAttributes({
            counterPrefix: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Suffix (e.g. %, K+)', 'wbd-progress-bar'),
          value: counterSuffix,
          onChange: v => setAttributes({
            counterSuffix: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label / Description', 'wbd-progress-bar'),
          value: progressName,
          onChange: v => setAttributes({
            progressName: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Animation Duration (s)', 'wbd-progress-bar'),
          value: counterDuration,
          onChange: v => setAttributes({
            counterDuration: v
          }),
          min: 0.5,
          max: 5,
          step: 0.1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font Size (px)', 'wbd-progress-bar'),
          value: counterFontSize,
          onChange: v => setAttributes({
            counterFontSize: v
          }),
          min: 20,
          max: 100
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Number Color', 'wbd-progress-bar'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: counterColor,
            onChangeComplete: v => setAttributes({
              counterColor: v.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Progress Bar Below', 'wbd-progress-bar'),
          checked: counterShowBar,
          onChange: v => setAttributes({
            counterShowBar: v
          })
        }), counterShowBar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bar Percentage', 'wbd-progress-bar'),
          value: percentage,
          onChange: v => setAttributes({
            percentage: v
          }),
          min: 0,
          max: 100
        })]
      }), blockMode === 'single' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Template Styles', 'wbd-progress-bar'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "wbd-template-grid",
          children: TEMPLATES.map(tpl => {
            const [c1, c2] = TEMPLATE_COLORS[tpl.slug];
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
              text: tpl.name,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                className: "wbd-template-btn",
                onClick: () => applyTemplate(tpl),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "wbd-template-swatch",
                  style: {
                    background: `linear-gradient(135deg,${c1} 50%,${c2} 50%)`
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "wbd-template-label",
                  children: tpl.name
                })]
              })
            }, tpl.slug);
          })
        })
      }), blockMode === 'single' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Progress Settings', 'wbd-progress-bar'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Progress Name', 'wbd-progress-bar'),
          value: progressName,
          onChange: v => setAttributes({
            progressName: v
          }),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g., Project Completion', 'wbd-progress-bar')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Progress Percentage', 'wbd-progress-bar'),
          value: percentage,
          onChange: v => setAttributes({
            percentage: v
          }),
          min: 0,
          max: 100
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Progress Height (px)', 'wbd-progress-bar'),
          value: progressHeight,
          onChange: v => setAttributes({
            progressHeight: v
          }),
          min: 6,
          max: 40
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bar Corner Radius', 'wbd-progress-bar'),
          value: barRadius,
          onChange: v => setAttributes({
            barRadius: v
          }),
          min: 0,
          max: 999
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Percentage Text', 'wbd-progress-bar'),
          checked: showPercentage,
          onChange: v => setAttributes({
            showPercentage: v
          })
        }), showPercentage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Percentage Position', 'wbd-progress-bar'),
          value: percentagePosition,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inside bar', 'wbd-progress-bar'),
            value: 'inside'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Outside right', 'wbd-progress-bar'),
            value: 'outside-right'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Above bar', 'wbd-progress-bar'),
            value: 'above'
          }],
          onChange: v => setAttributes({
            percentagePosition: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label Position', 'wbd-progress-bar'),
          value: labelPosition,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Above bar', 'wbd-progress-bar'),
            value: 'above'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Below bar', 'wbd-progress-bar'),
            value: 'below'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inline row', 'wbd-progress-bar'),
            value: 'inline'
          }],
          onChange: v => setAttributes({
            labelPosition: v
          })
        }), labelPosition === 'inline' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inline Gap (px)', 'wbd-progress-bar'),
          value: inlineGap,
          onChange: v => setAttributes({
            inlineGap: v
          }),
          min: 4,
          max: 60
        })]
      }), (blockMode === 'single' || blockMode === 'counter') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Animation', 'wbd-progress-bar'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Animation Type', 'wbd-progress-bar'),
          value: animationType,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ease', 'wbd-progress-bar'),
            value: 'ease'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ease In', 'wbd-progress-bar'),
            value: 'ease-in'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ease Out', 'wbd-progress-bar'),
            value: 'ease-out'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ease In Out', 'wbd-progress-bar'),
            value: 'ease-in-out'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Linear', 'wbd-progress-bar'),
            value: 'linear'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bounce', 'wbd-progress-bar'),
            value: 'bounce'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Elastic', 'wbd-progress-bar'),
            value: 'elastic'
          }],
          onChange: v => setAttributes({
            animationType: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Duration (s)', 'wbd-progress-bar'),
          value: animationDuration,
          onChange: v => setAttributes({
            animationDuration: v
          }),
          min: 0.2,
          max: 3.0,
          step: 0.1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Animate on Scroll', 'wbd-progress-bar'),
          checked: animateOnScroll,
          onChange: v => setAttributes({
            animateOnScroll: v
          })
        })]
      }), blockMode === 'single' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Milestone & Tooltip', 'wbd-progress-bar'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Milestone Marker', 'wbd-progress-bar'),
          checked: showMilestone,
          onChange: v => setAttributes({
            showMilestone: v
          })
        }), showMilestone && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Milestone at (%)', 'wbd-progress-bar'),
            value: milestoneValue,
            onChange: v => setAttributes({
              milestoneValue: v
            }),
            min: 1,
            max: 100
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Milestone Label', 'wbd-progress-bar'),
            value: milestoneLabel,
            onChange: v => setAttributes({
              milestoneLabel: v
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g., Half Goal!', 'wbd-progress-bar')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Hover Tooltip', 'wbd-progress-bar'),
            checked: showTooltip,
            onChange: v => setAttributes({
              showTooltip: v
            })
          }), showTooltip && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tooltip Text', 'wbd-progress-bar'),
            value: tooltipText,
            onChange: v => setAttributes({
              tooltipText: v
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g., Fundraising Goal', 'wbd-progress-bar')
          })]
        })]
      }), blockMode === 'single' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Typography', 'wbd-progress-bar'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Progress Name Font Family', 'wbd-progress-bar'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            value: textFontFamily,
            options: fontFamilyOptions,
            onChange: v => setAttributes({
              textFontFamily: v
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Progress Name Font Size', 'wbd-progress-bar'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FontSizePicker, {
            fontSizes: fontSizes,
            value: textFontSize,
            onChange: v => setAttributes({
              textFontSize: v
            }),
            withReset: true,
            fallbackFontSize: 14
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Percentage Font Family', 'wbd-progress-bar'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            value: percentageFontFamily,
            options: fontFamilyOptions,
            onChange: v => setAttributes({
              percentageFontFamily: v
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Percentage Font Size', 'wbd-progress-bar'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FontSizePicker, {
            fontSizes: percentageFontSizes,
            value: percentageFontSize,
            onChange: v => setAttributes({
              percentageFontSize: v
            }),
            withReset: true,
            fallbackFontSize: 10
          })
        })]
      }), blockMode === 'single' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color Settings', 'wbd-progress-bar'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gradient Fill', 'wbd-progress-bar'),
          checked: gradientFill,
          onChange: v => setAttributes({
            gradientFill: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fill Color', 'wbd-progress-bar'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: fillColor,
            onChangeComplete: v => setAttributes({
              fillColor: v.hex
            }),
            disableAlpha: true
          })
        }), gradientFill && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gradient End Color', 'wbd-progress-bar'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: gradientColor2,
            onChangeComplete: v => setAttributes({
              gradientColor2: v.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Track Color', 'wbd-progress-bar'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: trackColor,
            onChangeComplete: v => setAttributes({
              trackColor: v.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label Color', 'wbd-progress-bar'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: textColor,
            onChangeComplete: v => setAttributes({
              textColor: v.hex,
              iconColor: v.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Percentage Text Color', 'wbd-progress-bar'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: percentageTextColor,
            onChangeComplete: v => setAttributes({
              percentageTextColor: v.hex
            }),
            disableAlpha: true
          })
        })]
      }), blockMode === 'group' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color Settings', 'wbd-progress-bar'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label Color', 'wbd-progress-bar'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: textColor,
            onChangeComplete: v => setAttributes({
              textColor: v.hex,
              iconColor: v.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Percentage Text Color', 'wbd-progress-bar'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: percentageTextColor,
            onChangeComplete: v => setAttributes({
              percentageTextColor: v.hex
            }),
            disableAlpha: true
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      ...blockProps,
      children: [blockMode === 'circular' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(RadialPreview, {
        percentage: percentage,
        size: circularSize,
        strokeWidth: circularStrokeWidth,
        strokeColor: circularStrokeColor,
        trackColor: circularTrackColor,
        textColor: circularTextColor,
        bg: circularBg,
        label: circularShowLabel ? progressName : '',
        labelStyle: {
          color: textColor,
          fontFamily: textFontFamily,
          fontSize: textFontSize
        }
      }), blockMode === 'group' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GroupPreview, {
        items: groupItems,
        trackColor: groupTrackColor,
        barHeight: groupBarHeight,
        barRadius: groupBarRadius,
        gap: groupGap,
        showPct: groupShowPercentage,
        labelPos: groupLabelPosition,
        pctPos: groupPercentagePosition,
        inlineGap: groupInlineGap,
        textFontSize: textFontSize,
        textFontFamily: textFontFamily,
        textColor: textColor,
        pctColor: percentageTextColor,
        pctFontSize: percentageFontSize,
        pctFontFamily: percentageFontFamily
      }), blockMode === 'counter' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CounterPreview, {
        target: counterTarget,
        prefix: counterPrefix,
        suffix: counterSuffix,
        label: progressName,
        fontSize: counterFontSize,
        color: counterColor,
        showBar: counterShowBar,
        percentage: percentage,
        fillStyle: fillStyle,
        trackColor: trackColor,
        barRadius: barRadius,
        textColor: textColor,
        textFontSize: textFontSize,
        textFontFamily: textFontFamily
      }), blockMode === 'single' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SinglePreview, {
        isCircle: isCircle,
        percentage: percentage,
        fillColor: fillColor,
        trackColor: trackColor,
        showPercentage: showPercentage,
        progressHeight: progressHeight,
        textColor: textColor,
        percentageTextColor: percentageTextColor,
        textFontSize: textFontSize,
        percentageFontSize: percentageFontSize,
        textFontFamily: textFontFamily,
        percentageFontFamily: percentageFontFamily,
        fillStyle: fillStyle,
        barRadius: barRadius,
        labelPosition: labelPosition,
        percentagePosition: percentagePosition,
        progressName: progressName,
        showMilestone: showMilestone,
        milestoneValue: milestoneValue,
        milestoneLabel: milestoneLabel,
        showTooltip: showTooltip,
        tooltipText: tooltipText,
        inlineGap: inlineGap
      })]
    })]
  });
}

// ─── Radial Preview ───────────────────────────────────────────────────────────
function RadialPreview({
  percentage,
  size,
  strokeWidth,
  strokeColor,
  trackColor,
  textColor,
  bg,
  label,
  labelStyle
}) {
  const r = size / 2 - strokeWidth - 2;
  const circ = 2 * Math.PI * r;
  const dash = percentage / 100 * circ;
  const cx = size / 2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    style: {
      textAlign: 'center'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      style: {
        width: size,
        height: size,
        background: bg,
        borderRadius: '50%',
        display: 'inline-block',
        position: 'relative'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`,
        style: {
          transform: 'rotate(-90deg)'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
          cx: cx,
          cy: cx,
          r: r,
          fill: "none",
          stroke: trackColor,
          strokeWidth: strokeWidth
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
          cx: cx,
          cy: cx,
          r: r,
          fill: "none",
          stroke: strokeColor,
          strokeWidth: strokeWidth,
          strokeDasharray: `${dash} ${circ}`,
          strokeLinecap: "round"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        style: {
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          style: {
            fontSize: size * 0.18,
            fontWeight: 700,
            color: textColor,
            lineHeight: 1
          },
          children: [percentage, "%"]
        })
      })]
    }), label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      style: {
        ...labelStyle,
        marginTop: 8
      },
      children: label
    })]
  });
}

// ─── Group Preview ────────────────────────────────────────────────────────────
function GroupPreview({
  items,
  trackColor,
  barHeight,
  barRadius,
  gap,
  showPct,
  labelPos,
  pctPos,
  inlineGap,
  textFontSize,
  textFontFamily,
  textColor,
  pctColor,
  pctFontSize,
  pctFontFamily
}) {
  const pctRightOfLabel = pctPos === 'label-right';
  const pctInsideBar = pctPos === 'inside';
  const pctOutsideRight = pctPos === 'outside-right';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap
    },
    children: items.map((item, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [(labelPos === 'above' || labelPos === 'inline' && pctRightOfLabel) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: pctRightOfLabel ? 'space-between' : 'flex-start',
          marginBottom: labelPos === 'above' ? 6 : 0,
          gap: inlineGap
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          style: {
            fontSize: textFontSize,
            fontFamily: textFontFamily,
            color: textColor,
            fontWeight: 600
          },
          children: item.label
        }), showPct && pctRightOfLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          style: {
            fontSize: pctFontSize,
            fontFamily: pctFontFamily,
            color: pctColor,
            fontWeight: 600,
            flexShrink: 0
          },
          children: [item.percentage, "%"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: labelPos === 'inline' ? inlineGap : 0
        },
        children: [labelPos === 'inline' && !pctRightOfLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          style: {
            fontSize: textFontSize,
            fontFamily: textFontFamily,
            color: textColor,
            fontWeight: 600,
            flexShrink: 0
          },
          children: item.label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            flex: 1,
            position: 'relative'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            style: {
              backgroundColor: trackColor,
              height: barHeight,
              borderRadius: barRadius,
              overflow: 'hidden',
              position: 'relative'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              style: {
                width: `${item.percentage}%`,
                height: '100%',
                backgroundColor: item.color,
                borderRadius: barRadius,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'width .3s ease'
              },
              children: showPct && pctInsideBar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                style: {
                  fontSize: pctFontSize,
                  fontFamily: pctFontFamily,
                  color: pctColor,
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                },
                children: [item.percentage, "%"]
              })
            })
          })
        }), showPct && pctOutsideRight && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          style: {
            fontSize: pctFontSize,
            fontFamily: pctFontFamily,
            color: pctColor,
            fontWeight: 600,
            flexShrink: 0,
            minWidth: 36,
            textAlign: 'right'
          },
          children: [item.percentage, "%"]
        })]
      })]
    }, i))
  });
}

// ─── Counter Preview ──────────────────────────────────────────────────────────
function CounterPreview({
  target,
  prefix,
  suffix,
  label,
  fontSize,
  color,
  showBar,
  percentage,
  fillStyle,
  trackColor,
  barRadius,
  textColor,
  textFontSize,
  textFontFamily
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    style: {
      textAlign: 'center'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      style: {
        fontSize,
        fontWeight: 700,
        color,
        lineHeight: 1.1
      },
      children: [prefix, target.toLocaleString(), suffix]
    }), label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      style: {
        fontSize: textFontSize,
        fontFamily: textFontFamily,
        color: textColor,
        marginTop: 6
      },
      children: label
    }), showBar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      style: {
        marginTop: 10
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        style: {
          backgroundColor: trackColor,
          height: 8,
          borderRadius: barRadius,
          overflow: 'hidden'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: `${percentage}%`,
            height: '100%',
            borderRadius: barRadius,
            ...fillStyle
          }
        })
      })
    })]
  });
}

// ─── Single Bar Preview ───────────────────────────────────────────────────────
function SinglePreview({
  isCircle,
  percentage,
  fillColor,
  trackColor,
  showPercentage,
  progressHeight,
  textColor,
  percentageTextColor,
  textFontSize,
  percentageFontSize,
  textFontFamily,
  percentageFontFamily,
  fillStyle,
  barRadius,
  labelPosition,
  percentagePosition,
  progressName,
  showMilestone,
  milestoneValue,
  milestoneLabel,
  showTooltip,
  tooltipText,
  inlineGap
}) {
  if (isCircle) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "progress-circle",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
        viewBox: "0 0 36 36",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          className: "circle-bg",
          d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          className: "circle-fill",
          strokeDasharray: `${percentage}, 100`,
          style: {
            stroke: fillColor
          },
          d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        })]
      }), showPercentage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
        className: "circle-percentage",
        style: {
          color: percentageTextColor,
          fontSize: percentageFontSize,
          fontFamily: percentageFontFamily
        },
        children: [percentage, "%"]
      })]
    });
  }
  const nameStyle = {
    color: textColor,
    fontSize: textFontSize,
    fontFamily: textFontFamily
  };
  const pctStyle = {
    color: percentageTextColor,
    fontSize: percentageFontSize,
    fontFamily: percentageFontFamily,
    fontWeight: 600,
    whiteSpace: 'nowrap'
  };
  const bothAbove = progressName && labelPosition === 'above' && showPercentage && percentagePosition === 'above';
  const isInline = labelPosition === 'inline';
  const bar = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    style: {
      flex: isInline ? 1 : undefined,
      position: 'relative'
    },
    title: showTooltip && tooltipText ? `${tooltipText}: ${percentage}%` : undefined,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      style: {
        backgroundColor: trackColor,
        height: progressHeight,
        borderRadius: barRadius,
        overflow: 'hidden',
        position: 'relative'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        style: {
          width: `${percentage}%`,
          height: '100%',
          borderRadius: barRadius,
          ...fillStyle,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'width .3s ease'
        },
        children: showPercentage && percentagePosition === 'inside' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          style: {
            ...pctStyle,
            textShadow: '0 1px 2px rgba(0,0,0,.2)'
          },
          children: [percentage, "%"]
        })
      }), showMilestone && milestoneValue > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "progress-milestone",
        style: {
          left: `${milestoneValue}%`
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "progress-milestone-line"
        }), milestoneLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "progress-milestone-label",
          children: milestoneLabel
        })]
      })]
    })
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [bothAbove && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 6
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        style: {
          ...nameStyle,
          fontWeight: 600
        },
        children: progressName
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
        style: pctStyle,
        children: [percentage, "%"]
      })]
    }), !bothAbove && !isInline && labelPosition === 'above' && progressName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      style: {
        ...nameStyle,
        fontWeight: 600,
        marginBottom: 8
      },
      children: progressName
    }), !bothAbove && !isInline && showPercentage && percentagePosition === 'above' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      style: {
        ...pctStyle,
        textAlign: 'right',
        marginBottom: 4
      },
      children: [percentage, "%"]
    }), isInline ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: inlineGap
      },
      children: [progressName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        style: {
          ...nameStyle,
          fontWeight: 600,
          flexShrink: 0
        },
        children: progressName
      }), bar, showPercentage && percentagePosition === 'outside-right' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
        style: pctStyle,
        children: [percentage, "%"]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [bar, showPercentage && percentagePosition === 'outside-right' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        style: {
          ...pctStyle,
          marginTop: 4
        },
        children: [percentage, "%"]
      })]
    }), !isInline && labelPosition === 'below' && progressName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      style: {
        ...nameStyle,
        fontWeight: 600,
        marginTop: 8
      },
      children: progressName
    })]
  });
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const EASING = {
  ease: 'ease',
  'ease-in': 'ease-in',
  'ease-out': 'ease-out',
  'ease-in-out': 'ease-in-out',
  linear: 'linear',
  bounce: 'cubic-bezier(0.34,1.56,0.64,1)',
  elastic: 'cubic-bezier(0.68,-0.55,0.27,1.55)'
};
function save({
  attributes
}) {
  const {
    progressName,
    percentage,
    fillColor,
    trackColor,
    showPercentage,
    progressHeight,
    textColor,
    percentageTextColor,
    textFontSize,
    percentageFontSize,
    textFontFamily,
    percentageFontFamily,
    animationType,
    animationDuration,
    animateOnScroll,
    showMilestone,
    milestoneValue,
    milestoneLabel,
    showTooltip,
    tooltipText,
    gradientFill,
    gradientColor2,
    barRadius,
    labelPosition,
    percentagePosition,
    inlineGap,
    blockMode,
    circularSize,
    circularStrokeWidth,
    circularStrokeColor,
    circularTrackColor,
    circularTextColor,
    circularBg,
    circularShowLabel,
    groupItems,
    groupTrackColor,
    groupBarHeight,
    groupBarRadius,
    groupGap,
    groupShowPercentage,
    groupLabelPosition,
    groupPercentagePosition,
    groupInlineGap,
    counterTarget,
    counterPrefix,
    counterSuffix,
    counterDuration,
    counterFontSize,
    counterColor,
    counterShowBar
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: 'wbd-progress-bar'
  });
  const isCircle = blockProps.className.includes('is-style-circle');
  const easing = EASING[animationType] || 'ease';
  const fillStyle = gradientFill ? {
    background: `linear-gradient(90deg,${fillColor},${gradientColor2 || fillColor})`
  } : {
    backgroundColor: fillColor
  };

  // ── CIRCULAR ─────────────────────────────────────────────────────────
  if (blockMode === 'circular') {
    const size = circularSize || 140;
    const sw = circularStrokeWidth || 8;
    const r = size / 2 - sw - 2;
    const circ = 2 * Math.PI * r;
    const dash = percentage / 100 * circ;
    const cx = size / 2;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "wbd-radial-wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "wbd-radial-outer",
          style: {
            width: size,
            height: size,
            background: circularBg || 'transparent',
            borderRadius: '50%',
            display: 'inline-block',
            position: 'relative'
          },
          "data-wbd-mode": "circular",
          "data-wbd-percent": percentage,
          "data-wbd-animate": animateOnScroll ? 'true' : undefined,
          "data-wbd-duration": animationDuration,
          "data-wbd-easing": easing,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: `0 0 ${size} ${size}`,
            className: "wbd-radial-svg",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
              cx: cx,
              cy: cx,
              r: r,
              fill: "none",
              stroke: circularTrackColor,
              strokeWidth: sw
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
              cx: cx,
              cy: cx,
              r: r,
              fill: "none",
              stroke: circularStrokeColor,
              strokeWidth: sw,
              strokeDasharray: animateOnScroll ? `0 ${circ}` : `${dash} ${circ}`,
              strokeLinecap: "round",
              className: "wbd-radial-fill"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "wbd-radial-text",
            style: {
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
              className: "wbd-radial-number",
              "data-wbd-target": percentage,
              style: {
                fontSize: size * 0.18,
                fontWeight: 700,
                color: circularTextColor,
                lineHeight: 1
              },
              children: [animateOnScroll ? 0 : percentage, "%"]
            })
          })]
        }), circularShowLabel && progressName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "wbd-radial-label",
          style: {
            color: textColor,
            fontFamily: textFontFamily,
            fontSize: textFontSize,
            marginTop: 8,
            textAlign: 'center'
          },
          children: progressName
        })]
      })
    });
  }

  // ── GROUP ─────────────────────────────────────────────────────────────
  if (blockMode === 'group') {
    const pctRightOfLabel = groupPercentagePosition === 'label-right';
    const pctInsideBar = groupPercentagePosition === 'inside';
    const pctOutsideRight = groupPercentagePosition === 'outside-right';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "wbd-group-wrap",
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: groupGap
        },
        children: groupItems.map((item, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "wbd-group-row",
          "data-wbd-animate": animateOnScroll ? 'true' : undefined,
          "data-wbd-percent": item.percentage,
          "data-wbd-easing": easing,
          "data-wbd-duration": animationDuration,
          children: [(groupLabelPosition === 'above' || groupLabelPosition === 'inline' && pctRightOfLabel) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: pctRightOfLabel ? 'space-between' : 'flex-start',
              marginBottom: groupLabelPosition === 'above' ? 6 : 0,
              gap: groupInlineGap
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "wbd-group-label",
              style: {
                fontWeight: 600,
                color: textColor,
                fontFamily: textFontFamily,
                fontSize: textFontSize
              },
              children: item.label
            }), groupShowPercentage && pctRightOfLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
              className: "wbd-group-pct",
              style: {
                fontWeight: 600,
                color: percentageTextColor,
                fontFamily: percentageFontFamily,
                fontSize: percentageFontSize,
                flexShrink: 0
              },
              children: [item.percentage, "%"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: groupLabelPosition === 'inline' ? groupInlineGap : 0
            },
            children: [groupLabelPosition === 'inline' && !pctRightOfLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "wbd-group-label",
              style: {
                fontWeight: 600,
                color: textColor,
                fontFamily: textFontFamily,
                fontSize: textFontSize,
                flexShrink: 0
              },
              children: item.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: {
                flex: 1,
                position: 'relative'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "progress-track",
                style: {
                  backgroundColor: groupTrackColor,
                  height: groupBarHeight,
                  borderRadius: groupBarRadius
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "progress-fill",
                  style: {
                    width: animateOnScroll ? '0%' : `${item.percentage}%`,
                    height: '100%',
                    backgroundColor: item.color,
                    borderRadius: groupBarRadius,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: animateOnScroll ? 'none' : `width ${animationDuration}s ${easing}`
                  },
                  children: groupShowPercentage && pctInsideBar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                    style: {
                      fontWeight: 600,
                      color: percentageTextColor,
                      fontFamily: percentageFontFamily,
                      fontSize: percentageFontSize,
                      whiteSpace: 'nowrap'
                    },
                    children: [item.percentage, "%"]
                  })
                })
              })
            }), groupShowPercentage && pctOutsideRight && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
              className: "wbd-group-pct",
              style: {
                fontWeight: 600,
                color: percentageTextColor,
                fontFamily: percentageFontFamily,
                fontSize: percentageFontSize,
                flexShrink: 0,
                minWidth: 36,
                textAlign: 'right'
              },
              children: [item.percentage, "%"]
            })]
          })]
        }, i))
      })
    });
  }

  // ── COUNTER ───────────────────────────────────────────────────────────
  if (blockMode === 'counter') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "wbd-counter-wrap",
        style: {
          textAlign: 'center'
        },
        "data-wbd-mode": "counter",
        "data-wbd-target": counterTarget,
        "data-wbd-duration": counterDuration,
        "data-wbd-animate": animateOnScroll ? 'true' : 'false',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "wbd-counter-number",
          style: {
            fontSize: counterFontSize,
            fontWeight: 700,
            color: counterColor,
            lineHeight: 1.1
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "wbd-counter-prefix",
            children: counterPrefix
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "wbd-counter-value",
            children: counterTarget.toLocaleString()
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "wbd-counter-suffix",
            children: counterSuffix
          })]
        }), progressName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "wbd-counter-label",
          style: {
            fontSize: textFontSize,
            fontFamily: textFontFamily,
            color: textColor,
            marginTop: 6
          },
          children: progressName
        }), counterShowBar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          style: {
            marginTop: 10
          },
          "data-wbd-animate": animateOnScroll ? 'true' : undefined,
          "data-wbd-percent": percentage,
          "data-wbd-easing": easing,
          "data-wbd-duration": animationDuration,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "progress-track",
            style: {
              backgroundColor: trackColor,
              height: 8,
              borderRadius: barRadius
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "progress-fill",
              style: {
                width: animateOnScroll ? '0%' : `${percentage}%`,
                height: '100%',
                borderRadius: barRadius,
                ...fillStyle,
                transition: animateOnScroll ? 'none' : `width ${animationDuration}s ${easing}`
              }
            })
          })
        })]
      })
    });
  }

  // ── SINGLE BAR ────────────────────────────────────────────────────────
  const nameStyle = {
    color: textColor,
    fontSize: textFontSize,
    fontFamily: textFontFamily
  };
  const pctStyle = {
    color: percentageTextColor,
    fontSize: percentageFontSize,
    fontFamily: percentageFontFamily,
    fontWeight: 600,
    whiteSpace: 'nowrap'
  };
  const fillWidth = animateOnScroll ? '0%' : `${percentage}%`;
  const trans = animateOnScroll ? 'none' : `width ${animationDuration}s ${easing}`;
  const bothAbove = progressName && labelPosition === 'above' && showPercentage && percentagePosition === 'above';
  const isInline = labelPosition === 'inline';
  const hasTooltip = showTooltip && tooltipText;
  if (isCircle) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "progress-circle",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
          viewBox: "0 0 36 36",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            className: "circle-bg",
            d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            className: "circle-fill",
            strokeDasharray: `${percentage}, 100`,
            style: {
              stroke: fillColor
            },
            d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          })]
        }), showPercentage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
          className: "circle-percentage",
          style: pctStyle,
          children: [percentage, "%"]
        })]
      })
    });
  }
  const barEl = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: `progress-track-wrapper${hasTooltip ? ' has-tooltip' : ''}`,
    style: {
      flex: isInline ? 1 : undefined
    },
    ...(hasTooltip ? {
      'data-tooltip': `${tooltipText}: ${percentage}%`
    } : {}),
    "data-wbd-animate": animateOnScroll ? 'true' : undefined,
    "data-wbd-percent": percentage,
    "data-wbd-easing": easing,
    "data-wbd-duration": animationDuration,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "progress-track",
      style: {
        backgroundColor: trackColor,
        height: progressHeight,
        borderRadius: barRadius
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "progress-fill",
        style: {
          width: fillWidth,
          borderRadius: barRadius,
          transition: trans,
          ...fillStyle
        },
        children: showPercentage && percentagePosition === 'inside' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
          className: "progress-percentage",
          style: pctStyle,
          children: [percentage, "%"]
        })
      }), showMilestone && milestoneValue > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "progress-milestone",
        style: {
          left: `${milestoneValue}%`
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "progress-milestone-line"
        }), milestoneLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "progress-milestone-label",
          children: milestoneLabel
        })]
      })]
    })
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    ...blockProps,
    children: [bothAbove && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 6
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "progress-name",
        style: nameStyle,
        children: progressName
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
        style: pctStyle,
        children: [percentage, "%"]
      })]
    }), !bothAbove && !isInline && labelPosition === 'above' && progressName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "progress-name",
      style: {
        ...nameStyle,
        marginBottom: 8
      },
      children: progressName
    }), !bothAbove && !isInline && showPercentage && percentagePosition === 'above' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        ...pctStyle,
        textAlign: 'right',
        marginBottom: 4
      },
      children: [percentage, "%"]
    }), isInline ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: inlineGap
      },
      children: [progressName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "progress-name",
        style: {
          ...nameStyle,
          flexShrink: 0
        },
        children: progressName
      }), barEl, showPercentage && percentagePosition === 'outside-right' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
        style: pctStyle,
        children: [percentage, "%"]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [barEl, showPercentage && percentagePosition === 'outside-right' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        style: {
          ...pctStyle,
          marginTop: 4
        },
        children: [percentage, "%"]
      })]
    }), !isInline && labelPosition === 'below' && progressName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "progress-name progress-name--below",
      style: {
        ...nameStyle,
        marginTop: 8
      },
      children: progressName
    })]
  });
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkprogress_bar"] = globalThis["webpackChunkprogress_bar"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map