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

	/**
	 * @param {string} key The new key
	 */
	handleKeyChange = ( key ) => {
		this.updateKeyValueAttribute( 'key', key );
	}

	/**
	 * @param {string} value The new value
	 */
	handleValueChange = ( value ) => {
		this.updateKeyValueAttribute( 'value', value );
	}

	/**
	 * @param {string} type key or value input
	 * @param {string} newValue the updated input for key or value
	 */
	updateKeyValueAttribute = ( type, newValue ) => {
		let { keyValue } = this.props.attributes;
		let newObject = {};
		const { key, value } = this.state; // before update

		keyValue = ( typeof keyValue === 'undefined' ) ? {} : JSON.parse( keyValue );

		if ( type === 'key' && keyValue.hasOwnProperty( key ) ) {
			delete keyValue[ key ];
			newObject = Object.assign( {}, keyValue, { [ newValue ]: value } );
			this.setState( { key: newValue } );
		}

		if ( type === 'value' ) {
			newObject = Object.assign( {}, keyValue, { [ key ]: newValue } );
			this.setState( { value: newValue } );
		}

		this.props.setAttributes( { keyValue: JSON.stringify( newObject ) } );
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
