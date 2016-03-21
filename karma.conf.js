var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['mocha', 'chai'],
    files: [
      './test/main.js'
    ],
    preprocessors: {
      './test/main.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
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
    },
	webpackServer: {
      noInfo: true
    }
  });
};
