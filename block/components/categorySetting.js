import Select from 'react-select';

const { Component, Fragment } = wp.element;
const { apiFetch } = wp;
const { compose } = wp.compose;
const { withSelect, dispatch } = wp.data;
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

			const catArray = this.props.attributes.cat.split( ',' );
			console( `cdm catArray is ${catArray}`)

			const selectedCats = selectOptions.filter( option => {
				if ( catArray.indexOf( option.value ) > 0 ) {
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
		this.setState( { selectedCats } );

		const formattedSelection = selectedCats.map( category => {
			return category.value;
		} );

		const stringSelection = formattedSelection.join( ',' );
		console( `hc stringSelection is ${stringSelection}`)

		this.props.setAttributes( { cat: stringSelection } );
	}

	render() {
		return (
			<Fragment>
				<Select
					value={ this.state.selectedCats }
					onChange={ this.handleChange }
					options={ this.state.selectOptions }
					isMulti={ 'true' }
				/>

			</Fragment>
		);
	}
}

export default CategorySetting;

