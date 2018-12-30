const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { TextControl } = wp.components;

/**
* Setting component for key/value
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
			<Fragment>
				<div className={ 'ecs-key-value' }>
					<TextControl
						label={ __( 'Key', 'the-events-calendar-shortcode' ) }
						value={ item.key }
						onChange={ this.handleKeyChange }
					/>
					<TextControl
						label={ __( 'Value', 'the-events-calendar-shortcode' ) }
						value={ item.value }
						onChange={ this.handleValueChange }
					/>
				</div>
                <div className={ 'ecs-setting-help' }>
                    <a
                        href={ 'https://eventcalendarnewsletter.com/events-calendar-shortcode-pro-options/?utm_source=plugin&utm_medium=link&utm_campaign=block-advanced-help&utm_content=description' }
                        target={ '_blank' }
                    >{ __( 'View documentation on available options', 'the-events-calendar-shortcode' ) }</a>
                    { __( ' where key="value" in the shortcode can be entered in the boxes above', 'the-events-calendar-shortcode' ) }
				</div>
			</Fragment>
		);
	}
}

export default KeyValueSetting;
