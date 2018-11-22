const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { BaseControl, Button } = wp.components;

/**
* Setting component for limit
*/
class MonthSetting extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			key: 'month', // matching shortcode attribute
			value: props.attributes.month ? props.attributes.month : '', // default
		};
	}

	/**
	* Handle current checkbox input change
	*
	* @param {Object} event input onChange event
	*/
	handleChange = ( event ) => {
		const current = ( event.target.checked ) ? 'current' : '';
		this.setState( { value: current } );
	}

	/**
	 * Pass added setting up to container
	 */
	handleAdd = () => {
		this.props.onAdd( { [ this.state.key ]: this.state.value } );
	}

	/**
	 * @returns {ReactElement} Month Setting
	 */
	render() {
		const current = ( this.state.value === 'current' ) ? true : false;

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
				<Button
					isDefault
					onClick={ this.handleAdd }
				>Add</Button>
			</Fragment>
		);
	}
}

export default MonthSetting;
