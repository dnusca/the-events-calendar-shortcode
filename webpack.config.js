const path = require('path');

module.exports = (env, argv) => {
  let production = argv.mode === 'production'

  return {
    entry: {
      'block': path.resolve( __dirname, 'block/index.js' ),
    },

    output: {
      filename: '[name].js',
      path: path.resolve( __dirname, 'static' ),
    },

	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},

    devtool: production ? '' : 'source-map',

    resolve: {
      extensions: [ ".js", ".jsx", ".json" ],
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
}
