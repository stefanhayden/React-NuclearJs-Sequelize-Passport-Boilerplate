import webpack from 'webpack';
import path from 'path';

let rootPath = path.resolve(__dirname, '../');
let config;

config = {
	entry: {
		app: [
			"webpack-hot-middleware/client",
			"./client/app/Router.jsx",
		]
	},
	output: {
		path: path.join(rootPath, "/public/js/"),
		publicPath: "/js/",
		filename: "build.js"
	},
	module: {
		loaders: [
			{ 
				test: /\.jsx?$/, 
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				//loaders: ['react-hot','babel'],
				query: {
        	presets: ['react', 'es2015'],
					plugins: ['syntax-object-rest-spread','transform-object-rest-spread']
				}
			},
			{ 
				test: /\.scss$/, 
				loaders: ["style","css","sass"] 
			}
		]
	},
	resolve: {
		alias: {
			app: path.join(rootPath, '/client/app'),
		},
		extensions: [
			'', '.js', '.jsx'
		]
	},
	plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
	]
};

export default config;
