<?php
// This file is generated. Do not modify it manually.
return array(
	'build' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpbb/wbd-progress-bar',
		'version' => '1.1.1',
		'title' => 'Progress Bar',
		'category' => 'widgets',
		'icon' => 'chart-bar',
		'description' => 'Display progress, skills, or statistics with a beautiful animated progress bar.',
		'keywords' => array(
			'progress',
			'bar',
			'percentage',
			'chart',
			'statistics',
			'skills',
			'animated',
			'counter',
			'radial',
			'circular'
		),
		'example' => array(
			'attributes' => array(
				'blockMode' => 'single',
				'progressName' => 'Project Completion',
				'percentage' => 75,
				'fillColor' => '#4CAF50',
				'trackColor' => '#e5e5e5',
				'showPercentage' => true,
				'progressHeight' => 14,
				'textColor' => '#333333',
				'percentageTextColor' => '#ffffff',
				'textFontSize' => 14,
				'percentageFontSize' => 10,
				'textFontFamily' => 'inherit',
				'percentageFontFamily' => 'inherit',
				'animationType' => 'ease',
				'animationDuration' => 1.2,
				'barRadius' => 999,
				'labelPosition' => 'above',
				'percentagePosition' => 'inside'
			)
		),
		'attributes' => array(
			'blockMode' => array(
				'type' => 'string',
				'default' => 'single'
			),
			'progressName' => array(
				'type' => 'string',
				'default' => ''
			),
			'percentage' => array(
				'type' => 'number',
				'default' => 50
			),
			'fillColor' => array(
				'type' => 'string',
				'default' => '#4CAF50'
			),
			'trackColor' => array(
				'type' => 'string',
				'default' => '#e5e5e5'
			),
			'showPercentage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'progressHeight' => array(
				'type' => 'number',
				'default' => 12
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#333333'
			),
			'percentageTextColor' => array(
				'type' => 'string',
				'default' => '#FFE200'
			),
			'textFontSize' => array(
				'type' => 'number',
				'default' => 14
			),
			'percentageFontSize' => array(
				'type' => 'number',
				'default' => 10
			),
			'textFontFamily' => array(
				'type' => 'string',
				'default' => 'inherit'
			),
			'percentageFontFamily' => array(
				'type' => 'string',
				'default' => 'inherit'
			),
			'animationType' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'animationDuration' => array(
				'type' => 'number',
				'default' => 1.2
			),
			'animateOnScroll' => array(
				'type' => 'boolean',
				'default' => false
			),
			'showMilestone' => array(
				'type' => 'boolean',
				'default' => false
			),
			'milestoneValue' => array(
				'type' => 'number',
				'default' => 50
			),
			'milestoneLabel' => array(
				'type' => 'string',
				'default' => ''
			),
			'showTooltip' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tooltipText' => array(
				'type' => 'string',
				'default' => ''
			),
			'gradientFill' => array(
				'type' => 'boolean',
				'default' => false
			),
			'gradientColor2' => array(
				'type' => 'string',
				'default' => '#4CAF50'
			),
			'barRadius' => array(
				'type' => 'number',
				'default' => 999
			),
			'labelPosition' => array(
				'type' => 'string',
				'default' => 'above'
			),
			'percentagePosition' => array(
				'type' => 'string',
				'default' => 'inside'
			),
			'inlineGap' => array(
				'type' => 'number',
				'default' => 12
			),
			'circularThemeIndex' => array(
				'type' => 'number',
				'default' => 0
			),
			'circularSize' => array(
				'type' => 'number',
				'default' => 140
			),
			'circularStrokeWidth' => array(
				'type' => 'number',
				'default' => 8
			),
			'circularStrokeColor' => array(
				'type' => 'string',
				'default' => '#1a73e8'
			),
			'circularTrackColor' => array(
				'type' => 'string',
				'default' => '#d2e3fc'
			),
			'circularTextColor' => array(
				'type' => 'string',
				'default' => '#1a73e8'
			),
			'circularBg' => array(
				'type' => 'string',
				'default' => 'transparent'
			),
			'circularShowLabel' => array(
				'type' => 'boolean',
				'default' => false
			),
			'groupItems' => array(
				'type' => 'array',
				'default' => array(
					array(
						'label' => 'HTML & CSS',
						'percentage' => 90,
						'color' => '#1a73e8'
					),
					array(
						'label' => 'JavaScript',
						'percentage' => 75,
						'color' => '#f9a825'
					),
					array(
						'label' => 'React',
						'percentage' => 65,
						'color' => '#00bcd4'
					),
					array(
						'label' => 'WordPress',
						'percentage' => 80,
						'color' => '#7b2d8b'
					)
				)
			),
			'groupTrackColor' => array(
				'type' => 'string',
				'default' => '#e5e5e5'
			),
			'groupBarHeight' => array(
				'type' => 'number',
				'default' => 12
			),
			'groupBarRadius' => array(
				'type' => 'number',
				'default' => 999
			),
			'groupGap' => array(
				'type' => 'number',
				'default' => 16
			),
			'groupShowPercentage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'groupLabelPosition' => array(
				'type' => 'string',
				'default' => 'above'
			),
			'groupPercentagePosition' => array(
				'type' => 'string',
				'default' => 'label-right'
			),
			'groupInlineGap' => array(
				'type' => 'number',
				'default' => 12
			),
			'counterTarget' => array(
				'type' => 'number',
				'default' => 1000
			),
			'counterPrefix' => array(
				'type' => 'string',
				'default' => ''
			),
			'counterSuffix' => array(
				'type' => 'string',
				'default' => '+'
			),
			'counterDuration' => array(
				'type' => 'number',
				'default' => 2
			),
			'counterFontSize' => array(
				'type' => 'number',
				'default' => 48
			),
			'counterColor' => array(
				'type' => 'string',
				'default' => '#1a73e8'
			),
			'counterShowBar' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'styles' => array(
			array(
				'name' => 'medium',
				'label' => 'Medium',
				'isDefault' => true
			),
			array(
				'name' => 'circle',
				'label' => 'Circle'
			),
			array(
				'name' => 'striped',
				'label' => 'Striped'
			),
			array(
				'name' => 'thin',
				'label' => 'Thin'
			),
			array(
				'name' => 'thick',
				'label' => 'Thick'
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true
			)
		),
		'textdomain' => 'wbd-progress-bar',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
