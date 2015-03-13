angular.module('shoppingList', ['ngSanitize', 'ui.select', 'ng.group'])
  .config(function(uiSelectConfig) {
    uiSelectConfig.theme = 'bootstrap';
    uiSelectConfig.resetSearchInput = true;
  });
