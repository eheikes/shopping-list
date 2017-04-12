/*!
 * Shopping List
 * http://github.com/eheikes/shopping-list
 * Copyright (c) 2015 Eric Heikes
 * License: Apache-2.0
 */
angular.module('shoppingList', ['ngSanitize', 'ui.select', 'ng.group']).config(
  ['uiSelectConfig', function(uiSelectConfig) {
    'use strict';
    uiSelectConfig.theme = 'bootstrap';
    uiSelectConfig.resetSearchInput = true;
  }]
);
