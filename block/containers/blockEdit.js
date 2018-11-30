const { Component, Fragment, createElement } = wp.element;
const { SelectControl, Button } = wp.components;
const { applyFilters } = wp.hooks;
const { __ } = wp.i18n;

class BlockEdit extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			selectedOption: 'choose',
			settings: [],
		};
	}

	/**
	 * CDM - pull in existing settings to the top level from block attributes
	 */
	componentDidMount() {
		const { settings } = this.state;
		const { attributes } = this.props;

		const existingSettings = Object.keys( attributes ).filter( key => key );

		this.setState( { settings: [ ...settings, ...existingSettings ] } );
	}

	renderSettings = () => {
		const { settings } = this.state;
		const { settingsConfig } = this.props;

		const settingsRender = settings.map( ( setting ) => {
			return createElement( settingsConfig[ setting ].component, this.props );
		} );

		return settingsRender;
	}

	addOtherSetting = () => {
		const { settings, selectedOption } = this.state;

		if ( selectedOption === 'other' ) {
			let { keyValue } = this.props.attributes;
			keyValue = ( typeof this.props.attributes.keyValue === 'undefined' ) ? [] : JSON.parse( keyValue );
			keyValue.push( { key: '', value: '' } );
			this.props.setAttributes( { keyValue: JSON.stringify( keyValue ) } );
		} else {
			settings.push( selectedOption );
			this.setState( { settings } );
		}
	}

	/**
	 * @returns {ReactElement} The settings controls
	 */
	render() {
		const selectOptions = [
			{ label: __( 'Choose a setting' ), value: 'choose' },
			{ label: __( 'Category' ), value: 'cat' },
			{ label: __( 'Month' ), value: 'month' },
			{ label: __( 'Past' ), value: 'past' },
			{ label: __( 'Other' ), value: 'other' },
		];

		const availableOptions = selectOptions.filter( option => {
			return this.state.settings.indexOf( option.value ) < 0;
		} );

		return (
			<Fragment>
				<div className={ 'ecs-block-preview-header' }>
					<h3>{ __( 'The Events Calendar Block' ) }</h3>
				</div>

				<div className={ 'ecs-edit-block' }>
					<div className={ 'ecs-settings-container' }>
						<h4>{ __( 'Configure your settings' ) }</h4>

						{ this.renderSettings() }

						<SelectControl
							label={ __( 'Choose an option' ) }
							options={ availableOptions }
							value={ this.state.selectedOption }
							onChange={ ( value ) => this.setState( { selectedOption: value } ) }
						/>
						<Button
							isPrimary
							onClick={ this.addOtherSetting }
						>Add</Button>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default BlockEdit;
