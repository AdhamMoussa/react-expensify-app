const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


var config = {
  mode: 'development',
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
    path.resolve('./src'),
    'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    publicPath: '/dist/'
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.devtool = "source-map";
  } else {
    config.devtool = "inline-source-map";
  }
  if (config.mode === 'production') {
    config.devtool = "source-map";
  }
  return config;
};