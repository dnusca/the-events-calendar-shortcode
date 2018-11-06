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
	/**
	 * Constructor.
	 *
	 * @param {object} props All props from the edit handler in registerBlockType
	 *
	 */
	constructor( props ) {
		super( props );
	}

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
					<BlockEdit />
				) : (
					<BlockPreview />
				) }
			</Fragment>
		);
	}
}
