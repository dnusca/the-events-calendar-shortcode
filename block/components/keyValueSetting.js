const { Component } = wp.element;
const { __ } = wp.i18n;
const { TextControl } = wp.components;

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

	handleKeyChange = ( key ) => {
		this.updateKeyValueAttribute();
		this.setState( { key } );
	}

	handleValueChange = ( value ) => {
		this.updateKeyValueAttribute();
		this.setState( { value } );
	}

	updateKeyValueAttribute = () => {
		let { keyValue } = this.props.attributes;
		const { key, value } = this.state;

		keyValue = ( typeof keyValue === 'undefined' ) ? {} : JSON.parse( keyValue );
		const newObject = Object.assign( {}, keyValue, { [ key ]: value } );

		// this.props.setAttributes( { keyValue: JSON.stringify( newObject ) } );
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
					onChange={ this.handleKeyChange }
				/>
				<TextControl
					label={ __( 'Value' ) }
					value={ this.state.value }
					onChange={ this.handleValueChange }
				/>
			</div>
		);
	}
}

export default KeyValueSetting;
