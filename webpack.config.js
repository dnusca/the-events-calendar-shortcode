const path = require( 'path' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' ); // Temporary until Webpack 5.0 resolves this
const WebpackBuildNotifierPlugin = require( 'webpack-build-notifier' );
const autoprefixer = require( 'autoprefixer' );

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
		},

		optimization: {
			minimizer: [
				new UglifyJsPlugin( {
					cache: true,
					parallel: true,
					sourceMap: false,
				} ),
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
