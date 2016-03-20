module.exports = {
	entry: "./main.js",
	output: {
		path: __dirname,
		filename: "./bundle.js"
	},
	devServer: {
		inline: true
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
				loader: 'url-loader?limit=100000'
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};
