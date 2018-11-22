import BlockEdit from './containers/blockEdit';

const { __ } = wp.i18n;
const {	registerBlockType } = wp.blocks;

registerBlockType( 'events-calendar-shortcode/block', {
	title: __( 'Events Calendar Shortcode', 'events-calendar-shortcode' ),
	icon: 'calendar',
	category: 'common',

	edit: ( props ) => {
		return <BlockEdit { ...props } />;
	},

	save: () => {
		return null;
	},
} );
