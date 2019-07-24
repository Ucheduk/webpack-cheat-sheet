const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge(
    {
      mode,
      output: {
        filename: "bundle.js"
      },
      module: {
        rules: [
          {
            test: /\.jpe?g$/,
            use: [
              { 
                loader: 'url-loader', 
                options: {
                  limit: 5000
                } 
              }
            ]
          }
        ]
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    },
    modeConfig(mode)
  );
};