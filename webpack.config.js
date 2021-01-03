const path = require('path');
const myPlugin = require('./my-plugin/myPlugin');
// const listenMyPlugin = require('./listenMyPlugin');

module.exports = {
  mode: 'development',

  module: {
    rules: [{
      test:/\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      use: [
        'first.loader',
        'pitch.test.loader',
      ]
    }]
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
