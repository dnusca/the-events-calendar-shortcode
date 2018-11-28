const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { BaseControl } = wp.components;

/**
* Setting component for limit
*/
class PastSetting extends Component {
	/**
	* Handle current checkbox input change
	*
	* @param {Object} event input onChange event
	*/
	handleChange = ( event ) => {
		const past = ( event.target.checked ) ? 'yes' : '';
		this.props.setAttributes( { past: past } );
	}

	/**
	 * @returns {ReactElement} Limit Setting
	 */
	render() {
		const past = ( this.props.attributes.past === 'yes' ) ? true : false;

		return (
			<Fragment>
				<BaseControl
					id={ 'ecs-setting-month-current' }
					label={ __( 'Past' ) }
					help={ __( 'Show past events.' ) }
				>
					<input
						id={ 'ecs-setting-month-current' }
						type={ 'checkbox' }
						checked={ past }
						onChange={ this.handleChange }
					/>
				</BaseControl>
			</Fragment>
		);
	}
}

export default PastSetting;
