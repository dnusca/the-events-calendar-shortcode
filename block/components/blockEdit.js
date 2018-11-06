const { Component, Fragment } = wp.element;
const { TextControl, SelectControl } = wp.components
const { __ } = wp.i18n;

/**
* Outputs the edit settings mode of the block
*/
export default class BlockEdit extends Component {

	render() {
		return (
			<Fragment>
				<SelectControl
					label={ 'Design Option' }
					options={ [
						{ label: 'Standard', value: 'standard' },
					] }
				/>
				<span>
					<a href={ 'https://eventcalendarnewsletter.com/the-events-calendar-shortcode/' }>{ 'Upgrade' }</a>
					{ ' to Pro for more designs!' }
				</span>
			</Fragment>
		);
	}
}
