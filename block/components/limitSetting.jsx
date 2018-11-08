const { Component } = wp.element;
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

	render() {
		const { limit } = this.props.attributes;

		return (
			<BaseControl
				id={ 'ecs-setting-limit' }
				label={ __( 'Limit' ) }
				help={ __( 'The number of events to show.' ) }
			>
				<input
					id={ 'ecs-setting-limit' }
					type={ 'number' }
					value={ limit }
					onChange={ this.handleChange }
				/>
			</BaseControl>
		);
	}
}

export default LimitSetting;

