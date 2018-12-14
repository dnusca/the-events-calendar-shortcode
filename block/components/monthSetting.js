const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;

/**
* Setting component for month
*/
class MonthSetting extends Component {
	constructor( props ) {
		super( props );
		const valid = ( props.attributes.month === 'current' );

		this.state = { valid: valid };
	}
	/**
	* Handle current checkbox input change
	*
	* @param {Object} event input onChange event
	*/
	handleChange = ( event ) => {
		const current = ( event.target.checked ) ? 'current' : '';
		this.props.setAttributes( { month: current } );
	}

	/**
	* Handle current checkbox input change
	*
	* @param {Object} event input onChange event
	*/
	handleYearChange = ( event ) => {
		this.setState( { valid: event.target.validity.patternMismatch } );
		this.props.setAttributes( { month: event.target.value } );
	}

	/**
	* Handle current checkbox input change
	*
	* @param {Object} event input onChange event
	*/
	handleMonthChange = ( event ) => {
		this.setState( { valid: event.target.validity.patternMismatch } );
		this.props.setAttributes( { month: event.target.value } );
	}

	/**
	 * @return {ReactElement} Month Setting
	 */
	render() {
		const { month } = this.props.attributes;
		const current = ( month === 'current' ) ? true : false;
		const textValue = current ? '' : month;

		return (
			<Fragment>
				<input
					id={ 'ecs-setting-month-current' }
					type={ 'checkbox' }
					checked={ current }
					onChange={ this.handleChange }
				/><span>{ __( 'Current' ) }</span>

				{ ! current ? <Fragment>
					<input
						id={ 'ecs-setting-year' }
						style={ { borderColor: this.state.yearValid ? 'red' : 'inherit' } }
						type={ 'text' }
						label={ __( 'Year' ) }
						placeholder={ 'YYYY' }
						value={ textValue }
						pattern={ '[0-9]{4}' }
						onChange={ this.handleYearChange }
					/>
					<input
						id={ 'ecs-setting-month' }
						style={ { borderColor: this.state.monthValid ? 'red' : 'inherit' } }
						type={ 'text' }
						label={ __( 'Month' ) }
						placeholder={ 'MM' }
						value={ textValue }
						pattern={ '(0[1-9]|1[012])' }
						onChange={ this.handleMonthChange }
					/>
				</Fragment> : null }
			</Fragment>
		);
	}
}

export default MonthSetting;
