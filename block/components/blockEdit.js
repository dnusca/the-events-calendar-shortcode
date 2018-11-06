const { Component, Fragment } = wp.element;
const { SelectControl } = wp.components;
const { __ } = wp.i18n;

/**
* Outputs the edit settings mode of the block
*/
export default class BlockEdit extends Component {

	render() {
		const { attributes, setAttributes } = this.props;

		return (
			<Fragment>
				<SelectControl
					label={ 'Design Option' }
					options={ [
						{ label: __( 'Standard' ), value: 'standard' },
						{ label: __( 'Pro' ), value: 'pro' },
					] }
					value={ attributes.design }
					onChange={ ( value ) => setAttributes( { design: value } ) }
				/>
				<span>
					<a href={ 'https://eventcalendarnewsletter.com/the-events-calendar-shortcode/' }>{ 'Upgrade' }</a>
					{ ' to Pro for more designs!' }
				</span>
			</Fragment>
		);
	}
}
