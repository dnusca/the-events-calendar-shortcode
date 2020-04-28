import settingsConfig from './config/settings';
import logo from './config/svg';
import Block from './containers/block';

import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'events-calendar-shortcode/block', {
	title: __( 'The Events Calendar Block', 'the-events-calendar-shortcode' ),
	description: __( 'Display your events from The Events Calendar', 'the-events-calendar-shortcode' ),
	icon: logo,
	category: 'common',
	supports: {
		html: false,
	},

	edit: ( props ) => {
		return (
			<Block
				settingsConfig={ applyFilters( 'ecs.settingsConfig', settingsConfig ) }
				{ ...props }
			/>
		);
	},

	save: () => {
		return null;
	},
} );
