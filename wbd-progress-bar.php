<?php
/**
 * Plugin Name:       WBD Progress Bar
 * Description:       A beautiful and lightweight progress bar block with smooth animations and full customization options.
 * Version:           1.1.2 
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Tested up to:      7.0
 * Author:            WPBrand Digital
 * Author URI:        https://wpbranddigital.org
 * License:           GPLv2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wbd-progress-bar
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function wbd_progress_bar_block_init()
{
    register_block_type(__DIR__ . '/build');

}
add_action('init', 'wbd_progress_bar_block_init');
