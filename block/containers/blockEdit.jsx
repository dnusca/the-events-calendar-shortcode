import SettingsPreview from '../components/settingsPreview';
import CategorySetting from '../components/categorySetting';
import LimitSetting from '../components/limitSetting.jsx';
import MonthSetting from '../components/monthSetting.jsx';
import PastSetting from '../components/pastSetting.jsx';
import KeyValueRepeater from '../components/keyValueSetting.jsx';

const { Component, Fragment } = wp.element;
const { SelectControl } = wp.components;
const { __ } = wp.i18n;

class BlockEdit extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			repeaterOption: 'choose',
		};
	}

	handleSettingSave = ( setting ) => {
		this.props.setAttributes( setting );
		this.setState( { repeaterOption: 'choose' } );
	}

	renderSetting = () => {
		let settingsComponents = {
			choose: null,
			category: <CategorySetting { ...this.props } onAdd={ this.handleSettingSave } />,
			limit: <LimitSetting { ...this.props } onAdd={ this.handleSettingSave } />,
			month: <MonthSetting { ...this.props } onAdd={ this.handleSettingSave } />,
			past: <PastSetting { ...this.props } onAdd={ this.handleSettingSave } />,
			other: <KeyValueRepeater { ...this.props } onAdd={ this.handleSettingSave } />,
		};

		return settingsComponents[ this.state.repeaterOption ];
	}

	/**
	 * @returns {ReactElement} The settings controls
	 */
	render() {
		const { attributes, setAttributes } = this.props;

		return (
			<Fragment>
				<div className={ 'ecs-block-preview-header' }>
					<h3>{ __( 'The Events Calendar Block' ) }</h3>
				</div>
				<div className={ 'ecs-edit-block' }>
					<div className={ 'ecs-settings-container' }>
						<h4>{ __( 'Configure your settings' ) }</h4>

						<SelectControl
							label={ __( 'Design Option' ) }
							options={ [
								{ label: __( 'Standard' ), value: 'standard' },
							] }
							value={ attributes.design }
							onChange={ ( designOption ) => setAttributes( { design: designOption } ) }
						/>
						<span>
							<a href={ 'https://eventcalendarnewsletter.com/the-events-calendar-shortcode/' }>{ 'Upgrade' }</a>
							{ __( ' to Pro for more designs!' ) }
						</span>

						<SelectControl
							label={ __( 'Choose an option' ) }
							options={ [
								{ label: __( 'Choose a setting' ), value: 'choose' },
								{ label: __( 'Category' ), value: 'category' },
								{ label: __( 'Limit' ), value: 'limit' },
								{ label: __( 'Month' ), value: 'month' },
								{ label: __( 'Past' ), value: 'past' },
								{ label: __( 'Other' ), value: 'other' },
							] }
							value={ this.state.repeaterOption }
							onChange={ ( value ) => this.setState( { repeaterOption: value } ) }
						/>

						{ this.renderSetting() }
					</div>

					<div className={ 'ecs-values-container' }>
						<h4>{ __( 'Your selected options' ) }</h4>
						<SettingsPreview { ...this.props } />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default BlockEdit;
