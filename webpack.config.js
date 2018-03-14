const webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin(
      {
        'process.env': {
          NODE_ENV: JSON.stringify('development')
        }
      }
    ),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.join(__dirname, 'src'),
        loader: ['react-hot-loader/webpack', 'ts-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    hot: true,
    historyApiFallback: true
  }
}