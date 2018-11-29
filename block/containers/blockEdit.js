import DesignSetting from '../components/designSetting';
import CategorySetting from '../components/categorySetting';
import LimitSetting from '../components/limitSetting';
import MonthSetting from '../components/monthSetting';
import PastSetting from '../components/pastSetting';
import KeyValueSetting from '../components/keyValueSetting';

import SettingsPreview from '../components/settingsPreview';

const { Component, Fragment } = wp.element;
const { SelectControl, Button } = wp.components;
const { __ } = wp.i18n;

class BlockEdit extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			selectedOption: 'choose',
			otherSettings: [],
		};
	}

	componentDidMount() {
		const { otherSettings } = this.state;
		const { attributes } = this.props;
		const defaults = [ 'limit', 'design' ];

		const existingSettings = Object.keys( attributes ).filter( setting => {
			return defaults.indexOf( setting ) < 0;
		} );

		this.setState( { otherSettings: [ ...otherSettings, ...existingSettings ] } );
	}

	/**
	 *
	 *
	 * @return {ReactElement} existingSettings
	 */
	generateKeyValueRows = () => {
		let { keyValue } = this.props.attributes;

		keyValue = ( typeof keyValue === 'undefined' || keyValue === null ) ? [] : JSON.parse( keyValue );

		const existingSettings = keyValue.map( object => {
			const { key, value } = object;
			return (
				<KeyValueSetting
					key={ key }
					existing={ { key, value } }
					{ ...this.props }
				/>
			);
		} );

		return existingSettings;
	}

	renderOtherSettings = () => {
		const { otherSettings } = this.state;

		let settingsComponents = {
			choose: null,
			cat: <CategorySetting { ...this.props } />,
			month: <MonthSetting { ...this.props } />,
			past: <PastSetting { ...this.props } />,
			other: <KeyValueSetting { ...this.props } />,
		};

		const otherSettingsRender = otherSettings.map( setting => settingsComponents[ setting ] );

		return otherSettingsRender;
	}

	addOtherSetting = () => {
		const { otherSettings, selectedOption } = this.state;

		if ( selectedOption === 'other' ) {
			let { keyValue } = this.props.attributes;
			keyValue = ( typeof this.props.attributes.keyValue === 'undefined' ) ? [] : JSON.parse( keyValue );
			keyValue.push( { key: '', value: '' } );
			this.props.setAttributes( { keyValue: JSON.stringify( keyValue ) } );
		} else {
			otherSettings.push( selectedOption );
			this.setState( { otherSettings } );
		}
	}

	/**
	 * @returns {ReactElement} The settings controls
	 */
	render() {
		const { attributes } = this.props;
		const selectOptions = [
			{ label: __( 'Choose a setting' ), value: 'choose' },
			{ label: __( 'Category' ), value: 'cat' },
			{ label: __( 'Month' ), value: 'month' },
			{ label: __( 'Past' ), value: 'past' },
			{ label: __( 'Other' ), value: 'other' },
		];

		const availableOptions = selectOptions.filter( option => {
			return this.state.otherSettings.indexOf( option.value ) < 0;
		} );

		return (
			<Fragment>
				<div className={ 'ecs-block-preview-header' }>
					<h3>{ __( 'The Events Calendar Block' ) }</h3>
				</div>

				<div className={ 'ecs-edit-block' }>
					<div className={ 'ecs-settings-container' }>
						<h4>{ __( 'Configure your settings' ) }</h4>

						<DesignSetting { ...this.props } />

						<LimitSetting { ...this.props } />

						{ this.renderOtherSettings() }
						{ this.generateKeyValueRows() }

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

					<SettingsPreview attributes={ attributes } />
				</div>
			</Fragment>
		);
	}
}

export default BlockEdit;
