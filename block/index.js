import Block from './containers/block';

const { __ } = wp.i18n;
const {	registerBlockType } = wp.blocks;

registerBlockType( 'events-calendar-shortcode/block', {
	title: __( 'Events Calendar Shortcode', 'events-calendar-shortcode' ),
	icon: 'calendar',
	category: 'common',
	supports: {
		html: false,
	},

	edit: ( props ) => {
		return <Block { ...props } />;
	},

	save: () => {
		return null;
	},
} );
