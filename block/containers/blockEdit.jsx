import SettingsRepeater from '../components/settingsRepeater.jsx';

const { Component, Fragment } = wp.element;
const { SelectControl } = wp.components;
const { __ } = wp.i18n;

/**
* Outputs the edit settings mode of the block
*/
class BlockEdit extends Component {
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
				<SettingsRepeater { ...this.props } />
			</Fragment>
		);
	}
}

export default BlockEdit;
