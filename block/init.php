<?php
/**
 * Register the block assets and server render callback
 *
 * @since 1.9.0
 */
function ecs_register_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	
	wp_register_script(
		'ecs-block',
		plugins_url( 'static/block.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( dirname( __FILE__ ) ) . 'static/block.js' )
    );

	// wp_register_style(
	// 	'ecs-block',
	// 	plugins_url( 'style.css', __FILE__ ),
	// 	array( ),
	// 	filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
    // );

	// TODO: check if Gutenberg exists
	register_block_type( 'events-calendar-shortcode/block', array(
		'style'             => 'ecs-block',
        'script'            => 'ecs-block',
        'render_callback'   => 'ecs_render_block'
	) );
}
add_action( 'init', 'ecs_register_block' );


/**
 * Maps the saved bloock attributes to the existing shortcode for front-end render
 *
 * @param array $attributes
 *
 * @since 1.9.0
 */
function ecs_render_block( $attributes ) {
	// TODO: Map attributes to content
	var_dump( $attributes ); die();
}
