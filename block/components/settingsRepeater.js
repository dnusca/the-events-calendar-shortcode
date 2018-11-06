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

	render() {
		return (
			<Fragment>
				<SelectControl
					label={ 'Design Option' }
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
			</Fragment>
		);
	}
}
