const { __, setLocaleData } = wp.i18n;
const {	registerBlockType } = wp.blocks;

registerBlockType( 'events-calendar-shortcode/block', {
	title: __( 'Events Calendar Shortcode', 'events-calendar-shortcode' ),
	icon: 'cal',
	category: 'tribe-events',
	attributes: {
    },

	edit: ( props ) => { },

	save: ( props ) => { },
} );