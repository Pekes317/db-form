var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      // .ts .tsx
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },

      // css
      {
        test: /^(?!.*?\.module).*\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }, 'sass-loader'],
      },

      // Static Assets
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};