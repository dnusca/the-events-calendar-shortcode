import Select from 'react-select';

const { Component } = wp.element;
const { __ } = wp.i18n;

class SettingSelector extends Component {
	handleChange = ( newSetting ) => {
		const { setting, uid, handleSelect, handleSwitch } = this.props;

		// TODO: look at ways of refactoring this out to something more sane
		if ( setting === 'new-setting' && newSetting.value === 'other' ) {
			// handle new keyValue setting
			handleSelect( newSetting.value, true );
		} else if ( setting !== 'new-setting' && newSetting.value === 'other' ) {
			// handle switching to a keyValue setting
			handleSwitch( setting, newSetting.value, 'add' );
		} else if ( setting !== 'new-setting' && setting === 'other' ) {
			// handle switching from a keyValue setting
			handleSwitch( setting, newSetting.value, uid );
		} else if ( setting !== 'new-setting' ) {
			// handle switch normal setting
			handleSwitch( setting, newSetting.value );
		} else {
			// handle new normal setting
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

		const selectedValue = selectOptions.filter( option => option.value === setting );
		// const label = setting ? '' : __( 'Add new setting' ); // TODO: Aria

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

