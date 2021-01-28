const path = require('path');
const myPlugin = require('./my-plugin/myPlugin');
const listenMyPlugin = require('./my-plugin/listenMyPlugin');

module.exports = {
  mode: 'development',

  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test:/\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'first.loader',
            options: {
              a: '123'
            }
          },
          {
            loader: 'pitch.test.loader'
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },
  resolveLoader: {
    modules: [
      path.join(__dirname, './my-loader')
    ]
  },

  plugins: [
    // new myPlugin(),
    // new listenMyPlugin()
  ]
}
