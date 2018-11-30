import SettingSelector from '../components/settingSelector';

const { Component, Fragment } = wp.element;
const { IconButton } = wp.components;
const { __ } = wp.i18n;

class BlockEdit extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			settings: [],
		};
	}

	/**
	 * CDM - pull in existing settings to the top level from block attributes
	 */
	componentDidMount() {
		const { settings } = this.state;
		const { attributes } = this.props;

		const existingSettings = Object.keys( attributes );

		this.setState( { settings: [ ...settings, ...existingSettings ] } );
	}

	/**
	 * Handle removal of settings from settings table and attributes
	 *
	 * @param {String} setting The setting to remove
	 */
	handleRemoveSetting = ( setting ) => {
		const newSettings = this.state.settings.filter( name => name !== setting );

		this.setState( { settings: newSettings } );
		this.props.setAttributes( { [ setting ]: undefined } );
	}

	/**
	 * @return {ReactElement} settingsRender The rendered settings
	 */
	renderSettingsTable = () => {
		const { settings } = this.state;
		const { settingsConfig } = this.props;

		// Loop through default or active settings
		const settingsRender = settings.map( ( setting ) => {
			const clickCallback = () => this.handleRemoveSetting( setting );;

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
					<td width={ '30%' }>
						<SettingSelector
							setting={ setting }
							{ ...this.props }
						/>
					</td>
					<td width={ '60%' }>
						<SettingComponent { ...this.props } />
					</td>
					<td width={ '10%' }>
						{ removeComponent }
					</td>
				</tr>
			);
		} );

		// // Add new setting table row
		// settingsRender.push(
		// 	<tr key={ 'new-setting' }>
		// 		<td width={ '40%' }>
		// 			<SettingSelector setting={ 'new-setting' } { ...this.props } />
		// 		</td>
		// 		<td width={ '40%' }>
		// 			{ newSettingComponent }
		// 		</td>
		// 		<td width={ '20%' }>
		// 			<IconButton
		// 				icon={ 'no-alt' }
		// 			/>
		// 		</td>
		// 	</tr>
		// );

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
