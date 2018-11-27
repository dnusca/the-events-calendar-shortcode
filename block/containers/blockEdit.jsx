import DesignSetting from '../components/designSetting';
import CategorySetting from '../components/categorySetting';
import LimitSetting from '../components/limitSetting.jsx';
import MonthSetting from '../components/monthSetting.jsx';
import PastSetting from '../components/pastSetting.jsx';
import KeyValueRepeater from '../components/keyValueSetting.jsx';

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

	handleSettingSave = ( setting ) => {
		this.props.setAttributes( setting );
		this.setState( { repeaterOption: 'choose' } );
	}

	renderOtherSettings = () => {
		const { otherSettings } = this.state;
		const { attributes } = this.props;
		console.log ( attributes );
		const existingSettings = Object.keys( attributes ).filter( setting => ( setting !== 'limit' && setting !== 'design' ) );
		console.log( existingSettings );

		let settingsComponents = {
			choose: null,
			category: <CategorySetting { ...this.props } onAdd={ this.handleSettingSave } />,
			month: <MonthSetting { ...this.props } onAdd={ this.handleSettingSave } />,
			past: <PastSetting { ...this.props } onAdd={ this.handleSettingSave } />,
			other: <KeyValueRepeater { ...this.props } onAdd={ this.handleSettingSave } />,
		};

		const otherSettingsRender = otherSettings.map( setting => settingsComponents[ setting ] );

		return otherSettingsRender;
	}

	addOtherSetting = () => {
		const { otherSettings } = this.state;
		otherSettings.push( this.state.selectedOption );
		this.setState( { otherSettings } );
	}

	/**
	 * @returns {ReactElement} The settings controls
	 */
	render() {
		const { attributes } = this.props;

		return (
			<Fragment>
				<div className={ 'ecs-block-preview-header' }>
					<h3>{ __( 'The Events Calendar Block' ) }</h3>
				</div>

				<div className={ 'ecs-edit-block' }>
					<div className={ 'ecs-settings-container' }>
						<h4>{ __( 'Configure your settings' ) }</h4>

						<DesignSetting { ...this.props } onAdd={ this.handleSettingSave } />

						<LimitSetting { ...this.props } onAdd={ this.handleSettingSave } />

						{ this.renderOtherSettings() }

						<SelectControl
							label={ __( 'Choose an option' ) }
							options={ [
								{ label: __( 'Choose a setting' ), value: 'choose' },
								{ label: __( 'Category' ), value: 'category' },
								{ label: __( 'Month' ), value: 'month' },
								{ label: __( 'Past' ), value: 'past' },
								{ label: __( 'Other' ), value: 'other' },
							] }
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
