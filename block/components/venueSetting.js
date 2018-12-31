const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;

/**
* Setting component for past
*/
class VenueSetting extends Component {
	handleChange = ( event ) => {
		this.props.setAttributes( { venue: ( event.target.checked ) ? 'true' : 'false' } );
	}

	/**
	 * @return {ReactElement} Venue Setting
	 */
	render() {
		const venue = ( this.props.attributes.venue === 'false' ) ? false : true;

		return (
			<Fragment>
				<input
					id={ 'ecs-setting-venue' }
					type={ 'checkbox' }
					checked={ venue }
					onChange={ this.handleChange }
				/>
				<label
					className={ 'components-base-control__label' }
					htmlFor={ 'ecs-setting-venue' }
				>{ __( 'Show venue information', 'the-events-calendar-shortcode' ) }</label>
			</Fragment>
		);
	}
}

export default VenueSetting;
