module.exports = {
  skipComponentsWithoutExample: true,
  components: 'src/components/**/[A-Z]*.js',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  }
}
