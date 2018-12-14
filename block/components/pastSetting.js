const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;

/**
* Setting component for limit
*/
class PastSetting extends Component {
	/**
	* Handle current checkbox input change
	*
	* @param {Object} event input onChange event
	*/
	handleChange = ( event ) => {
		const past = ( event.target.checked ) ? 'yes' : '';
		this.props.setAttributes( { past: past } );
	}

	/**
	 * @return {ReactElement} Limit Setting
	 */
	render() {
		const past = ( this.props.attributes.past === 'yes' ) ? true : false;

		return (
			<Fragment>
				<input
					id={ 'ecs-setting-month-current' }
					type={ 'checkbox' }
					checked={ past }
					onChange={ this.handleChange }
				/>
				<span>{ __( 'Show only past events?' ) }</span>
			</Fragment>
		);
	}
}

export default PastSetting;
