const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
    mode: 'development',
    devServer: {
		hot: true,
		inline: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader','css-loader', 'postcss-loader', 'sass-loader']
			}
			// {
			// 	test: /\.(png|svg|jpe?g|gif)$/,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				outputPath: 'images/',
			// 				useRelativePath: true,
			// 				name: '[name].[ext]'
			// 			}
			// 		}
			// 	]
			// },
		]
	}
});