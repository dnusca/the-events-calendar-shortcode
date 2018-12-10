const { Component, Fragment } = wp.element;
const { ServerSideRender } = wp.components;

class BlockPreview extends Component {
	/**
	* @returns {ReactElement} The block preview
	*/
	render() {
		const { attributes } = this.props;
		console.log( attributes );
		return (
			<Fragment>
				<ServerSideRender
					block={ 'events-calendar-shortcode/block' }
					attributes={ attributes }
				/>
			</Fragment>
		);
	}
}

export default BlockPreview;
