import SettingSelector from '../components/settingSelector';
import uuid from 'uuid/v4';

const { Component, Fragment } = wp.element;
const { IconButton } = wp.components;
const { __ } = wp.i18n;

class BlockEdit extends Component {
	/**
	 * Handle addition of settings from settings table and attributes
	 *
	 * @param {String} setting The setting to remove
	 * @param {Boolean} keyValue Whether to create unique id for keyValue type setting
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
	 * @param {String} setting The setting to remove
	 * @param {String} newSetting The setting to add
	 * @param {String|null} keyValue Whether to create unique id for keyValue type setting
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

		const newSettings = settings.map( value => value === setting ? newSetting : value );

		this.props.setAttributes( {
			[ setting ]: undefined,
			settings: JSON.stringify( newSettings ),
		} );
	}

	/**
	 * Handle removal of settings from settings table and attributes
	 *
	 * @param {String} setting The setting to remove
	 * @param {String|null} uid key value setting unique id or null
	 */
	handleRemoveSetting = ( setting, uid ) => {
		let { settings } = this.props.attributes;
		settings = JSON.parse( settings );

		if ( uid ) {
			this.handleRemoveKeyValue( uid );
			setting = uid;
		}

		const newSettings = settings.filter( name => name !== setting );

		this.props.setAttributes( {
			[ setting ]: undefined,
			settings: JSON.stringify( newSettings ),
		} );
	}

	/**
	 * Handle switching of settings from settings table and attributes
	 *
	 * @returns {String} generated unique id for key value setting
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
	 * @param {String} uid The unique id of the key value setting
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

		// Loop through default or active settings
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
				<SettingSelector
					setting={ setting }
					uid={ uid }
					activeSettings={ settings }
					settingsConfig={ settingsConfig }
					handleSwitch={ this.handleSwitchSetting }
					{ ...this.props }
				/> : <h4>{ setting }</h4>;

			// Get the right component from our config
			const SettingComponent = settingsConfig[ setting ].component;

			// Add remove button if removable
			const removeComponent = settingsConfig[ setting ].removable ?
				<IconButton
					icon={ 'no-alt' }
					onClick={ removeCallback }
				/> : null;

			return (
				<tr key={ setting }>
					<td width={ '40%' }>
						{ selectorComponent }
					</td>
					<td width={ '55%' }>
						<SettingComponent
							{ ...this.props }
							uid={ uid }
						/>
					</td>
					<td width={ '5%' }>
						{ removeComponent }
					</td>
				</tr>
			);
		} );

		// Add new setting table row
		settingsRender.push(
			<tr key={ 'new-setting' }>
				<td width={ '40%' }>
					<SettingSelector
						setting={ 'new-setting' }
						activeSettings={ settings }
						settingsConfig={ settingsConfig }
						handleSelect={ this.handleAddSetting }
						{ ...this.props }
					/>
				</td>
				<td width={ '55%' }>
				</td>
				<td width={ '5%' }>
				</td>
			</tr>
		);

		return (
			<table>
				<tbody>
					{ settingsRender }
				</tbody>
			</table>
		);
	}

	/**
	 * @returns {ReactElement} The settings controls
	 */
	render() {
		return (
			<Fragment>
				<div className={ 'ecs-block-preview-header' }>
					<h3>{ __( 'The Events Calendar Block' ) }</h3>
				</div>

				<div className={ 'ecs-edit-block' }>
					<div className={ 'ecs-settings-container' }>
						<h4>{ __( 'Configure your settings' ) }</h4>
						{ this.renderSettingsTable() }
					</div>
				</div>
			</Fragment>
		);
	}
}

export default BlockEdit;
