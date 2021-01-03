// @file: plugins/listen4myplugin.js
class Listen4Myplugin {
  apply(compiler) {
    // 在myplugin environment 阶段被广播
    compiler.hooks.myPlugin.tap('123', (data) => {
      console.log('@Listen4Myplugin', data)
    })
  }
}

module.exports = Listen4Myplugin
