const { Component } = wp.element;
const { __ } = wp.i18n;
const { TextControl, Button } = wp.components;

/**
* Setting component for limit
*/
class KeyValueSetting extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			key: '',
			value: '',
		};
	}

	handleAdd = () => {
		this.props.onAdd( { [ this.state.key ]: this.state.value } );
	}

	/**
	 * @returns {ReactElement} Key Value Repeater
	 */
	render() {
		return (
			<div className={ 'ecs-key-value' }>
				<TextControl
					label={ __( 'Key' ) }
					value={ this.state.key }
					onChange={ key => this.setState( { key } ) }
				/>
				<TextControl
					label={ __( 'Value' ) }
					value={ this.state.value }
					onChange={ value => this.setState( { value } ) }
				/>
				<Button
					isDefault
					onClick={ this.handleAdd }
				>Add</Button>
			</div>
		);
	}
}

export default KeyValueSetting;
