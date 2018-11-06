const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { SelectControl } = wp.components;

/**
* Renders custom repeater component for block settings.
*/
export default class SettingsRepeater extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			repeaterOption: 'category',
		};
	}

	/**
	 * Returns the correct sub settings based on the repeater option
	 *
	 * @return {ReactElement} subSettingsComponent
	 */
	generateSubSettings = () => {
		let subSettingsComponent;

		switch ( this.state.repeaterOption ) {
			// case 'category':
			// 	subSettingsComponent = <CategorySetting />;
			// 	break;
			// case 'limit':
			// 	subSettingsComponent = <LimitSetting />;
			// 	break;
			// case 'month':
			// 	subSettingsComponent = <MonthSetting />;
			// 	break;
			// case 'past':
			// 	subSettingsComponent = <PastSetting />;
			// 	break;
			// case 'other':
			// 	subSettingsComponent = <KeyValueSetting />;
			// 	break;
			default:
				subSettingsComponent = <p>Invalid Selection</p>;
				break;
		}

		return subSettingsComponent;
	}

	render() {
		return (
			<Fragment>
				<SelectControl
					label={ __( 'Choose an option' ) }
					options={ [
						{ label: __( 'Category' ), value: 'category' },
						{ label: __( 'Limit' ), value: 'limit' },
						{ label: __( 'Month' ), value: 'month' },
						{ label: __( 'Past' ), value: 'past' },
						{ label: __( 'Other' ), value: 'other' },
					] }
					value={ this.state.repeaterOption }
					onChange={ ( value ) => this.setState( { repeaterOption: value } ) }
				/>
				{ this.generateSubSettings() }
			</Fragment>
		);
	}
}
