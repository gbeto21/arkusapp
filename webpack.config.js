const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SRC_DIR = __dirname + "/src";
const DIST_DIR = __dirname + "/dist";

module.exports = {
  mode: "development",
  entry: [SRC_DIR + "/index.html"],
  output: {
    path: DIST_DIR,
    publicPath: "/",
    filename: "bundle.js",
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: "html-loader",
          options: { minimize: true },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: SRC_DIR + "/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    contentBase: DIST_DIR,
    hot: true,
    port: 9000,
  },
};
