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
			'limit'		=> array(
				'type' => 'number',
				'default' => 5,
			),
			'cat' 		=> array( 'type' => 'string' ),
			'month'		=> array( 'type' => 'string' ),
			'past'		=> array( 'type' => 'string' ),
			'keyValue'	=> array( 'type' => 'string' ),
			'settings'	=> array(
				'type' => 'string',
				'default' => json_encode( array( 'design', 'limit' ) ),
			),
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
		if ( $key === 'settings' )
			continue;

		if ( $key === 'keyValue' ) {
			$kv_attributes = json_decode( $value );

			foreach ( $kv_attributes as $kv_attribute ) {
				$attribute_str .= " {$kv_attribute->key}=\"{$kv_attribute->value}\"";
			}
			continue;
		}

		if ( isset( $attributes[ $key ] ) && ! empty( $attributes[ $key ] ) ) {
			$attribute_str .= " {$key}=\"{$value}\"";
		}
	}

	$shortcode_str = "[ecs-list-events{$attribute_str}]";
	// return $shortcode_str;
	return do_shortcode( $shortcode_str );
}
