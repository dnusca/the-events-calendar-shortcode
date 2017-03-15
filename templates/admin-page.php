<div class="wrap">
	<h2><?php _e( 'The Events Calendar Shortcode' ); ?></h2>

	<p>The shortcode displays lists of your events. For example to shortcode to show next 8 events in the category festival in ASC order with date showing:</p>

	<pre>[ecs-list-events cat='festival' limit='8']</pre>



	<table>
		<tbody>
		<tr valign="top">
			<td valign="top">

				<div>
					<h2><?php echo esc_html( __( 'Basic shortcode', 'tecshortcode' ) ); ?></h2>
						<blockquote>[ecs-list-events]</blockquote>

					<h2><?php echo esc_html( __( 'Shortcode Options', 'tecshortcode' ) ); ?></h2>
					<?php do_action( 'ecs_admin_page_options_before' ); ?>

					<h3>cat</h3>
					<p><?php echo esc_html( __( 'Represents single event category.  Use commas when you want multiple categories', 'tecshortcode' ) ); ?>
						<blockquote>[ecs-list-events cat='festival']</blockquote>
						<blockquote>[ecs-list-events cat='festival, workshops']</blockquote>

					<?php do_action( 'ecs_admin_page_options_after_cat' ); ?>

					<h3>limit</h3>
					<p><?php echo esc_html( __( 'Total number of events to show. Default is 5.', 'tecshortcode' ) ); ?></p>
						<blockquote>[ecs-list-events limit='3']</blockquote>
					<h3>order</h3>
					<p><?php echo esc_html( __( "Order of the events to be shown. Value can be 'ASC' or 'DESC'. Default is 'ASC'. Order is based on event date.", 'tecshortcode' ) ); ?></p>
						<blockquote>[ecs-list-events order='DESC']</blockquote>
					<h3>date</h3>
					<p><?php echo esc_html( __( "To show or hide date. Value can be 'true' or 'false'. Default is true.", 'tecshortcode' ) ); ?></p>
						<blockquote>[ecs-list-events eventdetails='false']</blockquote>
					<h3>venue</h3>
					<p><?php echo esc_html( __( "To show or hide the venue. Value can be 'true' or 'false'. Default is false.", 'tecshortcode' ) ); ?></p>
						<blockquote>[ecs-list-events venue='true']</blockquote>
					<h3>excerpt</h3>
					<p><?php echo esc_html( __( 'To show or hide the excerpt and set excerpt length. Default is false.', 'tecshortcode' ) ); ?><p>
						<blockquote>[ecs-list-events excerpt='true']</blockquote>
						<blockquote>[ecs-list-events excerpt='300']</blockquote>
					<h3>thumb</h3>
					<p><?php echo esc_html( __( 'To show or hide thumbnail/featured image. Default is false.', 'tecshortcode' ) ); ?></p>
						<blockquote>[ecs-list-events thumb='true']</blockquote>
					<p><?php echo esc_html( __( 'You can use 2 other attributes: thumbwidth and thumbheight to customize the thumbnail size', 'tecshortcode' ) ); ?></p>
						<blockquote>[ecs-list-events thumb='true' thumbwidth='150' thumbheight='150']</blockquote>
					<h3>message</h3>
					<p><?php echo esc_html( sprintf( __( "Message to show when there are no events. Defaults to '%s'", 'tecshortcode' ), translate( 'There are no upcoming events at this time.', 'tribe-events-calendar' ) ) ); ?></p>
					<h3>viewall</h3>
					<p><?php echo esc_html( sprintf( __( "Determines whether to show '%s' or not. Values can be 'true' or 'false'. Default to 'true'", 'tecshortcode' ), translate( 'View all events', 'tribe-events-calendar' ) ) ); ?></p>
						<blockquote>[ecs-list-events cat='festival' limit='3' order='DESC' viewall='false']</blockquote>
					<h3>contentorder</h3>
					<p><?php echo esc_html( sprintf( __( 'Manage the order of content with commas. Defaults to %s', 'tecshortcode' ), 'title, thumbnail, excerpt, date, venue' ) ); ?> </p>
						<blockquote>[ecs-list-events cat='festival' limit='3' order='DESC' viewall='false' contentorder='title, thumbnail, excerpt, date, venue']</blockquote>
					<h3>month</h3>
					<p><?php echo esc_html( sprintf( __( "Show only specific Month. Type '%s' for displaying current month only, ie:", 'tecshortcode' ), 'current' ) ); ?></p>
						<blockquote>[ecs-list-events cat='festival' month='2015-06']</blockquote>
					<h3>past</h3>
					<p><?php echo esc_html( __( 'Show outdated events (ie. events that have already happened)', 'tecshortcode' ) ); ?></p>
						<blockquote>[ecs-list-events cat='festival' past='yes']</blockquote>
					<h3>key</h3>
					<p><?php echo esc_html( __( 'Use to order by the start date instead of the end date', 'tecshortcode' ) ); ?></p>
						<blockquote>[ecs-list-events cat='festival' key='start date']</blockquote>

					<?php do_action( 'ecs_admin_page_options_after' ); ?>

				</div>

			</td>
			<td valign="top" class="styling">
				<h3>Styling/Design</h3>

				<?php do_action( 'ecs_admin_page_styling_before' ); ?>

				<?php if ( apply_filters( 'ecs_show_upgrades', true ) ): ?>

					<p><?php echo esc_html( __( 'By default the plugin does not include styling. Events are listed in ul li tags with appropriate classes for styling and you can add your own CSS:', 'tecshortcode' ) ) ?></p>

					<ul>
						<li>ul class="ecs-event-list"</li>
						<li>li class="ecs-event"</li>
						<li><?php echo esc_html( sprintf( __( 'event title link is %s', 'tecshortcode' ), 'H4 class="entry-title summary"' ) ); ?> </li>
						<li><?php echo esc_html( sprintf( __( 'date class is %s', 'tecshortcode' ), 'time' ) ); ?></li>
						<li><?php echo esc_html( sprintf( __( 'venue class is %s', 'tecshortcode' ), 'venue' ) ); ?></li>
						<li>span .ecs-all-events</li>
						<li>p .ecs-excerpt</li>
					</ul>

					<p><em><?php echo wp_kses( sprintf( __( 'Want a better looking design without adding any CSS?  Check out <a target="_blank" href="%s">The Events Calendar Shortcode PRO</a>', 'tecshortcode' ), 'https://eventcalendarnewsletter.com/the-events-calendar-shortcode?utm_source=plugin&utm_medium=link&utm_campaign=tecs-help-design&utm_content=description' ), array( 'a' => array( 'href' => array(), 'target' => array() ) ) ); ?></em></p>
					<p><a href="https://eventcalendarnewsletter.com/the-events-calendar-shortcode?utm_source=plugin&utm_medium=link&utm_campaign=tecs-help-design-image-1&utm_content=description"><img alt="" style="width: 300px;" src="<?php echo plugins_url( '/static/shortcode-default-design-2.png', TECS_CORE_PLUGIN_FILE ) ?>"><br><?php echo __( 'Pro version default design', 'tecshortcode' ); ?></a></p>
					<p><a href="https://eventcalendarnewsletter.com/the-events-calendar-shortcode?utm_source=plugin&utm_medium=link&utm_campaign=tecs-help-design-image-2&utm_content=description"><img alt="" style="width: 300px;" src="<?php echo plugins_url( '/static/event-calendar-shortcode-compact-design.png', TECS_CORE_PLUGIN_FILE ) ?>"><br><?php echo __( 'Pro version compact design', 'tecshortcode' ); ?></a></p>

				<?php endif; ?>
			</td>
		</tr>
		</tbody>
	</table>

	<p><small><?php echo __( 'This plugin is not developed by or affiliated with The Events Calendar or Modern Tribe in any way.', 'tecshortcode' ) ?></small></p>
</div>