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
      'Asian',
      'Baking',
      'Beer',
      'Beverages',
      'Box Dinners',
      'Bread/Bakery',
      'Bulk',
      'Canned Goods',
      'Cereal/Breakfast',
      'Cheese',
      'Coffee/Tea',
      'Condiments',
      'Dairy/Milk/Eggs',
      'Deli',
      'Food Storage',
      'Frozen Foods',
      'Meats',
      'Mexican',
      'Non-Food',
      'Pasta',
      'Peanut Butter & Jelly',
      'Pet',
      'Produce',
      'Rice/Beans',
      'Snacks',
      'Soup',
      'Spices',
      'Wine',
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
