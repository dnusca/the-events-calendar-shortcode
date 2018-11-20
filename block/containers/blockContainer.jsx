import BlockPreview from './blockPreview';
import BlockSettings from './blockSettings';

const { Component, Fragment } = wp.element;

/**
 * The block Edit container component
 */
class BlockContainer extends Component {
	render() {
		const { isSelected } = this.props;

		return (
			<Fragment>
				{ isSelected ? (
					<BlockSettings { ...this.props } />
				) : (
					<BlockPreview { ...this.props } />
				) }
			</Fragment>
		);
	}
}

export default BlockContainer;
