
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin') //deprecated after webpack v3
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const common = require('./webpack.common.js')

const rootFolder = './';

module.exports = merge(common, {
    mode: 'production',
	module: {
		rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader', 'sass-loader'],
            },
		]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: `${rootFolder}css/[name].css`
        })
    ],
	optimization: {
		splitChunks: {
			cacheGroups: {
				// 抽離 node_modules
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					chunks: 'initial',
					name: 'vendors',
					priority: 20,
					enforce: true,
				},
				// // 抽離公用模組
				// common: {
				// 	chunks: 'initial',
				// 	minSize: 0,
				// 	name: 'common',
				// 	minChunks: 2,
				// 	priority: 10,
				// },
			},
		},
	}
})