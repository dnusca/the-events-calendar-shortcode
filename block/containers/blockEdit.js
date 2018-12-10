import SettingSelector from '../components/settingSelector';

const { Component, Fragment } = wp.element;
const { IconButton } = wp.components;
const { __ } = wp.i18n;

class BlockEdit extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			settings: [],
			selectedOption: 'choose',
		};
	}

	/**
	 * CDM - pull in existing settings to the top level from block attributes
	 */
	componentDidMount() {
		const { settings } = this.state;
		const { attributes } = this.props;

		// Pull in existing settings from attributes and merge to settings state
		// We ignore undefined attributes
		const existingSettings = Object.keys( attributes ).filter( setting => {
			return ( setting !== 'settings' ||
				typeof attributes[ setting ] !== 'undefined' );
		} );

		this.setState( { settings: [ ...settings, ...existingSettings ] } );
	}

	/**
	 * Handle addition of settings from settings table and attributes
	 *
	 * @param {String} setting The setting to remove
	 */
	handleAddSetting = ( setting ) => {
		const { settings } = this.state;
		console.log( setting );
		settings.push( setting );
		this.setState( { settings } );
		console.log( settings );
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
		const { settings } = this.state;

		const newSettings = settings.filter( value => value !== setting );
		newSettings.push( newSetting );

		this.setState( { settings: newSettings } );
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
		const newSettings = this.state.settings.filter( name => name !== setting );

		this.setState( { settings: newSettings } );
		this.props.setAttributes( {
			[ setting ]: undefined,
			settings: JSON.stringify( newSettings ),
		} );
	}

	/**
	 * @return {ReactElement} settingsRender The rendered settings
	 */
	renderSettingsTable = () => {
		// const { settings } = this.state;
		const { settingsConfig } = this.props;
		let { settings } = this.props.attributes;
		settings = ( typeof settings === 'undefined' ) ? [ 'design', 'limit' ] : JSON.parse( settings );
		console.log( settings );
		// Loop through default or active settings
		const settingsRender = settings.map( ( setting ) => {
			const clickCallback = () => this.handleRemoveSetting( setting );

			// Get the setting selector unless default setting
			const selectorComponent = settingsConfig[ setting ].removable ?
				<SettingSelector
					setting={ setting }
					activeSettings={ this.state.settings }
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
						activeSettings={ this.state.settings }
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

	addOtherSetting = () => {
		const { settings, selectedOption } = this.state;

		if ( selectedOption === 'other' ) {
			let { keyValue } = this.props.attributes;
			keyValue = ( typeof this.props.attributes.keyValue === 'undefined' ) ? [] : JSON.parse( keyValue );
			keyValue.push( { key: '', value: '' } );
			this.props.setAttributes( { keyValue: JSON.stringify( keyValue ) } );
		} else {
			settings.push( selectedOption );
			this.setState( { settings } );
		}
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
