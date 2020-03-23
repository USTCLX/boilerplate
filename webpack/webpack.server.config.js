const path = require('path');
const nodeExternals = require('webpack-node-externals');
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

process.env.BABEL_ENV = 'node';

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  target: 'node',
  entry: resolvePath('../src/server/app/index.js'),
  output: {
    filename: 'app.js',
    path: resolvePath('../dist/server'),
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
