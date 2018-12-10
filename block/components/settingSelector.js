import Select from 'react-select';

const { Component } = wp.element;
const { __ } = wp.i18n;

class SettingSelector extends Component {
	handleChange = ( newSetting ) => {
		const { setting, handleSelect, handleSwitch } = this.props;

		if ( setting !== 'new-setting' ) {
			handleSwitch( setting, newSetting.value );
		} else {
			handleSelect( newSetting.value );
		}
	}
	/**
	* @returns {ReactElement} Limit Setting
	*/
	render() {
		const { settingsConfig, setting } = this.props;
		let { activeSettings } = this.props;

		// Bail if no/still fetching activeSettings
		if ( typeof activeSettings === 'undefined' ) {
			return null;
		}

		// build options from config object
		const selectOptions = Object.keys( settingsConfig ).map( key => {
			return {
				value: key,
				label: settingsConfig[ key ].label,
			};
		} );

		// add default option
		selectOptions.push( {
			value: 'new-setting',
			label: __( 'Choose an option' ),
		} );

		// if this select is part of the table  removes matching setting from active settings
		activeSettings = setting ? activeSettings.filter( value => value !== setting ) : activeSettings;

		// generate the available options
		const availableOptions = selectOptions.filter( option => {
			return activeSettings.indexOf( option.value ) < 0;
		} );

		// const selectedValue = setting ? setting : 'new-setting';
		const selectedValue = selectOptions.filter( option => option.value === setting );
		const label = setting ? '' : __( 'Add new setting' ); // TODO: Aria

		return (
			<Select
				options={ availableOptions }
				value={ selectedValue }
				onChange={ this.handleChange }
			/>

		);
	}
}

export default SettingSelector;

