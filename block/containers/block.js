import BlockEdit from './blockEdit';
import BlockPreview from './blockPreview';

import { Component } from '@wordpress/element';

class Block extends Component {
	/**
	* @return {ReactElement} The block preview or the edit form
	*/
	render() {
		const { isSelected } = this.props;
		const blockMode = isSelected ? <BlockEdit { ...this.props } /> : <BlockPreview { ...this.props } />;

		return blockMode;
	}
}

export default Block;
