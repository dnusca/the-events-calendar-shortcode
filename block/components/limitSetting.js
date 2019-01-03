const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;

/**
* Setting component for limit
*/
class LimitSetting extends Component {
	/**
	 * Handle limit input change
	 *
	 * @param {Object} event input onChange event
	 */
	handleChange = ( event ) => {
		this.props.setAttributes( { limit: parseInt( event.target.value ) } );
	}

	/**
	 * @return {ReactElement} Limit Setting
	 */
	render() {
		const { attributes } = this.props;

		return (
			attributes.design !== 'calendar' ? <Fragment>
				<input
					id={ 'ecs-setting-limit' }
					type={ 'number' }
					min={ 1 }
					value={ typeof attributes.limit !== 'undefined' ? attributes.limit : '5' }
					onChange={ this.handleChange }
				/>
			</Fragment> : __( 'n/a', 'the-events-calendar-shortcode' )
		);
	}
}

export default LimitSetting;

