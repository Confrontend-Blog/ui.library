const BaseWebpackConfig = require("./webpack.base.config.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  ...BaseWebpackConfig,
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  devServer: {
    port: 5001,
  },
  // HtmlWebpackPlugin is used to inject scripts and styles inside index.html
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
