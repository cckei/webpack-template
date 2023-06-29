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
    ]
})

