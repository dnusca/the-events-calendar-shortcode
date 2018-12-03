const { Component } = wp.element;
const { __ } = wp.i18n;
const { SelectControl } = wp.components;

/**
* Settings Selector
*/
class SettingSelector extends Component {
	/**
	 *
	 *
	 * @param {String} setting the chosen option
	 */
	createNewSetting = ( setting ) => {
		this.props.setAttributes( { [ setting ]: '' } );
	}
	/**
	* @returns {ReactElement} Limit Setting
	*/
	render() {
		const { settingsConfig, setting, disabled } = this.props;
		let { activeSettings } = this.props;

		if ( typeof activeSettings === 'undefined' ) {
			return null;
		}

		let selectOptions = Object.keys( settingsConfig ).map( key => {
			return {
				value: key,
				label: settingsConfig[ key ].label,
			};
		} );

		selectOptions.push( {
			value: 'new-setting',
			label: __( 'Choose an option' ),
		} );

		activeSettings = setting ? activeSettings.filter( value => value !== setting ) : activeSettings;

		const availableOptions = selectOptions.filter( option => {
			return activeSettings.indexOf( option.value ) < 0;
		} );

		const selectedValue = setting ? setting : 'new-setting';
		const label = setting ? '' : __( 'Add new setting' );
		return (
			<SelectControl
				label={ label }
				options={ availableOptions }
				value={ selectedValue }
				disabled={ disabled }
				onChange={ this.createNewSetting }
			/>
		);
	}
}

export default SettingSelector;

