const path = require("path");
const DtsBundleWebpack = require("dts-bundle-webpack");

const config = {
  entry: "./src/LinkedList.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/, /[a-zA-Z0-9].test.ts/]
      }
    ]
  },
  plugins: [
    new DtsBundleWebpack({
      name: "linkedlist-ts",
      main: "build/main.d.ts",
      removeSource: true,
      outputAsModuleFolder: true
    })
  ],
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: "./build"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    libraryTarget: "umd",
    globalObject: "typeof self !== 'undefined' ? self : this"
  }
};

module.exports = config;
