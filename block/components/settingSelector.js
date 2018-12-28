import Select from 'react-select';

const { Component } = wp.element;
const { __ } = wp.i18n;

class SettingSelector extends Component {
	/**
	* @param {string} newSetting the selected setting to add
	*/
	handleChange = ( newSetting ) => {
		const { handleSelect } = this.props;

		if ( newSetting.value === 'other' ) {
			// handle keyValue setting
			handleSelect( newSetting.value, true );
		} else {
			// handle new normal setting
			handleSelect( newSetting.value );
		}
	}

	/**
	* @return {ReactElement} Setting Selector
	*/
	render() {
		const { settingsConfig, activeSettings } = this.props;

		// build options from config object
		const selectOptions = Object.keys( settingsConfig ).map( ( key ) => {
			return {
				value: key,
				label: settingsConfig[ key ].label,
			};
		} );

		// add default option
		selectOptions.push( {
			value: 'new-setting',
			label: __( 'Choose another option', 'the-events-calendar-shortcode' ),
			isDisabled: true,
		} );

		// generate the available options
		const availableOptions = selectOptions.filter( ( option ) => {
			return activeSettings.indexOf( option.value ) < 0;
		} );

		return (
			<Select
				className={ 'ecs-select' }
				classNamePrefix={ 'select' }
				options={ availableOptions }
				value={ {
					value: 'new-setting',
					label: __( 'Choose another option', 'the-events-calendar-shortcode' ),
				} }
				onChange={ this.handleChange }
			/>
		);
	}
}

export default SettingSelector;

