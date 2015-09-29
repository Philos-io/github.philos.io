var wallabyWebpack = require('wallaby-webpack');
var babel = require('babel');

module.exports = function (wallaby) {

  var babelCompiler = wallaby.compilers.babel({
    babel: babel,
    // babel options
    stage: 0
  });

  var webpackPostprocessor = wallabyWebpack({
    // webpack options
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  });

  return {
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/app.js'
    ],

    tests: [
      {pattern: 'test/*.js*', load: false}
    ],

    compilers: {
      '**/*.js*': babelCompiler
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
