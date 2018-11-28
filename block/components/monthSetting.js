const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { BaseControl } = wp.components;

/**
* Setting component for limit
*/
class MonthSetting extends Component {
	/**
	* Handle current checkbox input change
	*
	* @param {Object} event input onChange event
	*/
	handleChange = ( event ) => {
		const current = ( event.target.checked ) ? 'current' : '';
		this.props.setAttributes( { month: current } );
	}

	/**
	 * @returns {ReactElement} Month Setting
	 */
	render() {
		const current = ( this.props.attributes.month === 'current' ) ? true : false;

		return (
			<Fragment>
				<BaseControl
					id={ 'ecs-setting-month-current' }
					label={ __( 'Month' ) }
					help={ __( 'Show events from the current month.' ) }
				>
					<input
						id={ 'ecs-setting-month-current' }
						type={ 'checkbox' }
						checked={ current }
						onChange={ this.handleChange }
					/><span>Current</span>
				</BaseControl>
			</Fragment>
		);
	}
}

export default MonthSetting;
