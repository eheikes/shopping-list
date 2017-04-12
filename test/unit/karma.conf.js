// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: '../../',
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      'node_modules/es5-shim/es5-shim.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-sanitize/angular-sanitize.js',
      'node_modules/angular-ui-select/select.js',
      'node_modules/ng-group/src/ngGroup.js',
      'app/ShoppingListModule.js',
      'app/ShoppingListController.js',
      'test/unit/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
    },
    reporters: ['dots'],
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity
  });
};
