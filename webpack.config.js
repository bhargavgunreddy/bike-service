var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		"app": __dirname + "/js/main.js"
		
		
	},
	output: {
		path: __dirname + "/build",
		filename: "[name].bundle.js",
		
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
	        test: /\.scss$/,
	        loaders: ["style", "css", "sass"]
	    },
		{ 
			test: /\.css$/, 
			exckude: /node_modules/,
			loader: "style-loader!css-loader" 
		},
		{
		test: /\.(svg|png|ttf|woff|woff2|eot)/,
			exclude: /node_modules/,
			loader: 'url-loader?limt:10000'
		},
		{
		  test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
		  loader: "url?limit=10000&mimetype=application/font-woff"
		}, {
		  test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
		  loader: "url?limit=10000&mimetype=application/font-woff"
		}, {
		  test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
		  loader: "url?limit=10000&mimetype=application/octet-stream"
		}, {
		  test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		  loader: "file"
		}, {
		  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		  loader: "url?limit=10000&mimetype=image/svg+xml"
		}
		
      ]
	},
	plugins: [
	  new webpack.DefinePlugin({
	  	'proces.env':{
	  		'NODE_ENV': 'production'
	  	}
	  }),

	  new HtmlWebpackPlugin({
		title: 'Custom template',
		template: 'build/index.html', // Load a custom template (ejs by default see the FAQ for details)
	  }),
	  
	  
	  new webpack.optimize.UglifyJsPlugin({
		  minimize: true,
		  compress: { warnings: false }
      })
	],

	externals: {
	  'react/addons': true,
	  'react/lib/ExecutionEnvironment': true,
	  'react/lib/ReactContext': true
	}
}