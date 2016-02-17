/**
 * Created by rob on 2016/02/16.
 */
// Questions when testing Angular controllers:
//    How do we create an instance of the controller?
//    How can we get/set properties on the scope object?
//    How can we invoke functions (i.e. the sum() function) on the scope object?

describe('Exercise 8: Pizza Party', function () {
    // register an instance of the calculator app
    beforeEach(angular.mock.module('ExercisesForProgrammersApp'));

    var $controller;

    beforeEach(angular.mock.inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('controller: Pizza Party Controller', function () {
        describe('function: CalculateSlicesPP', function () {
            it('should divide total number of slices by number of people, rounding down to the nearest slice', function () {
                // Given
                var controller = $controller(
                    'PizzaPartyController',
                    {}
                );
                controller.peopleCount = 3;
                controller.pizzaCount = 2;
                controller.slicesPerPizza = 6;

                // When
                controller.calculateSlicesPP();

                // Then
                expect(controller.slicesPerPerson).toEqual(4);
            });

            it('should return 0 slices per person when there are less slices available then there are people', function () {
                // Given
                var controller = $controller(
                    'PizzaPartyController',
                    {}
                );
                controller.peopleCount = 5;
                controller.pizzaCount = 2;
                controller.slicesPerPizza = 2;

                // When
                controller.calculateSlicesPP();
                var result = controller.slicesPerPerson;

                // Then
                expect(result).toEqual(0);
            });
        });

        describe('function: Calculate Left Over Slices', function () {
            it('should return 0 if the total number of slices is divisible by the number of people', function () {
                // Given
               var controller = $controller('PizzaPartyController', {});
                controller.peopleCount = 4;
                controller.pizzaCount = 2;
                controller.slicesPerPizza = 2;

                // When
                controller.slicesPerPerson = controller.calculateSlicesPP();
                controller.calculateLeftoverSlices();

                // Then
                expect(controller.leftOverCount).toEqual(0);
            });

            it('should return a non-zero number of leftover slices if the total number of slices is not divisible by the number of people', function () {
                // Given
               var controller = $controller('PizzaPartyController', {});
                controller.peopleCount = 5;
                controller.pizzaCount = 3;
                controller.slicesPerPizza = 2;

                // When
                controller.calculateSlicesPP();
                controller.calculateLeftoverSlices();

                // Then
                expect(controller.leftOverCount).toBeGreaterThan(0);
            });

            it('should return the correct number of leftover slices if the total number of slices is not divisible by the number of people', function () {
                // Given
               var controller = $controller('PizzaPartyController', {});
                controller.peopleCount = 5;
                controller.pizzaCount = 3;
                controller.slicesPerPizza = 2;

                // When
                controller.calculateSlicesPP();
                controller.calculateLeftoverSlices();

                // Then
                expect(controller.leftOverCount).toEqual(1);
            });

            it('should return the correct number of leftover slices if the total number of slices is less than the number of people', function () {
                // Given
                var controller = $controller('PizzaPartyController', {});
                controller.peopleCount = 5;
                controller.pizzaCount = 2;
                controller.slicesPerPizza = 2;

                // When
                controller.calculateSlicesPP();
                controller.calculateLeftoverSlices();

                // Then
                expect(controller.leftOverCount).toEqual(4);
            });
        });
    });
});