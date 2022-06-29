const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const paths = require('./config/paths');
const parsedArg = require("yargs").argv;

// output dir
const BUILD_PATH = paths.buildPath;

const { mode, devserverPort } = parsedArg;
const isDev = mode !== 'production';

const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT ?? 10 * 1024 // 10kb
);

const config = {
  stats: 'errors-warnings',
  mode: isDev ? 'development' : 'production',
  entry: {
    index: paths.appIndex
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: paths.appHtml,
    }),
  ],
  devtool: isDev ? 'inline-source-map' : false,
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: ["/\.test.[jt]s?$/", path.resolve(paths.appDirectory, './node_modules')],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: imageInlineSizeLimit
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "src": paths.appPath,
    }
  },
}
module.exports = config;