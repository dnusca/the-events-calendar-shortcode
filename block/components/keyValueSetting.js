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
			key: props.existing ? props.existing.key : '',
			value: props.existing ? props.existing.value : '',
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
		// let newObject = {};
		let newArray = [];
		const { key, value } = this.state; // before update

		keyValue = ( typeof keyValue === 'undefined' || keyValue === null ) ? [] : JSON.parse( keyValue );

		if ( type === 'key' ) {
			let exists = false;

			newArray = keyValue.map( object => {
				let returnObject;

				if ( object.key === key ) {
					exists = true;
					returnObject = { key: newValue, value: object.value };
				} else {
					returnObject = object;
				}

				return returnObject;
			} );

			if ( ! exists ) {
				newArray.push( { key: newValue, value: '' } );
			}

			this.setState( { key: newValue } );
		}

		if ( type === 'value' ) {
			let exists = false;

			newArray = keyValue.map( object => {
				let returnObject;

				if ( object.key === key ) {
					exists = true;
					returnObject = { key, value: newValue };
				} else {
					returnObject = object;
				}

				return returnObject;
			} );

			if ( ! exists ) {
				newArray.push( { key: '', value: newValue } );
			}

			this.setState( { value: newValue } );
		}

		this.props.setAttributes( { keyValue: JSON.stringify( newArray ) } );
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
