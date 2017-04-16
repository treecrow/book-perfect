let path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  DashboardPlugin = require('webpack-dashboard/plugin');
let ROOT_PATH = path.resolve(__dirname),
  SRC_PATH = path.resolve(ROOT_PATH, 'src'),
  DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  entry: {
    app: path.resolve(SRC_PATH, 'app.js')
  },
  output: {
    path: DIST_PATH,
    filename: "[name].js"
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      src: SRC_PATH
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: 1025,
    hot: true
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_PATH, 'index.html'),
      filename: 'index.html',
      chunks: ['app'],
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  ]
};
