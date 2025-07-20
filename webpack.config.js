const path = require("path");
const HTMLWebpackPlugin = require(`html-webpack-plugin`);
module.exports = {
  mode: `development`,
  entry: "./src/index.js",
  output: {
    filename: `main.js`,
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: `eval-source-map`,
  plugins: [
    new HTMLWebpackPlugin({
      template: `./src/template.html`,
    }),
  ],
  devServer: {
    watchFiles: [`./src/template.html`],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    static: `./dist`,
    hot: true,
  },
};
