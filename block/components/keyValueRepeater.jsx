const { Component } = wp.element;
const { __ } = wp.i18n;
const { TextControl, Button } = wp.components;

/**
* Setting component for limit
*/
class KeyValueRepeater extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			rows: [],
			currentKey: '',
			currentValue: '',
		};

		this.keyRef = React.createRef();
		this.valueRef = React.createRef();
	}

	/**
	* Handle current checkbox input change
	*/
	generateRows = () => {
		const { keyValue } = this.props.attributes;
		console.log(keyValue)
	}

	handleAdd = () => {
		let { keyValue } = this.props.attributes;
		const { currentKey, currentValue } = this.state;

		if ( ! keyValue ) {
			keyValue = {};
		}
		keyValue = keyValue ? JSON.parse( keyValue ) : {};

		const newObject = Object.assign( {}, keyValue, { [ currentKey ]: [ currentValue ] } );

		this.props.setAttributes( { keyValue: JSON.stringify( newObject ) } );
	}

	render() {
		const { rows } = this.state;

		return (
			<div className={ 'ecs-block key-value-repeater' } >
				<div className={ 'ecs-block-input-row' }>
					<TextControl
						label={ __( 'Key' ) }
						onChange={ key => this.setState( { currentKey: key } ) }
					/>
					<TextControl
						label={ __( 'Value' ) }
						onChange={ value => this.setState( { currentValue: value } ) }
					/>
					<Button
						isDefault
						onClick={ this.handleAdd }
					>Add</Button>
				</div>

			</div>
		);
	}
}

export default KeyValueRepeater;
