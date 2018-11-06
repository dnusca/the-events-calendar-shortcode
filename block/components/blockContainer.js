/*eslint camelcase: ["error", {allow: ["edit_mode"]}]*/

import BlockPreview from './blockPreview';
import BlockEdit from './blockEdit';

const { Component, Fragment } = wp.element;
const { BlockControls } = wp.editor;
const { Toolbar } = wp.components;
const { __ } = wp.i18n;

/**
 * The block Edit container component
 */
export default class BlockContainer extends Component {
	render() {
		const { attributes, setAttributes } = this.props;
		const { edit_mode } = attributes;

		const editButton = [
			{
				icon: 'edit',
				title: __( 'Edit' ),
				onClick: () => setAttributes( { edit_mode: ! edit_mode } ),
				isActive: edit_mode,
			},
		];

		return (
			<Fragment>
				<BlockControls>
					<Toolbar controls={ editButton } />
				</BlockControls>
				{ edit_mode ? (
					<BlockEdit { ...this.props } />
				) : (
					<BlockPreview { ...this.props } />
				) }
			</Fragment>
		);
	}
}
