import BlockContainer from './components/blockContainer';
const { __ } = wp.i18n;
const {	registerBlockType } = wp.blocks;

registerBlockType( 'events-calendar-shortcode/block', {
	title: __( 'Events Calendar Shortcode', 'events-calendar-shortcode' ),
	icon: 'calendar',
	category: 'common',
	attributes: {},

	edit: ( props ) => {
		return <BlockContainer { ...props } />;
	},

	save: () => {
		return null;
	},
} );
