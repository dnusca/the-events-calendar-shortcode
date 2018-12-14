import Select from 'react-select';

const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;

/**
* Setting component for limit
*/
class DesignSetting extends Component {
	/**
	 * @return {ReactElement} Limit Setting
	 */
	render() {
		return (
			<Fragment>
				<Select
					className={ 'ecs-select' }
					classNamePrefix={ 'select' }
					options={ [
						{ label: __( 'Standard' ), value: 'standard' },
					] }
					value={ { label: __( 'Standard' ), value: 'standard' } }
				/>
				<span>
					<a href={ 'https://eventcalendarnewsletter.com/the-events-calendar-shortcode/' }>{ 'Upgrade' }</a>
					{ __( ' to Pro for more designs!' ) }
				</span>
			</Fragment>
		);
	}
}

export default DesignSetting;
