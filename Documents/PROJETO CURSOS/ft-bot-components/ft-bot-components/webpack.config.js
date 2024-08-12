const { ModuleFederationPlugin } = require("webpack").container;
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { dependencies } = require("./package.json");
const buildDate = new Date().toLocaleDateString("pt-BR");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const htmlPuglin = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});
module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "./dist"),
    port: 6006,
    historyApiFallback: {
      index: "./public/index.html",
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json", ".scss", ".css"],
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: ["@babel/preset-typescript", "@babel/preset-react"],
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    htmlPuglin,
    new ModuleFederationPlugin({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Home.tsx",
      },

      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: dependencies["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          eager: true,
          requiredVersion: dependencies["react-router-dom"],
        },
      },
    }),
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
