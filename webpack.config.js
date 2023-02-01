const BaseWebpackConfig = require("./webpack.base.config.js");

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
};
