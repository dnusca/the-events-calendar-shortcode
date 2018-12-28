import Select from 'react-select';

const { Component, Fragment } = wp.element;
const { apiFetch } = wp;

/**
* Setting component for event categories
*/
class CategorySetting extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			selectOptions: [],
			selectedCats: [],
			isLoading: true,
		};
	}

	/**
	 * Load in event categories from tribe endpoint - CDM
	 */
	componentDidMount() {
		apiFetch( { path: '/tribe/events/v1/categories/' } ).then( ( response ) => {
			const selectOptions = response.categories.map( ( category ) => {
				return { value: category.slug, label: category.name };
			} );

			const { cat } = this.props.attributes;
			const catArray = ( typeof cat === 'undefined' ) ? [] : cat.split( ', ' );

			const selectedCats = selectOptions.filter( ( option ) => {
				if ( catArray.indexOf( option.value ) > -1 ) {
					return option.value;
				}
			} );

			this.setState( {
				selectOptions,
				selectedCats,
				isLoading: false,
			} );
		} );
	}

	/**
	 * Handle selection change
	 *
	 * @param {Array} selectedCats the selected categories
	 */
	handleChange = ( selectedCats ) => {
		const formattedSelection = selectedCats.map( ( category ) => {
			return category.value;
		} );
		const stringSelection = formattedSelection.join( ', ' );

		this.setState( { selectedCats } );
		this.props.setAttributes( { cat: stringSelection } );
	}

	/**
	 * @return {ReactElement} Category Setting
	 */
	render() {
		return (
			<Fragment>
				<Select
					className={ 'ecs-select multi' }
					classNamePrefix={ 'select' }
					value={ this.state.selectedCats }
					onChange={ this.handleChange }
					options={ this.state.selectOptions }
					isMulti={ 'true' }
					isLoading={ this.state.isLoading }
				/>
			</Fragment>
		);
	}
}

export default CategorySetting;

