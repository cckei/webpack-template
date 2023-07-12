const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const glob = require('glob');
const fs = require('fs');

// CONFIG
const Config = require('./src/web-config');

const rootFolder = './';
let entries = {};


module.exports = {
	output: {
		filename: `${rootFolder}scripts/[name].bundle.js`,
		path: path.resolve(__dirname, "dist"),
		chunkFilename: `${rootFolder}scripts/[name].js`
	},
	resolve: {
		alias: {
		  images: path.resolve(__dirname, 'src/images/'), //handling the image url in scss
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
						  '@babel/preset-env',
						]
					}
				}
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: `${rootFolder}/fonts/`,
							useRelativePath: false,
                            name: '[name].[ext]',
                            // publicPath: "images/"
						}
					}
				]
			},
			{
				test: /\.mp4$/,
				use: [
					{
						loader: 'file-loader?name=images/[name].[ext]',
						options: {
							outputPath: `${rootFolder}/images/`,
							useRelativePath: false,
                            name: '[name].[ext]',
						}
					}
				]
			},
			{
				test: /\.pug$/,
				use: {
					loader: 'pug-loader',
					options: {
						self: true,
						pretty: true,
					},
				},
			},
			{
				test: /\.(json)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: `${rootFolder}/data/`,
							useRelativePath: false,
                            name: '[name].[ext]',
                            // publicPath: "data/"
						}
					}
				]
			},
			{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components|public)\/(?!(dom7|ssr-window|swiper)\/).*/,
                use: {
                    loader: 'babel-loader?cacheDirectory',
                    options: JSON.parse(fs.readFileSync(path.join(__dirname, '.babelrc')))
                }
            },
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		]
	},
	plugins: [
		new CopyPlugin([
			{ from: './src/images', to: `${rootFolder}images` },
			{ from: './src/static', to: `${rootFolder}` },
			// { from: './src/fonts', to: `${rootFolder}fonts` },
			// { from: './src/data', to: `${rootFolder}data` }
		]),
		new webpack.EnvironmentPlugin([
			'NODE_ENV'
		]),
	],
	stats: 'errors-warnings',
	node: {
        fs: 'empty'
	}
};

let generatePUG = (filename, globalJSON, dataJSON, chunkID, pugPath, sectionID) =>
{
	// console.log('filename: ', filename);
	module.exports.plugins.push(
		new HtmlWebpackPlugin({
			filename: filename,
			chunks: [chunkID],
			inject: 'head',
			minify: {
				collapseWhitespace: false,
				preserveLineBreaks: true,
				removeComments: true 
			},
			template: pugPath,
			data: require(dataJSON),
			globalData: require(globalJSON),
			section: sectionID
		})
	);
	// module.exports.plugins.push(
	// 	new I18nPlugin(languages[language])
	// );
};

// GENERATE HTML
let generateHTML = () =>
{
	let singleLanguage = Boolean(Object.keys(Config.languages).length == 1);
	// console.log('singleLanguage: ', singleLanguage);

	// glob.sync('./src/views/pages/*.pug').forEach((pugPath) =>
	Object.keys(Config.sitemap).map(id =>
	{
		// const array = pugPath.split('/');
		// const id = array[array.length - 1].replace('.pug', '');
		// console.log('id: ' + id);

		let templateID = Config.sitemap[id].template;
		let template = `./src/pages/${templateID}/${templateID}.pug`;

		//ENTRY
		if (!(templateID in entries))	entries[templateID] = `./src/pages/${templateID}/${templateID}.js`;

		Object.keys(Config.languages).map(language =>
		{
			let HTMLPath = (singleLanguage)?	`${rootFolder}`:`${rootFolder}${language}/`;
			let filename = (id == 'index')?	`${HTMLPath}${id}.html`:`${HTMLPath}${id}/index.html`;
			let i18n = `./src/i18n/${Config.languages[language]}.json`;
			let data = (id == 'index')?	`./src/data/${id}.json`:`./src/data/${id}/index.json`;

			generatePUG(filename, i18n, data, templateID, template);
		});

		if (Config.sitemap[id].sections)
		{
			let sections = Config.sitemap[id].sections;
			Object.keys(sections).map(level2 =>
			{
				let template2ID = sections[level2].template;
				let template2 = `./src/pages/${template2ID}/${template2ID}.pug`;

				//ENTRY
				if (!(template2ID in entries))	entries[template2ID] = `./src/pages/${template2ID}/${template2ID}.js`;

				Object.keys(Config.languages).map(language =>
				{
					let HTMLPath = (singleLanguage)?	`${rootFolder}`:`${rootFolder}${language}/`;
					let filename = `${HTMLPath}${id}/${level2}/index.html`;
					let i18n = `./src/i18n/${Config.languages[language]}.json`;
					let data = `./src/data/${id}/${level2}.json`;
		
					generatePUG(filename, i18n, data, template2ID, template2);
				});
			});
		}
	});

	// console.log('entries: ', entries);
}
generateHTML();

//ENTRY
module.exports.entry = entries;