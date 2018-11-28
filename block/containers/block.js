import BlockEdit from './blockEdit';
import BlockPreview from './blockPreview';

const { Component } = wp.element;

class Block extends Component {
	/**
	* @returns {ReactElement} The block preview
	*/
	render() {
		const { isSelected } = this.props;
		const blockMode = isSelected ? <BlockEdit { ...this.props } /> : <BlockPreview { ...this.props } />;

		return blockMode;
	}
}

export default Block;
