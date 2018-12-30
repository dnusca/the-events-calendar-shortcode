const { Component } = wp.element;
const { __ } = wp.i18n;

/**
* Setting component for the excerpt
*/
class ExcerptSetting extends Component {
	isValid = ( excerpt ) => {
		return ( excerpt !== 'false' );
	}

	/**
	* Handle excerpt checkbox input change
	*
	* @param {Object} event input onChange event
	*/
	handleChange = ( event ) => {
		const value = ( event.target.checked ) ? '100' : 'false';
		this.props.setAttributes( { excerpt: value } );
	}

	/**
	* Handle excerpt length input change
	*
	* @param {Object} event input onChange event
	*/
	handleLengthChange = ( event ) => {
		if ( ! event.target.validity.patternMismatch ) {
			this.props.setAttributes( { excerpt: `${ event.target.value }` } );
		} else {
			this.props.setAttributes( { excerpt: '100' } );
		}
	}

	/**
	 * @return {ReactElement} Excerpt Setting
	 */
	render() {
		const { excerpt } = this.props.attributes;

		return (
			<div className={ 'ecs-settings-excerpt' }>
				<div className={ 'ecs-setting-excerpt-enable' }>
					<input
						id={ 'ecs-setting-excerpt' }
						type={ 'checkbox' }
						checked={ excerpt !== 'false' }
						onChange={ this.handleChange }
					/><label
						className={ 'components-base-control__label' }
						htmlFor={ 'ecs-setting-excerpt' }
					>{ __( 'Show excerpt of events', 'the-events-calendar-shortcode' ) }</label>
				</div>

				{ this.isValid( excerpt ) ? <div className={ 'ecs-setting-excerpt' }>
					<div className={ 'ecs-setting-text-field' }>
						<label
							className={ 'ecs-setting-label' }
							htmlFor={ 'ecs-setting-excerpt-length' }
						>{ __( 'Length', 'the-events-calendar-shortcode' ) }</label>
						<input
							id={ 'ecs-setting-excerpt-length' }
							style={ { borderColor: ! isNaN( parseInt( excerpt ) ) ? 'inherit' : 'red' } }
							type={ 'text' }
							label={ __( 'Excerpt Length' ) }
							value={ excerpt }
							pattern={ '[0-9]*' }
							onChange={ this.handleLengthChange }
						/>
					</div>
				</div> : null }
			</div>
		);
	}
}

export default ExcerptSetting;
