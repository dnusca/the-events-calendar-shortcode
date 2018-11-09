import BlockPreview from './blockPreview';
import BlockSettings from './blockSettings';

const { Component, Fragment } = wp.element;
const { BlockControls } = wp.editor;
const { Toolbar } = wp.components;
const { __ } = wp.i18n;

/**
 * The block Edit container component
 */
class BlockContainer extends Component {
	render() {
		const { attributes, setAttributes } = this.props;
		const { settingsMode } = attributes;

		const settingsButton = [
			{
				icon: 'calendar',
				title: __( 'Configure Settings' ),
				onClick: () => setAttributes( { settingsMode: ! settingsMode } ),
				isActive: settingsMode,
			},
		];

		return (
			<Fragment>
				<BlockControls>
					<Toolbar controls={ settingsButton } />
				</BlockControls>
				{ settingsMode ? (
					<BlockSettings { ...this.props } />
				) : (
					<BlockPreview { ...this.props } />
				) }
			</Fragment>
		);
	}
}

export default BlockContainer;
