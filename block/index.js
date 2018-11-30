import Block from './containers/block';

const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
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

// Hook test
// TODO: remove
addFilter( 'ecs.settingsConfig', 'events-calendar-shortcode/block', ( settingsConfig ) => {
	console.log( settingsConfig );
	return settingsConfig;
} );
