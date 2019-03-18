module.exports = {
  skipComponentsWithoutExample: true,
  components: '**/components/**/[A-Z]*.js',
  ignore: ['**/components/FeatureDiscoveryPrompt/Circles.js'],
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
