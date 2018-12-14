import SettingSelector from '../components/settingSelector';
import SettingSwitcher from '../components/settingSwitcher';

import uuid from 'uuid/v4';

const { Component, Fragment } = wp.element;
const { IconButton } = wp.components;
const { __ } = wp.i18n;

class BlockEdit extends Component {
	/**
	 * Handle addition of settings from settings table and attributes
	 *
	 * @param {string} setting The setting to add
	 * @param {boolean} keyValue Whether to create unique id for keyValue type setting
	 */
	handleAddSetting = ( setting, keyValue ) => {
		let { settings } = this.props.attributes;
		settings = JSON.parse( settings );

		if ( keyValue ) {
			setting = this.handleAddKeyValue();
		}

		settings.push( setting );

		this.props.setAttributes( {
			settings: JSON.stringify( settings ),
		} );
	}

	/**
	 * Handle switching of settings from settings table and attributes
	 *
	 * @param {string} setting The setting to remove
	 * @param {string} newSetting The setting to add
	 * @param {string|null} keyValue Whether to create unique id for keyValue type setting
	 */
	handleSwitchSetting = ( setting, newSetting, keyValue ) => {
		let { settings } = this.props.attributes;
		settings = JSON.parse( settings );

		if ( keyValue === 'add' ) {
			newSetting = this.handleAddKeyValue();
		}

		if ( keyValue && keyValue.substring( 0, 2 ) === 'kv' ) {
			this.handleRemoveKeyValue( keyValue );
			setting = keyValue;
		}

		const newSettings = settings.map( ( value ) => value === setting ? newSetting : value );

		this.props.setAttributes( {
			[ setting ]: undefined,
			settings: JSON.stringify( newSettings ),
		} );
	}

	/**
	 * Handle removal of settings from settings table and attributes
	 *
	 * @param {string} setting The setting to remove
	 * @param {string|null} uid key value setting unique id or null
	 */
	handleRemoveSetting = ( setting, uid ) => {
		let { settings } = this.props.attributes;
		settings = JSON.parse( settings );

		if ( uid ) {
			this.handleRemoveKeyValue( uid );
			setting = uid;
		}

		const newSettings = settings.filter( ( name ) => name !== setting );
		this.props.setAttributes( {
			[ setting ]: undefined,
			settings: JSON.stringify( newSettings ),
		} );
	}

	/**
	 * Handle switching of settings from settings table and attributes
	 *
	 * @return {string} generated unique id for key value setting
	 */
	handleAddKeyValue = () => {
		let { keyValue } = this.props.attributes;
		keyValue = typeof keyValue === 'undefined' ? {} : JSON.parse( keyValue );

		const uid = `kv-${ uuid() }`;
		const newKeyValue = { ...keyValue, [ uid ]: {
			key: '',
			value: '',
		} };

		this.props.setAttributes( {
			keyValue: JSON.stringify( newKeyValue ),
		} );

		return uid;
	}

	/**
	 * Handle removing setting from keyValue object
	 *
	 * @param {string} uid The unique id of the key value setting
	 */
	handleRemoveKeyValue = ( uid ) => {
		let { keyValue } = this.props.attributes;
		keyValue = typeof keyValue === 'undefined' ? {} : JSON.parse( keyValue );
		delete keyValue[ uid ];

		this.props.setAttributes( {
			keyValue: JSON.stringify( keyValue ),
		} );
	}

	/**
	 * @return {ReactElement} settingsRender The rendered settings
	 */
	renderSettingsTable = () => {
		const { settingsConfig } = this.props;
		let { settings } = this.props.attributes;
		settings = JSON.parse( settings );

		// Loop through default or active settings and build the settings area
		const settingsRender = settings.map( ( setting ) => {
			// Check if Key Value setting
			let uid = null;
			if ( setting.substring( 0, 2 ) === 'kv' ) {
				uid = setting;
				setting = 'other';
			}

			const removeCallback = () => this.handleRemoveSetting( setting, uid );

			// Get the setting selector unless default setting
			const selectorComponent = settingsConfig[ setting ].removable ?
				<SettingSwitcher
					setting={ setting }
					uid={ uid }
					activeSettings={ settings }
					settingsConfig={ settingsConfig }
					handleSwitch={ this.handleSwitchSetting }
					{ ...this.props }
				/> : <span>{ setting.charAt( 0 ).toUpperCase() + setting.slice( 1 ) }</span>;

			// Get the right component from our config
			const SettingComponent = settingsConfig[ setting ].component;

			// Add remove button if removable
			const removeComponent = settingsConfig[ setting ].removable ?
				<IconButton
					icon={ 'no-alt' }
					onClick={ removeCallback }
				/> : null;

			return (
				<div className={ 'ecs-settings-row' } key={ uid ? uid : setting }>
					<div className={ 'ecs-selector-col' }>
						{ selectorComponent }
					</div>
					<div className={ 'ecs-setting-col' }>
						<SettingComponent
							{ ...this.props }
							uid={ uid }
						/>
					</div>
					<div className={ 'ecs-remove-col' }>
						{ removeComponent }
					</div>
				</div>
			);
		} );

		return (
			<Fragment>
				<div className={ 'ecs-settings-area' }>
					{ settingsRender }
				</div>
				<div className={ 'ecs-setting-add' }>
					<SettingSelector
						activeSettings={ settings }
						settingsConfig={ settingsConfig }
						handleSelect={ this.handleAddSetting }
						{ ...this.props }
					/>
					<div className={ 'ecs-flex-fill' }></div>
				</div>
			</Fragment>
		);
	}

	/**
	 * @return {ReactElement} The settings controls
	 */
	render() {
		return (
			<Fragment>
				<div className={ 'ecs-block-header' }>
					<h3>{ __( 'The Events Calendar Block' ) }</h3>
				</div>

				<div className={ 'ecs-block-edit' }>
					<h4>{ __( 'Configure your settings' ) }</h4>
					{ this.renderSettingsTable() }
				</div>
			</Fragment>
		);
	}
}

export default BlockEdit;
