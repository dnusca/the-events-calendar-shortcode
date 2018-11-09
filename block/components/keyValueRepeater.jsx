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
	}

	/**
	 *
	 *
	 * @return {ReactElement} existingSettings
	 */
	generateRows = () => {
		let { keyValue } = this.props.attributes;

		if ( typeof keyValue === 'undefined' )
			return;

		keyValue = JSON.parse( keyValue );

		const existingSettings = Object.keys( keyValue ).map( ( key ) => {
			return (
				<h5 key={ key }>{ `${ key }: ${ keyValue[ key ] }` }</h5>
			);
		} );

		return existingSettings;
	}

	handleAdd = () => {
		let { keyValue } = this.props.attributes;
		const { currentKey, currentValue } = this.state;
		keyValue = typeof keyValue === 'undefined' ? {} : JSON.parse( keyValue );

		const newObject = Object.assign( {}, keyValue, { [ currentKey ]: [ currentValue ] } );

		this.setState( {
			currentKey: '',
			currentValue: '',
		} );

		this.props.setAttributes( { keyValue: JSON.stringify( newObject ) } );
	}

	render() {
		const existingSettings = this.generateRows();

		return (
			<div className={ 'ecs-block key-value-repeater' } >
				<div className={ 'ecs-block-input-row' }>
					<TextControl
						label={ __( 'Key' ) }
						value={ this.state.currentKey }
						onChange={ key => this.setState( { currentKey: key } ) }
					/>
					<TextControl
						label={ __( 'Value' ) }
						value={ this.state.currentValue }
						onChange={ value => this.setState( { currentValue: value } ) }
					/>
					<Button
						isDefault
						onClick={ this.handleAdd }
					>Add</Button>
				</div>
				{ existingSettings }
			</div>
		);
	}
}

export default KeyValueRepeater;
