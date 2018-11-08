import BlockContainer from './containers/blockContainer';

const { __ } = wp.i18n;
const {	registerBlockType } = wp.blocks;

registerBlockType( 'events-calendar-shortcode/block', {
	title: __( 'Events Calendar Shortcode', 'events-calendar-shortcode' ),
	icon: 'calendar',
	category: 'common',
	attributes: {
		design: {
			type: 'string',
			default: 'standard',
		},
		cat: {
			type: 'string',
			default: '',
		},
		limit: {
			type: 'number',
			default: 5,
		},
		month: {
			type: 'string',
		},
		time: {
			type: 'string',
		},
	},

	edit: ( props ) => {
		return <BlockContainer { ...props } />;
	},

	save: () => {
		return null;
	},
} );
