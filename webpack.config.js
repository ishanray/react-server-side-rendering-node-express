
let browser = {
	entry: ['babel-polyfill', './browser/index.js'],
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
  		rules: [{
  			test: /\.js$/,
  			exclude: /node_modules/,
  			use: 'babel-loader'
  		}]
  	}
}

let server = {
	entry: ['babel-polyfill', './server/index.js'],
	target: 'node',
	output: {
    	path: __dirname,
	    filename: 'server.js',
  	},
  	module: {
  		rules: [{
  			test: /\.js$/,
  			exclude: /node_modules/,
  			use: 'babel-loader'
  		}]
  	}
}

module.exports = [browser, server]
