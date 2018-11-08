const { Component } = wp.element;
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
		const current = ( event.target.checked ) ? 'yes' : '';

		this.props.setAttributes( { month: current } );
	}

	render() {
		let { past } = this.props.attributes;
		past = ( past === 'yes' ) ? true : false;

		return (
			<BaseControl
				id={ 'ecs-setting-month-current' }
				label={ __( 'Current' ) }
				help={ __( 'Show events from the current month.' ) }
			>
				<input
					id={ 'ecs-setting-month-current' }
					type={ 'checkbox' }
					checked={ past }
					onChange={ this.handleChange }
				/>
			</BaseControl>
		);
	}
}

export default PastSetting;
