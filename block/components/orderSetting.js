import Select from 'react-select';

const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;

class OrderSetting extends Component {
	/**
	 * Handle selection change
	 *
	 * @param {Array} selectedOrder the selected categories
	 */
	handleChange = ( selectedOrder ) => {
		this.props.setAttributes( { order: selectedOrder.value } );
	}

	/**
	 * @return {ReactElement} Order Setting
	 */
	render() {
		const { order } = this.props.attributes;

		const orderOptions = [
			{
				label: __( 'Ascending', 'the-events-calendar-shortcode' ),
				value: 'ASC',
			},
			{
				label: __( 'Descending', 'the-events-calendar-shortcode' ),
				value: 'DESC',
			},
        ];
        const selectedOrder = orderOptions.filter( ( option ) => option.value === order );

        return (
			<Fragment>
				<Select
					className={ 'ecs-select' }
					classNamePrefix={ 'select' }
					value={ selectedOrder }
					onChange={ this.handleChange }
					options={ orderOptions }
				/>
			</Fragment>
		);
	}
}

export default OrderSetting;

