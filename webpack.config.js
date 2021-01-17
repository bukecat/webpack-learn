const path = require('path');
const myPlugin = require('./my-plugin/myPlugin');
const listenMyPlugin = require('./my-plugin/listenMyPlugin');

module.exports = {
  mode: 'development',

  module: {
    rules: [{
      test:/\.vue$/,
      loader: 'vue-loader'
    }, {
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
    }]
  },
  resolveLoader: {
    modules: [
      path.join(__dirname, './my-loader')
    ]
  },

  plugins: [
    new myPlugin(),
    new listenMyPlugin()
  ]
}
