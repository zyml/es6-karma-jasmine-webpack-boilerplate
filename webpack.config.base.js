module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(bower_components|node_modules)/,
      loaders: ['babel-loader'],
    }],
  },
  resolve: {
    extensions: [
      '',
      '.js',
    ],
  },
};
