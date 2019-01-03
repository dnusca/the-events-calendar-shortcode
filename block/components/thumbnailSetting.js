const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { TextControl } = wp.components;

/**
* Setting component for month
*/
class ThumbnailSetting extends Component {
	/**
	* Handle current checkbox input change
	*
	* @param {Object} event input onChange event
	*/
	handleChange = ( event ) => {
		this.props.setAttributes( { thumb: ( event.target.checked ) ? 'true' : 'false' } );
	}

	handleThumbWidthChange = ( event ) => {
		this.props.setAttributes( {
			thumbwidth: isNaN( parseInt( event.target.value ) ) ? '' : parseInt( event.target.value )
		} );
	}

	handleThumbHeightChange = ( event ) => {
		this.props.setAttributes( {
			thumbheight: isNaN( parseInt( event.target.value ) ) ? '' : parseInt( event.target.value )
		} );
	}

	handleThumbSizeChange = ( value ) => {
		this.props.setAttributes( { thumbsize: value } );
	}

	/**
	 * @return {ReactElement} Thumb Setting
	 */
	render() {
		const { thumb, thumbwidth, thumbheight, thumbsize } = this.props.attributes;
		const valid = typeof thumb !== 'undefined' && thumb !== 'false';
		this.props.setAttributes( { 'thumb': valid ? 'true' : 'false' } );

		return (
			<div className={ 'ecs-settings-thumb' }>
				<div>
					<input
						id={ 'ecs-setting-thumb' }
						type={ 'checkbox' }
						checked={ thumb === 'true' }
						onChange={ this.handleChange }
					/><label
						className={ 'components-base-control__label' }
						htmlFor={ 'ecs-setting-thumb' }
					>{ __( 'Show thumbnail image', 'the-events-calendar-shortcode' ) }</label>
				</div>

				{ valid ? <Fragment>
					<div className={ 'ecs-settings-thumb-width-height' }>
						<div className={ 'ecs-setting-text-field' }>
							<label
								className={ 'ecs-setting-label' }
								htmlFor={ 'ecs-setting-thumbwidth' }
							>{ __( 'Width', 'the-events-calendar-shortcode' ) }</label>
							<input
								id={ 'ecs-setting-thumbwidth' }
								type={ 'text' }
								label={ __( 'Width' ) }
								value={ thumbwidth }
								onChange={ this.handleThumbWidthChange }
							/>
						</div>

						<div className={ 'ecs-thumb-divider' }>
							x
						</div>

						<div className={ 'ecs-setting-text-field' }>
							<label
								className={ 'ecs-setting-label' }
								htmlFor={ 'ecs-setting-thumbheight' }
							>{ __( 'Height', 'the-events-calendar-shortcode' ) }</label>
							<input
								id={ 'ecs-setting-thumbheight' }
								type={ 'text' }
								label={ __( 'Height' ) }
								value={ thumbheight }
								onChange={ this.handleThumbHeightChange }
							/>
						</div>

						<div className={ 'ecs-thumb-divider' }>
							<em>or</em>
						</div>
					</div>
					<div className={ 'ecs-settings-thumb-size' }>
                        <TextControl
                            label={ __( 'Size', 'the-events-calendar-shortcode' ) }
                            value={ thumbsize }
                            onChange={ this.handleThumbSizeChange }
                        />
					</div>
					<div className={ 'ecs-setting-help' }>
						{ __( 'This differs depending on the your theme, but typical defaults include "medium" and "large"', 'the-events-calendar-shortcode' ) }
					</div>
				</Fragment> : null }
			</div>
		);
	}
}

export default ThumbnailSetting;
