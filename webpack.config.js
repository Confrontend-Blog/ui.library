const BaseWebpackConfig = require("./webpack.base.config.js");
const { ModuleFederationPlugin } = require("webpack").container;

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  ...BaseWebpackConfig,
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    libraryTarget: "umd",
  },
  externals: ["@emotion/react", "@emotion/styled", /react.*/, /@mui\/.*/],
  // HtmlWebpackPlugin is used to inject scripts and styles inside index.html
};
