const path = require( 'path' );
const webpack = require('webpack');

module.exports = ( env, argv ) => {
	const production = argv.mode === 'production';

	let config = {
		entry: {
			block: path.resolve( __dirname, 'block/index.js' ),
		},

		output: {
			filename: '[name].js',
			path: path.resolve( __dirname, 'static' ),
			publicPath: production ? '' : 'http://localhost:8080/',
		},

		externals: {
			react: 'React',
			'react-dom': 'ReactDOM',
		},

		devtool: production ? '' : 'source-map',

		resolve: {
			extensions: [ '.js', '.jsx', '.json' ],
		},

		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
			],
		},
	};

	if ( ! production ) {
		config.devServer = {
			contentBase: path.join( __dirname, 'block' ),
			publicPath: 'http://localhost:8080/',
			historyApiFallback: false,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			hot: true,
		};

		config.plugins = [
			new webpack.HotModuleReplacementPlugin(),
		];
	}

	return config;
};
