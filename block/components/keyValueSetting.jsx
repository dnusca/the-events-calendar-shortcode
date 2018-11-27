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
			</div>
		);
	}
}

export default KeyValueSetting;
