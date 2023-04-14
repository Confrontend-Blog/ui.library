const path = require("path");

module.exports = {
  output: {
    // path: path.join(__dirname, "/dist"),
    // filename: "bundle.js",
    // libraryTarget: "umd",
    publicPath: 'http://localhost:5001/',
  },
  devServer: {
    static: "./dist",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ["url-loader", "style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

};
