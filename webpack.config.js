// const webpack = require('webpack');

require('dotenv').config();

const { CLIENT_PORT, SERVER_PORT } = process.env;

module.exports = {
  entry: `${__dirname}/client/app/components/index.js`,
  output: {
    path: `${__dirname}/client/public`,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: `${__dirname}/client/public`,
    port: CLIENT_PORT,
    proxy: {
      '/api/**': {
        'target': `http://localhost:${SERVER_PORT}`,
      },
    },
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /(node_modules)/ },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'], exclude: /(node_modules)/ },
      { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'], exclude: /(node_modules)/ },
      { test: /\.(txt|jl)$/i, use: 'raw-loader', exclude: /(node_modules)/ },
    ],
  },
};
