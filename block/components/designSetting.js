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
		return (
			<Fragment>
				<Select
					className={ 'ecs-select' }
					classNamePrefix={ 'select' }
					options={ [
						{ label: __( 'Standard', 'the-events-calendar-shortcode' ), value: 'standard' },
					] }
					value={ { label: __( 'Standard', 'the-events-calendar-shortcode' ), value: 'standard' } }
				/>
				<span>
					<a
						href={ 'https://eventcalendarnewsletter.com/the-events-calendar-shortcode/' }
						target={ '_blank' }
					>{ __( 'Upgrade', 'the-events-calendar-shortcode' ) }</a>
					{ __( ' to Pro for more designs!', 'the-events-calendar-shortcode' ) }
				</span>
			</Fragment>
		);
	}
}

export default DesignSetting;
