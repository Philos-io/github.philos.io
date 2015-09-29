module.exports = function () {
  return {
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/app.js'
    ],
    tests: [
      'test/*.js'
    ]
  };
};
