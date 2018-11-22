const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { BaseControl, Button } = wp.components;

/**
* Setting component for limit
*/
class PastSetting extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			key: 'past', // matching shortcode attribute
			value: props.attributes.past ? props.attributes.past : '', // default
		};
	}

	/**
	* Handle current checkbox input change
	*
	* @param {Object} event input onChange event
	*/
	handleChange = ( event ) => {
		const past = ( event.target.checked ) ? 'yes' : '';
		this.setState( { value: past } );
	}

	/**
	 * Pass added setting up to container
	 */
	handleAdd = () => {
		this.props.onAdd( { [ this.state.key ]: this.state.value } );
	}

	/**
	 * @returns {ReactElement} Limit Setting
	 */
	render() {
		const past = ( this.state.value === 'yes' ) ? true : false;

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
				<Button
					isDefault
					onClick={ this.handleAdd }
				>Add</Button>
			</Fragment>
		);
	}
}

export default PastSetting;
