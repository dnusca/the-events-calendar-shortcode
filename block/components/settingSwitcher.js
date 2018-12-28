import Select from 'react-select';

const { Component } = wp.element;

class SettingSwitcher extends Component {
	/**
	* @param {string} newSetting the selected setting to switch to
	*/
	handleChange = ( newSetting ) => {
		const { setting, uid, handleSwitch } = this.props;

		if ( newSetting.value === 'other' ) {
			// handle switching to a keyValue setting
			handleSwitch( setting, newSetting.value, 'add' );
		} else if ( setting === 'other' ) {
			// handle switching from a keyValue setting
			handleSwitch( setting, newSetting.value, uid );
		} else {
			// handle switching between normal setting
			handleSwitch( setting, newSetting.value );
		}
	}

	/**
	* @return {ReactElement} Setting Switcher
	*/
	render() {
		const { settingsConfig, setting } = this.props;
		let { activeSettings } = this.props;

		// build options from config object
		const selectOptions = Object.keys( settingsConfig ).map( ( key ) => {
			return {
				value: key,
				label: settingsConfig[ key ].label,
			};
		} );

		// remove the current setting from the activeSettings in order to display it in the select
		activeSettings = setting ? activeSettings.filter( ( value ) => value !== setting ) : activeSettings;

		// generate the available options
		const availableOptions = selectOptions.filter( ( option ) => {
			return activeSettings.indexOf( option.value ) < 0;
		} );

		const selectedValue = selectOptions.filter( ( option ) => option.value === setting );

		return (
			<Select
				className={ 'ecs-select' }
				classNamePrefix={ 'select' }
				options={ availableOptions }
				value={ selectedValue }
				onChange={ this.handleChange }
			/>
		);
	}
}

export default SettingSwitcher;

