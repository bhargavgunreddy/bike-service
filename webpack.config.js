var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		"app": __dirname + "/js/main.js",
		
	},
	output: {
		path: __dirname + "/build",
		filename: "[name].bundle.js",
		
    },
	devServer: {
		contentBase: "build"
	},
	module: {
	  loaders: [
		{
		  test: /\.html$/,
          loader: "html"
		},	
		{
		  test: /\.js$/,
		  loader: "babel-loader",
		  exclude: /node_modules/,
		  query: {
			  presets: ['es2015', 'react']
			}
		},
		{ 
			test: /\.css$/, 
			exckude: /node_modules/,
			loader: "style-loader!css-loader" 
		},
		{
			test: /\.(svg|eot|woff|png|ttf)/,
			exclude: /node_modules/,
			loader: 'url-loader?lomot:10000'
		}
		
      ]
	},
	plugins: [
	  new HtmlWebpackPlugin({
		title: 'Custom template',
		template: 'build/index.html', // Load a custom template (ejs by default see the FAQ for details)
	  }),
	  new webpack.optimize.CommonsChunkPlugin(
		/* chunkName= */"app", 
		/* filename= */"app.bundle.js"),
	  new webpack.optimize.UglifyJsPlugin({
		  minimize: true,
		  compress: { warnings: false }
    })
	
  ]
}