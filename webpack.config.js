const path = require('path');
const webpack = require('webpack');


module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'inline-source-map',
	/*devServer: {
		proxy: {
			'/icss-web': {
				target: 'http://192.168.2.165:8080/icss-web/chronic_controller/get_medicaltemplate_info?relationId=792&type=2',
				changeOrigin: true
			}
		}
	},*/
	module: {
		rules: [
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: ['style-loader','css-loader','less-loader']
				/*use: [
					{
						loader: 'style-loader'
					},{
						loader: 'css-loader'
					},{
						loader: 'less-loader'
					}
				]*/
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ["es2015","react"]
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}