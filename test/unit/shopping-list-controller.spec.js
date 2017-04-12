describe('shopping list controller', function() {

	var controller, scope;

	var customMatchers = {
		toBeBlankItem: function(util, customEqualityTesters) {
			return {
				compare: function(actual) {
					var result = { pass: true };
					if (actual.name !== '') { result.pass = false; }
					if (actual.category !== '') { result.pass = false; }
					if (actual.quantity !== '') { result.pass = false; }
					if (actual.unit !== '') { result.pass = false; }
					if (actual.notes !== '') { result.pass = false; }
					return result;
				}
			};
		}
	};

	beforeEach(function() {
		jasmine.addMatchers(customMatchers);
	})

	beforeEach(module('shoppingList'));

	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		controller = $controller('ShoppingListController', {
			$scope: scope
		});
		// scope.$apply();
	}));

	afterEach(inject(function($log) {
		$log.assertEmpty();
	}));

	describe('initial state', function() {

		it('should set categories', function() {
			expect(scope.categories).toEqual(jasmine.any(Array));
		});

		it('should alphabetize the categories', function() {
			var compareToNext = function(category, i) {
				if (i === scope.categories.length - 1) { return -Infinity; }
				var nextCategory = scope.categories[i+1];
				return category.localeCompare(nextCategory);
			}
			var outOfOrder = function(val) { return val >= 0; };
			var comparisons = scope.categories.map(compareToNext);
			expect(comparisons.some(outOfOrder)).toBe(false);
		});

		it('should set isEditing to true', function() {
			expect(scope.isEditing).toBe(true);
		});

		it('should set the name to "Shopping [date]"', function() {
			expect(scope.name).toMatch(/^Shopping /);
		});

		it('should have no items', function() {
			expect(scope.listItems).toEqual([]);
		});

	});

	describe('at startup', function() {

		beforeEach(function() {
			scope.$apply();
		});

		it('should add a blank item', function() {
			expect(scope.listItems.length).toBe(1);
			expect(scope.listItems[0]).toBeBlankItem();
		});

	});

	describe('addItem()', function() {

		beforeEach(function() {
			scope.$apply();
		});

		it('should add a blank item to the list', function() {
			scope.addItem();
			expect(scope.listItems.length).toBe(2);
			expect(scope.listItems[1]).toBeBlankItem();
		});

	});

	describe('deleteItem()', function() {

		var $window;
		var isSecondItem = function(item) {
			return item.name === '2';
		};

		beforeEach(inject(function(_$window_) {
			$window = _$window_;
			spyOn($window, 'confirm');

			scope.$apply();
			scope.listItems = [];
			scope.listItems.push({name: '1'});
			scope.listItems.push({name: '2'});
			scope.listItems.push({name: '3'});
		}));

		describe('when confirmed', function() {

			beforeEach(function() {
				$window.confirm.and.returnValue(true);
			});

			it('should remove the specified item', function() {
				scope.removeItem(1);
				expect(scope.listItems.length).toBe(2);
				expect(scope.listItems.some(isSecondItem)).toBe(false);
			});

		});

		describe('when not confirmed', function() {

			beforeEach(function() {
				$window.confirm.and.returnValue(false);
			});

			it('should not remove anything', function() {
				scope.removeItem(1);
				expect(scope.listItems.length).toBe(3);
				expect(scope.listItems.some(isSecondItem)).toBe(true);
			});

		});

	});

	describe('setEditMode()', function() {

		it('should set isEditing to the given value', function() {
			scope.setEditMode(true);
			expect(scope.isEditing).toBe(true);
			scope.setEditMode(false);
			expect(scope.isEditing).toBe(false);
		});

		it('should coerce the value into a boolean', function() {
			scope.setEditMode('foo');
			expect(scope.isEditing).toBe(true);
		});

	});

	describe('watcher', function() {

		beforeEach(function() {
			scope.$apply();
			spyOn(scope, 'addItem');
		});

		describe('when there are no items', function() {

			beforeEach(function() {
				scope.listItems = [];
				scope.$apply();
			});

			it('should add a blank item', function() {
				expect(scope.addItem).toHaveBeenCalled();
			});

		});

		describe('when the last item is blank', function() {

			beforeEach(function() {
				scope.$apply();
			});

			it('should NOT add a blank item', function() {
				expect(scope.addItem).not.toHaveBeenCalled();
			});

		});

		describe('when the last item is NOT blank', function() {

			beforeEach(function() {
				scope.listItems[0].name = 'foo';
				scope.$apply();
			});

			it('should add a blank item', function() {
				expect(scope.addItem).toHaveBeenCalled();
			});

		});

	});

});
