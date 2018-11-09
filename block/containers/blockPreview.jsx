const { Component, Fragment } = wp.element;

/**
 * Outputs the preview mode of the block
 */
export default class BlockPreview extends Component {
	render() {
		const { attributes } = this.props;

		const propDisplay = Object.keys( attributes ).map( ( key ) => {
			return (
				<h5 key={ key }>{ `${ key }: ${ attributes[ key ] }` }</h5>
			);
		} );

		return (
			<Fragment>
				<div className={ 'ecs-block-preview-header' }>
					<h3>The Events Calendar Block</h3>
				</div>
				{ propDisplay }
			</Fragment>
		);
	}
}
