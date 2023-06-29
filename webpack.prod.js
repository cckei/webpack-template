const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common.js')
const CompressionPlugin = require('compression-webpack-plugin');

const rootFolder = './';

module.exports = merge(common, {
    mode: 'production',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '../'
                })
			}
		]
    },
    plugins: [
        new ExtractTextPlugin(`${rootFolder}styles/[name].css`),
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i
        })
    ],
    // optimization: {
    //     minimize: true,
    //     minimizer: [new UglifyJsPlugin({
    //         include: /\.min\.js$/
    //     })]
    // }
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

