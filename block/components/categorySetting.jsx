import Select from 'react-select';

const { Component } = wp.element;
const { BaseControl } = wp.components;
const { apiFetch } = wp;
const { __ } = wp.i18n;

/**
* Setting component for event categories
*/
class CategorySetting extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			selectOptions: [],
			selectedCats: [],
		};
	}

	componentDidMount() {
		apiFetch( { path: '/tribe/events/v1/categories/' } ).then( response => {
			const selectOptions = response.categories.map( category => {
				return { value: category.id, label: category.name };
			} );

			const { cat } = this.props.attributes;
			const catArray = cat.toString().split( ',' );

			const selectedCats = selectOptions.filter( option => {
				if ( catArray.indexOf( option.value.toString() ) > 0 ) {
					return option;
				}
			} );

			this.setState( {
				selectOptions,
				selectedCats,
			} );
		} );
	}

	/**
	 * Format selection and update cat attribute
	 *
	 * @param {Object} selectedCats The selected category
	 */
	handleChange = ( selectedCats ) => {
		const formattedSelection = selectedCats.map( category => {
			return category.value;
		} );
		const stringSelection = formattedSelection.join( ',' );

		this.setState( { selectedCats } );
		this.props.setAttributes( { cat: stringSelection } );
	}

	render() {
		return (
			<BaseControl
				id={ 'ecs-block-setting-category' }
				label={ __( 'Category' ) }
				help={ __( 'Select categories to include.' ) }
			>
				<Select
					value={ this.state.selectedCats }
					onChange={ this.handleChange }
					options={ this.state.selectOptions }
					isMulti={ 'true' }
				/>
			</BaseControl>
		);
	}
}

export default CategorySetting;

