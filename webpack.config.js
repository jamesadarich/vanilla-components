const path = require("path");
const production = process.argv.indexOf("--optimize-minimize") > -1;

module.exports = {
  entry: "./demo/app.ts",
  mode: production ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  output: {
    filename: "demo-app.js",
    path: path.resolve(__dirname, "demo-dist")
  },
  devServer: {
    compress: true,
    contentBase: "./demo",
    historyApiFallback: true,
    port: 4000,
    // public: "webappseed.localtunnel.me"
  }
};
