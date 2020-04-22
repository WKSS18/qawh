module.exports = {
    entry: {
      app: './src/main.js'
    },
    externals: {
      'BMap': 'BMap',
      'BMap_Symbol_SHAPE_POINT': 'BMap_Symbol_SHAPE_POINT'
    }
}