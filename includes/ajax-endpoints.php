<?php
/**
 * Save the option to show a link underneath events or not
 */
function ajax_ecs_save_show_link_value() {
	if ( ! is_user_logged_in() || ! wp_verify_nonce( $_POST['nonce'], 'ecs-link-nonce' ) ) {
		die(-1);
	}

	update_option( 'ecs-show-link', ( isset( $_POST['value'] ) && 'true' == $_POST['value'] ) ? true : false );
	wp_send_json( array(
		'success' => 'true',
		'value' => get_option( 'ecs-show-link' ) ? true : false
	) );
}

add_action( 'wp_ajax_ecs_show_link', 'ajax_ecs_save_show_link_value' );