module.exports = {
  publicPath: '//localhost:8082/',
  css: {
    extract: false,
  },
  configureWebpack: {
    devtool: 'none',
    output: {
      library: 'singleVue',
      libraryTarget: 'window',
    },
  },
  devServer: {
    port: 8082,
    contentBase: './',
    compress: true,
  },
};
