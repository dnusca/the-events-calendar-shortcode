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
				return { value: category.slug, label: category.name };
			} );

			const { cat } = this.props.attributes;
			const catArray = ( typeof cat === 'undefined' ) ? [] : cat.split( ', ' );

			const selectedCats = selectOptions.filter( option => {
				if ( catArray.indexOf( option.value ) > -1 ) {
					return option.value;
				}
			} );

			this.setState( {
				selectOptions,
				selectedCats,
			} );
		} );
	}

	/**
	 * Handle selection change
	 *
	 * @param {Array} selectedCats the selected categories
	 */
	handleChange = ( selectedCats ) => {
		const formattedSelection = selectedCats.map( category => {
			return category.value;
		} );
		const stringSelection = formattedSelection.join( ', ' );

		this.setState( { selectedCats } );
		this.props.setAttributes( { cat: stringSelection } );
	}

	/**
	 * @returns {ReactElement} Category Setting
	 */
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

