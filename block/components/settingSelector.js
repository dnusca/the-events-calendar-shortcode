const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { SelectControl } = wp.components;

/**
* Settings Selector
*/
class SettingSelector extends Component {
	/**
	* @returns {ReactElement} Limit Setting
	*/
	render() {
		// const selectOptions = [
		// 	{ label: __( 'Choose a setting' ), value: 'choose' },
		// 	{ label: __( 'Category' ), value: 'cat' },
		// 	{ label: __( 'Month' ), value: 'month' },
		// 	{ label: __( 'Past' ), value: 'past' },
		// 	{ label: __( 'Other' ), value: 'other' },
		// ];

		// const availableOptions = selectOptions.filter( option => {
		// 	return this.state.settings.indexOf( option.value ) < 0;
		// } );
		console.log( this.props );
		return (
			<Fragment>
				<h5>{ this.props.setting }</h5>
			</Fragment>
		);
	}
}

export default SettingSelector;
{/* <SelectControl
	label={ __( 'Choose an option' ) }
	options={ availableOptions }
	value={ this.state.selectedOption }
	onChange={ this.handleChange }
/> */}
