const { Component, Fragment } = wp.element;

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
			<Fragment>
				<input
					id={ 'ecs-setting-limit' }
					type={ 'number' }
					min={ 1 }
					value={ attributes.limit }
					onChange={ this.handleChange }
				/>
			</Fragment>
		);
	}
}

export default LimitSetting;

