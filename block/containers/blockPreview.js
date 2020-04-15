import { Component, Fragment } from '@wordpress/element';
import { withFilters } from '@wordpress/components';
import ServerSideRender from '@wordpress/serverSideRender';

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
