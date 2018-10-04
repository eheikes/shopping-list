/* jshint node:true */
var path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  entry: [
    './node_modules/@fortawesome/fontawesome-free/css/solid.css',
    './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
    './node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot',
    './node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg',
    './node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf',
    './node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff',
    './node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2',
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './node_modules/ui-select/dist/select.css',
    './app/app.css',
    './node_modules/angular/angular.js',
    './node_modules/angular-sanitize/angular-sanitize.js',
    './node_modules/ui-select/dist/select.js',
    './node_modules/ng-group/src/ngGroup.js',
    './app/shopping-list-module.js',
    './app/shopping-list-controller.js',
    './.tmp/templates.js',
  ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  }
};
