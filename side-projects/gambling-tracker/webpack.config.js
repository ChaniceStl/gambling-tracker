module.exports = {
  entry: "./frontend/App.js",
  output: {
    path: "./frontend/public",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      { 
        test: /\.(png|jpg)$/, 
        loader: 'url-loader?limit=8192' 
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      },
       { 
          test: /\.css$/, loader: "style-loader!css-loader" 
        }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};