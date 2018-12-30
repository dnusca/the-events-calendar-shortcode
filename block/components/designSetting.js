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
				<div className={ 'ecs-setting-help' }>
					<a
						href={ 'https://eventcalendarnewsletter.com/the-events-calendar-shortcode/?utm_source=plugin&utm_medium=link&utm_campaign=block-design-help&utm_content=description#designs' }
						target={ '_blank' }
					>{ __( 'Upgrade to Pro', 'the-events-calendar-shortcode' ) }</a>
					{ __( ' for more designs!', 'the-events-calendar-shortcode' ) }
				</div>
			</Fragment>
		);
	}
}

export default DesignSetting;
