const { Component, Fragment } = wp.element;
const { ServerSideRender, withFilters } = wp.components;

class BlockPreview extends Component {
	/**
	* @return {ReactElement} The block preview
	*/
	render() {
		const { attributes } = this.props;

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

export default withFilters( 'ecs.blockPreview' )( BlockPreview );
