const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { BaseControl, Button } = wp.components;

/**
* Setting component for limit
*/
class LimitSetting extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			key: 'limit', // matching shortcode attribute
			value: props.attributes.limit ? props.attributes.limit : 0, // default
		};
	}

	/**
	 * Handle limit input change
	 *
	 * @param {Object} event input onChange event
	 */
	handleChange = ( event ) => {
		this.setState( { value: parseInt( event.target.value ) } );
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
						value={ this.state.value }
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

export default LimitSetting;

