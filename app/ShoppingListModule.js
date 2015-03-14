angular.module('shoppingList', ['ngSanitize', 'ui.select', 'ng.group'])
  .config(function(uiSelectConfig) {
    'use strict';
    uiSelectConfig.theme = 'bootstrap';
    uiSelectConfig.resetSearchInput = true;
  });
