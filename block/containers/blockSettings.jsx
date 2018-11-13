import CategorySetting from '../components/categorySetting';
import LimitSetting from '../components/limitSetting.jsx';
import MonthSetting from '../components/monthSetting.jsx';
import PastSetting from '../components/pastSetting.jsx';
import KeyValueRepeater from '../components/keyValueRepeater.jsx';

const { Component, Fragment } = wp.element;
const { SelectControl } = wp.components;
const { __ } = wp.i18n;

/**
* Outputs the edit settings mode of the block
*/
class BlockEdit extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			repeaterOption: 'category',
		};
	}

	renderSetting = () => {
		let settingsComponents = {
			category: <CategorySetting { ...this.props } />,
			limit: <LimitSetting { ...this.props } />,
			month: <MonthSetting { ...this.props } />,
			past: <PastSetting { ...this.props } />,
			other: <KeyValueRepeater { ...this.props } />,
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
				<h3>{ __( 'Configure your settings' ) }</h3>

				<SelectControl
					label={ __( 'Design Option' ) }
					options={ [
						{ label: __( 'Standard' ), value: 'standard' },
						{ label: __( 'Pro' ), value: 'pro' },
					] }
					value={ attributes.design }
					onChange={ ( value ) => setAttributes( { design: value } ) }
				/>
				<span>
					<a href={ 'https://eventcalendarnewsletter.com/the-events-calendar-shortcode/' }>{ 'Upgrade' }</a>
					{ ' to Pro for more designs!' }
				</span>

				<SelectControl
					label={ __( 'Choose an option' ) }
					options={ [
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
			</Fragment>
		);
	}
}

export default BlockEdit;
