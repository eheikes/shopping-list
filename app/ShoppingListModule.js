/*!
 * Shopping List
 * http://github.com/eheikes/shopping-list
 * License: Apache-2.0
 */
angular.module('shoppingList', [
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  'ngSanitize',
  'ui.select',
  'ng.group'
]).config(
  ['uiSelectConfig', function(uiSelectConfig) {
    'use strict';
    uiSelectConfig.theme = 'bootstrap';
    uiSelectConfig.resetSearchInput = true;
  }]
);
