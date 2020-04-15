const path = require( 'path' );
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' ); // Temporary until Webpack 5.0 resolves this
const WebpackBuildNotifierPlugin = require( 'webpack-build-notifier' );
const autoprefixer = require( 'autoprefixer' );

/**
 * Given a string, returns a new string with dash separators converted to
 * camel-case equivalent. This is not as aggressive as `_.camelCase`, which
 * which would also upper-case letters following numbers.
 *
 * @param {string} string Input dash-delimited string.
 *
 * @return {string} Camel-cased string.
 */
const camelCaseDash = string => string.replace(
	/-([a-z])/g,
	( match, letter ) => letter.toUpperCase()
);

/**
 * Define externals to load components through the wp global.
 */
const wpExternals = [
	'blocks',
	'hooks',
	'components',
	'serverSideRender',
	'element',
	'i18n',
].reduce( ( externals, name ) => ( {
	...externals,
	[ `@wordpress/${ name }` ]: `wp.${ camelCaseDash( name ) }`,
} ), {
	wp: 'wp',
} );

/**
 * The Webpack Config!
 */
module.exports = ( env, argv ) => {
	const production = argv.mode === 'production';

	const config = {
		entry: {
			block: path.resolve( __dirname, 'block/index.js' ),
			styles: path.resolve( __dirname, 'block/styles/index.scss' ),
		},

		output: {
			filename: '[name].js',
			path: path.resolve( __dirname, 'static' ),
		},

		externals: {
			react: 'React',
			'react-dom': 'ReactDOM',
			...wpExternals
		},

		optimization: {
			minimize: true,
			minimizer: [
				new TerserPlugin(),
				new OptimizeCSSAssetsPlugin( {} ),
			],
		},

		devtool: production ? '' : 'source-map',

		resolve: {
			extensions: [ '.js', '.jsx', '.json' ],
		},

		plugins: [
			new MiniCssExtractPlugin( { filename: 'ecs-block.css' } ),
			new FixStyleOnlyEntriesPlugin(),
			new WebpackBuildNotifierPlugin( { sound: false } ),
		],

		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.scss$/,
					include: path.resolve( __dirname, 'block/styles/' ),
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: [ autoprefixer ],
							},
						},
						{ loader: 'sass-loader' },
					],
				},
			],
		},
	};

	return config;
};
