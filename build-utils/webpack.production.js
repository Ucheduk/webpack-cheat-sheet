const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => ({
  output: {
    filename: 'bundle.js' // [chunkhash].js for hashing js file
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
});