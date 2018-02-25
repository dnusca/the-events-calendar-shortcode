<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package the-events-calendar-shortcode
 */

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/#enqueuing-block-scripts
 */
function the_events_calendar_shortcode_block_init() {
	$dir = dirname( __FILE__ );

	$block_js = 'the-events-calendar-shortcode/block.js';
	wp_register_script(
		'the-events-calendar-shortcode-block-editor',
		plugins_url( $block_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$block_js" )
	);

	$editor_css = 'the-events-calendar-shortcode/editor.css';
	wp_register_style(
		'the-events-calendar-shortcode-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(
			'wp-blocks',
		),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'the-events-calendar-shortcode/style.css';
	wp_register_style(
		'the-events-calendar-shortcode-block',
		plugins_url( $style_css, __FILE__ ),
		array(
			'wp-blocks',
		),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'the-events-calendar-shortcode/the-events-calendar-shortcode', array(
		'editor_script' => 'the-events-calendar-shortcode-block-editor',
		'editor_style'  => 'the-events-calendar-shortcode-block-editor',
		'style'         => 'the-events-calendar-shortcode-block',
	) );
}
add_action( 'init', 'the_events_calendar_shortcode_block_init' );
