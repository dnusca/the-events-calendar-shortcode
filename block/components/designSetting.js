import Select from 'react-select';

const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;

/**
* Setting component for design
*/
class DesignSetting extends Component {
	/**
	 * @return {ReactElement} Design Setting
	 */
	render() {
		const textDomain = 'the-events-calendar-shortcode';

		return (
			<Fragment>
				<Select
					className={ 'ecs-select' }
					classNamePrefix={ 'select' }
					options={ [
						{ label: __( 'Standard', textDomain ), value: 'standard' },
					] }
					value={ { label: __( 'Standard', textDomain ), value: 'standard' } }
				/>
				<span>
					<a
						href={ 'https://eventcalendarnewsletter.com/the-events-calendar-shortcode/' }
						target={ '_blank' }
					>{ __( 'Upgrade', textDomain ) }</a>
					{ __( ' to Pro for more designs!', textDomain ) }
				</span>
			</Fragment>
		);
	}
}

export default DesignSetting;
