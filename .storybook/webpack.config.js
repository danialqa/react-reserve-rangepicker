// Flow
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [
      ".scss",
      ".js",
      ".json",
      ".png",
      ".gif",
      ".jpg",
      ".svg",
      ".css",
      ".jsx"
    ],
    alias: {
      // a list of module name aliases
      moment: "antd-jalali-moment"
    }
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "",
    filename: "reactReserveRangepicker.js",
    libraryTarget: "umd"
  }
};
