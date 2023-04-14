const BaseWebpackConfig = require("./webpack.base.config.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const { dependencies } = require("./package.json");

module.exports = {
  ...BaseWebpackConfig,
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  devServer: {
    port: 5001,
  },
  externals: ["@emotion/react", "@emotion/styled", /react.*/, /@mui\/.*/],
};
