var config = require("./webpack.comm.conf");

const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack');

module.exports = function (pro) {
  config.entry={
    vendor:[path.resolve(__dirname,'./dev-client'),path.resolve(__dirname, `../src/modal/${pro}/main_b.js`)],
    main: path.resolve(__dirname, `../src/modal/${pro}/index.js`)
  };
  config.output={
    // 输出路径是 release
    path: path.resolve(__dirname, `../src/modal/${pro}`),
    publicPath: `/`,
    filename: `[name]_[hash:4].js`,
    chunkFilename: `[id].[chunkhash].js`
  };

  config.plugins=config.plugins.concat(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name:"vendor",
      filename:"common_[hash:4].js"
    }),
    new HtmlWebpackPlugin({
      filename: `index.html`, //相对于output.path,产出路径。
      template: path.resolve(__dirname, `../src/modal/${pro}/index_template.html`), //html模板,绝对路径。
      inject: true,
      title: `demo1`
    })
  );
  return config;
};