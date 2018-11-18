<?php

define( 'ECS_DISCOUNT_OPTION_NAME', 'ecs_hide_discounts_notice_q4_2018' );

function ecs_setup_discounts_notice() {
	if ( defined( 'TECS_VERSION' ) ||
	     get_option( 'ecs_hide_discounts_notice_q4_2018', false ) ||
	     time() > strtotime( '2018-11-30 23:59:59' ) ) {
		return;
	}
	add_action( 'admin_notices', 'ecs_display_discounts_notice' );
}
add_action( 'admin_init', 'ecs_setup_discounts_notice' );

function ecs_display_discounts_notice() {
	$screen = get_current_screen();
	if ( ! is_object( $screen ) ||
	     (
		     'dashboard' !== $screen->id &&
		     'tribe_events' !== $screen->post_type
	     ) ) {
		return;
	}
	?>
	<div class="notice notice-success ecs_notice_server ecs-dismissible-notice is-dismissible">
		<h3><?php esc_html_e( 'Save on The Events Calendar Shortcode PRO for a limited time.', 'the-events-calendar-shortcode' ); ?></h3>
		<p><?php esc_html_e( 'Our annual sale is a good opportunity to get beautiful designs and more options for your event listings. Don’t miss out!', 'the-events-calendar-shortcode' ); ?></p>
		<p>
			<a class="ecs-button button button-primary" target="_blank" href="https://eventcalendarnewsletter.com/the-events-calendar-shortcode?utm_source=plugin&utm_medium=link&utm_campaign=q4-2018-promo&utm_content=description">
				<?php esc_html_e( 'Get The Events Calendar Shortcode PRO', 'the-events-calendar-shortcode' ); ?>
			</a>
		</p>
		<script>jQuery(function($) {$(document).on("click", ".ecs-dismissible-notice .notice-dismiss",function dismiss() {$.ajax(window.ajaxurl,{type: "POST",data: {action: "ecs_dismiss_discounts_notice"}});});});</script><p></p><button type="button" class="notice-dismiss"><span class="screen-reader-text">Dismiss this notice.</span></button></div>
	<?php
}

function ecs_dismiss_discounts_notice() {
	update_option( 'ecs_hide_discounts_notice_q4_2018', true );
}
add_action( 'wp_ajax_ecs_dismiss_discounts_notice', 'ecs_dismiss_discounts_notice' );