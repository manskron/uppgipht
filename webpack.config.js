const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/scripts/todo.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "Uppgiphter", filename: "index.html", template: 'src/html/base.html' })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', "postcss-loader"],
      },
    ],
  },
  devServer: {
    hot: true
  }
};
