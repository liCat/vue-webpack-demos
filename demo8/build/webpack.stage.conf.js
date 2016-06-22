var config = require ("./webpack.comm.conf");

const path = require ('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require ('webpack');

config.entry = {
  main_b: path.resolve (__dirname, `../src/main_b.js`),
  main: path.resolve (__dirname, `../src/index.js`)
};
config.output = {
  // 输出路径是 release
  path: path.resolve (__dirname, `../stage`),
  publicPath: `https://stage-m.bolo.me/`,
  filename: `[name]_[hash:4].js`,
  chunkFilename: `[id].[chunkhash].js`
};

config.plugins = config.plugins.concat (
  new webpack.optimize.DedupePlugin (),
  // new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.CommonsChunkPlugin ({
    //  这样会把main_b和main中都用到的模块提出来。这两个文件中都import了vue,所以vue模块会在common.js中。
    name: "common"
  }),
  new HtmlWebpackPlugin ({
    filename: `index.html`, //相对于output.path,产出路径。
    template: path.resolve (__dirname, `../src/modal/project_a/index_template.html`), //html模板,绝对路径。
    inject: true,
    title: `demo1`
  })
);
module.exports = config;