import Select from 'react-select';

const { Component, Fragment } = wp.element;
const { BaseControl, Button } = wp.components;
const { apiFetch } = wp;
const { __ } = wp.i18n;

/**
* Setting component for event categories
*/
class CategorySetting extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			key: 'cat',
			selectOptions: [],
			selectedCats: props.attributes.cat ? props.attributes.cat : [],
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
				if ( catArray.indexOf( option.value.toString() ) > -1 ) {
					return parseInt( option.value );
				}
			} );

			this.setState( {
				selectOptions,
				selectedCats,
			} );
		} );
	}

	/**
	 * Format selection and update value
	 *
	 * @param {Object} selectedCats The selected category
	 */
	handleChange = ( selectedCats ) => {
		this.setState( { selectedCats } );
	}

	/**
	 * Pass added setting up to container
	 */
	handleAdd = () => {
		const formattedSelection = this.state.selectedCats.map( category => {
			return category.value;
		} );
		const stringSelection = formattedSelection.join( ',' );

		this.props.onAdd( { [ this.state.key ]: stringSelection } );
	}

	/**
	 * @returns {ReactElement} Category Setting
	 */
	render() {
		return (
			<Fragment>
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
				<Button
					isDefault
					onClick={ this.handleAdd }
				>Add</Button>
			</Fragment>
		);
	}
}

export default CategorySetting;

