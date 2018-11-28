const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { SelectControl } = wp.components;

/**
* Setting component for limit
*/
class DesignSetting extends Component {
	/**
	 * Handle limit input change
	 *
	 * @param {Object} selectedOption SelectControl onChange event
	 */
	handleChange = ( selectedOption ) => {
		this.props.setAttributes( { design: selectedOption } );
	}

	/**
	 * @returns {ReactElement} Limit Setting
	 */
	render() {
		const { attributes } = this.props;

		return (
			<Fragment>
				<SelectControl
					label={ __( 'Design Option' ) }
					options={ [
						{ label: __( 'Standard' ), value: 'standard' },
					] }
					value={ attributes.design }
					onChange={ this.handleChange }
				/>
				<span>
					<a href={ 'https://eventcalendarnewsletter.com/the-events-calendar-shortcode/' }>{ 'Upgrade' }</a>
					{ __( ' to Pro for more designs!' ) }
				</span>
			</Fragment>
		);
	}
}

export default DesignSetting;
