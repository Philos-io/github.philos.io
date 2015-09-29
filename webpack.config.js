var path = require('path');


module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'app')
	},

	module:{
		loaders:[

			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	},
	devServer: {
		contentBase: "./app"
	}
};
