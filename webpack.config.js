const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: "/",
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader", exclude: /node_modules/},

      { test: /\.css$/, use: ["style-loader", "css-loader"] },

      {test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ],
  },

  resolve: {
    extensions: [".jsx", "..."],
  },

  mode: process.env.NODE_ENV === "production" ? "production" : "development",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  devServer: {
    historyApiFallback: true,
  },
};
