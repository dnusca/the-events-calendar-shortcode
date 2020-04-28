import { Component, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
* Setting component for past
*/
class PastSetting extends Component {
	/**
	* Handle past checkbox input change
	*
	* @param {Object} event input onChange event
	*/
	handleChange = ( event ) => {
		const past = ( event.target.checked ) ? 'yes' : '';
		this.props.setAttributes( { past: past } );
	}

	/**
	 * @return {ReactElement} Past Setting
	 */
	render() {
		const past = ( this.props.attributes.past === 'yes' ) ? true : false;

		return (
			<Fragment>
				<input
					id={ 'ecs-setting-past' }
					type={ 'checkbox' }
					checked={ past }
					onChange={ this.handleChange }
				/>
				<label
					className={ 'components-base-control__label' }
					htmlFor={ 'ecs-setting-past' }
				>{ __( 'Show only past events?', 'the-events-calendar-shortcode' ) }</label>
			</Fragment>
		);
	}
}

export default PastSetting;
