const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  mode: "development",
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: true,
    port: 3002,
    index: "index.html",
    open: true,
    contentBase: path.join(__dirname, "dist"),
  },
};
