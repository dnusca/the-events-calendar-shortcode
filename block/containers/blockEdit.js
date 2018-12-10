import SettingSelector from '../components/settingSelector';

const { Component, Fragment } = wp.element;
const { IconButton } = wp.components;
const { __ } = wp.i18n;

class BlockEdit extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			selectedOption: 'choose',
		};
	}

	/**
	 * Handle addition of settings from settings table and attributes
	 *
	 * @param {String} setting The setting to remove
	 */
	handleAddSetting = ( setting ) => {
		let { settings } = this.props.attributes;
		settings = JSON.parse( settings );
		settings.push( setting );

		this.props.setAttributes( {
			[ setting ]: '',
			settings: JSON.stringify( settings ),
		} );
	}

	/**
	 * Handle switching of settings from settings table and attributes
	 *
	 * @param {String} setting The setting to remove
	 * @param {String} newSetting The setting to add
	 */
	handleSwitchSetting = ( setting, newSetting ) => {
		let { settings } = this.props.attributes;
		settings = JSON.parse( settings );

		const newSettings = settings.filter( value => value !== setting );
		newSettings.push( newSetting );

		this.props.setAttributes( {
			[ setting ]: undefined,
			[ newSetting ]: '',
			settings: JSON.stringify( newSettings ),
		} );
	}

	/**
	 * Handle removal of settings from settings table and attributes
	 *
	 * @param {String} setting The setting to remove
	 */
	handleRemoveSetting = ( setting ) => {
		let { settings } = this.props.attributes;
		settings = JSON.parse( settings );

		const newSettings = settings.filter( name => name !== setting );

		this.props.setAttributes( {
			[ setting ]: undefined,
			settings: JSON.stringify( newSettings ),
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
			const clickCallback = () => this.handleRemoveSetting( setting );

			// Get the setting selector unless default setting
			const selectorComponent = settingsConfig[ setting ].removable ?
				<SettingSelector
					setting={ setting }
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
					onClick={ clickCallback }
				/> : null;

			return (
				<tr key={ setting }>
					<td width={ '40%' }>
						{ selectorComponent }
					</td>
					<td width={ '55%' }>
						<SettingComponent { ...this.props } />
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
