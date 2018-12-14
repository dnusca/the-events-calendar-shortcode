const { Component } = wp.element;
const { __ } = wp.i18n;
const { TextControl } = wp.components;

/**
* Setting component for limit
*/
class KeyValueSetting extends Component {
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
		const { uid } = this.props;
		let { keyValue } = this.props.attributes;

		keyValue = typeof keyValue === 'undefined' ? {} : JSON.parse( keyValue );
		keyValue[ uid ] = { ...keyValue[ uid ], [ type ]: newValue };

		this.props.setAttributes( { keyValue: JSON.stringify( keyValue ) } );
	}

	/**
	 * @return {ReactElement} Key Value Repeater
	 */
	render() {
		let { keyValue } = this.props.attributes;

		keyValue = typeof keyValue === 'undefined' ? {} : JSON.parse( keyValue );
		const item = keyValue[ this.props.uid ];

		return (
			<div className={ 'ecs-key-value' }>
				<TextControl
					label={ __( 'Key' ) }
					value={ item.key }
					onChange={ this.handleKeyChange }
				/>
				<TextControl
					label={ __( 'Value' ) }
					value={ item.value }
					onChange={ this.handleValueChange }
				/>
			</div>
		);
	}
}

export default KeyValueSetting;
