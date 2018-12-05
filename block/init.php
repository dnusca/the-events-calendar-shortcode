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

	wp_register_style(
		'ecs-block',
		plugins_url( 'static/ecs-block.css', dirname( __FILE__ ) ),
		array(),
		filemtime( plugin_dir_path( dirname( __FILE__ ) ) . 'static/ecs-block.css' )
    );

	register_block_type( 'events-calendar-shortcode/block', array(
		'style'             => 'ecs-block',
        'script'            => 'ecs-block',
		'render_callback'   => 'ecs_render_block',
		'attributes'		=> array(
			'design' 	=> array(
				'type' 		=> 'string',
				'default'	=> 'standard',
			),
			'cat' 		=> array( 'type' => 'string' ),
			'limit'		=> array( 'type' => 'number' ),
			'month'		=> array( 'type' => 'string' ),
			'past'		=> array( 'type' => 'string' ),
			'keyValue'	=> array( 'type' => 'string' ),
		)
	) );
}
add_action( 'init', 'ecs_register_block' );


/**
 * Maps the saved block attributes to the existing shortcode for front-end render
 *
 * @param array $attributes
 *
 * @since 1.9.0
 */
function ecs_render_block( $attributes ) {
	$attribute_str = '';

	foreach ( $attributes as $key => $value ) {
		if ( $key === 'keyValue' )
			continue;

		if ( isset( $attributes[ $key ] ) && ! empty( $attributes[ $key ] ) ) {
			$attribute_str .= " {$key}=\"{$value}\"";
		}
	}

	$shortcode_str = "[ecs-list-events{$attribute_str}]";

	return do_shortcode( $shortcode_str );
}
