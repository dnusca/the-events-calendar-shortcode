const { Component } = wp.element;
const { __ } = wp.i18n;

/**
* Setting component for month
*/
class MonthSetting extends Component {
	constructor( props ) {
		super( props );
		let { month } = props.attributes;
		month = typeof month === 'undefined' ? '' : month;
		const valid = ( month !== '' && month !== 'current' );

		this.state = {
			year: valid ? month.slice( 0, 4 ) : '',
			month: valid ? month.slice( 5 ) : '',
			monthValid: valid,
			yearValid: valid,
		};
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
	* Handle year input change
	*
	* @param {Object} event input onChange event
	*/
	handleYearChange = ( event ) => {
		const { month, monthValid } = this.state;

		if ( ! event.target.validity.patternMismatch && monthValid ) {
			this.props.setAttributes( { month: `${ event.target.value }-${ month }` } );
		} else {
			this.props.setAttributes( { month: '' } );
		}

		this.setState( {
			year: event.target.value,
			yearValid: ! event.target.validity.patternMismatch,
		} );
	}

	/**
	* Handle month input change
	*
	* @param {Object} event input onChange event
	*/
	handleMonthChange = ( event ) => {
		const { year, yearValid } = this.state;

		if ( ! event.target.validity.patternMismatch && yearValid ) {
			this.props.setAttributes( { month: `${ year }-${ event.target.value }` } );
		} else {
			this.props.setAttributes( { month: '' } );
		}

		this.setState( {
			month: event.target.value,
			monthValid: ! event.target.validity.patternMismatch,
		} );
	}

	/**
	 * @return {ReactElement} Month Setting
	 */
	render() {
		const { month } = this.props.attributes;
		const current = ( month === 'current' ) ? true : false;

		return (
			<div className={ 'ecs-settings-month' }>
				<div className={ 'ecs-setting-current' }>
					<input
						id={ 'ecs-setting-current' }
						type={ 'checkbox' }
						checked={ current }
						onChange={ this.handleChange }
					/><label
						className={ 'components-base-control__label' }
						htmlFor={ 'ecs-setting-current' }
					>{ __( 'Current Month Only?', 'the-events-calendar-shortcode' ) }</label>
				</div>

				{ ! current ? <div className={ 'ecs-setting-year-month' }>
					<div className={ 'ecs-setting-text-field' }>
						<label
							className={ 'ecs-setting-label' }
							htmlFor={ 'ecs-setting-year' }
						>{ __( 'Year', 'the-events-calendar-shortcode' ) }</label>
						<input
							id={ 'ecs-setting-year' }
							style={ { borderColor: this.state.yearValid ? 'inherit' : 'red' } }
							type={ 'text' }
							label={ __( 'Year' ) }
							placeholder={ 'YYYY' }
							value={ this.state.year }
							pattern={ '[0-9]{4}' }
							onChange={ this.handleYearChange }
						/>
					</div>

					<div className={ 'ecs-month-divider' } />

					<div className={ 'ecs-setting-text-field' }>
						<label
							className={ 'ecs-setting-label' }
							htmlFor={ 'ecs-setting-month' }
						>{ __( 'Month', 'the-events-calendar-shortcode' ) }</label>
						<input
							id={ 'ecs-setting-month' }
							style={ { borderColor: this.state.monthValid ? 'inherit' : 'red' } }
							type={ 'text' }
							placeholder={ 'MM' }
							value={ this.state.month }
							pattern={ '(0[1-9]|1[012])' }
							onChange={ this.handleMonthChange }
						/>
					</div>
				</div> : null }
			</div>
		);
	}
}

export default MonthSetting;
