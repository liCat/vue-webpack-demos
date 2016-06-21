var config = require("./webpack.comm.conf");

const path = require('path'),
  webpack = require('webpack');

config.entry={
  main: path.resolve(__dirname, `../src/index.js`)
};
config.output={
  // 输出路径是 release
  path: path.resolve(__dirname, `../release`),
  publicPath: `/`,
  filename: `[name]_[hash:4].js`,
  chunkFilename: `[id].[chunkhash].js`
};

config.plugins=config.plugins.concat(
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin()
);
module.exports = config;