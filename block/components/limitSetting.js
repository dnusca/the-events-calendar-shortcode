const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { BaseControl } = wp.components;

/**
* Setting component for limit
*/
class LimitSetting extends Component {
	/**
	 * Handle limit input change
	 *
	 * @param {Object} event input onChange event
	 */
	handleChange = ( event ) => {
		this.props.setAttributes( { limit: parseInt( event.target.value ) } );
	}

	/**
	 * @returns {ReactElement} Limit Setting
	 */
	render() {
		const { attributes } = this.props;

		return (
			<Fragment>
				<BaseControl
					id={ 'ecs-setting-limit' }
					label={ __( 'Limit' ) }
					help={ __( 'The number of events to show.' ) }
				>
					<input
						id={ 'ecs-setting-limit' }
						type={ 'number' }
						value={ attributes.limit }
						onChange={ this.handleChange }
					/>
				</BaseControl>
			</Fragment>
		);
	}
}

export default LimitSetting;

