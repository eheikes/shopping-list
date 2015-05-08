angular.module('shoppingList').controller(
  'ShoppingListController', ['$scope', '$window', function($scope, $window) {
    'use strict';

    var blankItem = {
      name: '',
      category: '',
      quantity: '',
      unit: '',
      notes: ''
    };

    $scope.categories = [
      'Baking',
      'Beverages',
      'Bread/Bakery',
      'Canned Goods',
      'Cereal/Breakfast',
      'Condiments',
      'Dairy',
      'Deli',
      'Frozen Foods',
      'Meats',
      'Non-Food',
      'Pasta/Rice',
      'Produce',
      'Snacks',
      'Spices'
    ];
    $scope.categories.sort();

    $scope.isEditing = true;

    var now = new Date();
    $scope.name = 'Shopping ' + (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();

    $scope.listItems = [];

    $scope.addItem = function() {
      $scope.listItems.push(angular.copy(blankItem));
    };

    $scope.removeItem = function(index) {
      if ($window.confirm('Delete this item?')) {
        $scope.listItems.splice(index, 1);
      }
    };

    $scope.setEditMode = function(bool) {
      $scope.isEditing = !!bool;
    };

    var isEmpty = function(item) {
      return angular.equals(item, blankItem);
    };

    $scope.$watch(function() {
      return JSON.stringify($scope.listItems);
    }, function(newVal) {
      var items = $scope.listItems;
      if (items.length === 0 || !isEmpty(items[items.length - 1])) {
        $scope.addItem();
      }
    });
  }]
);
