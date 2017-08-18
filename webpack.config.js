var path = require('path');
var webpack = require('webpack');
const validate = require('webpack-validator');

var BUILD_NAME = 'build/';
var SRC_NAME = 'src/';
var BUILD_DIR = path.resolve(__dirname, BUILD_NAME);
var SRC_DIR = path.resolve(__dirname, SRC_NAME);

module.exports = validate({
	devtool: 'source-map', // 'eval' for development, 'source-map' for production
	debug: true,
	entry: [
		'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		'./' + SRC_NAME + 'index', // Your appʼs entry point
		'./src/styles/style.scss'
	],
	output: {
		path: BUILD_DIR,
		pathinfo: true,
		filename: 'index.js',
		publicPath: '/' + BUILD_NAME
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['react-hot-loader/webpack', 'babel'],
				include: SRC_DIR,
				exclude: /node_modules/
			},
			{
				test: /\.jsx$/,
				loaders: ['react-hot-loader/webpack', 'babel'],
				include: SRC_DIR,
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css?sourceMap']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});