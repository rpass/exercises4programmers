/**
 * Created by robert.passmore on 2016/02/15.
 */

// Questions when testing Angular controllers:
//    How do we create an instance of the controller?
//    How can we get/set properties on the scope object?
//    How can we invoke functions (i.e. the sum() function) on the scope object?

describe('Exercise 7: Area Calculator Controller Test Suite', function () {
    // register an instance of the calculator app
    beforeEach(angular.mock.module('ExercisesForProgrammersApp'));

    var $controller;

    beforeEach(angular.mock.inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('CalculateRoomArea function', function () {
        it('should be defined.', function () {
            // The second parameters in the curly braces are the arguments of
            // the controller function itself.
            var controller = $controller(
                'AreaCalculatorController',
                {}
            );
            expect(controller.RoomLength).toBeDefined();
        });

        it('should take Imperial units as input and output area of room in Imperial Units', function () {
            // Given
            var controller = $controller(
                'AreaCalculatorController',
                {}
            );
            controller.InputUnitType = 'Imperial';
            controller.RoomLength = 5;
            controller.RoomWidth = 4;

            // When
            var RoomArea = controller.CalculateRoomArea('Imperial');

            // Then
            expect(RoomArea).toEqual(20);
        });

        it('should take Metric units as input and output area of room in Imperial Units', function () {
            // Given
            var controller = $controller(
                'AreaCalculatorController',
                {}
            );
            controller.InputUnitType = 'Metric';
            controller.RoomLength = 5;
            controller.RoomWidth = 4;

            // When
            var RoomArea = controller.CalculateRoomArea('Imperial');

            // Then
            expect(RoomArea).toEqual(20 / 0.09290304);
        });

        it('should take Imperial units as input and output area of room in Metric Units', function () {
            // Given
            var controller = $controller(
                'AreaCalculatorController',
                {}
            );
            controller.InputUnitType = 'Imperial';
            controller.RoomLength = 5;
            controller.RoomWidth = 4;

            // When
            var RoomArea = controller.CalculateRoomArea('Metric');

            // Then
            expect(RoomArea).toEqual(20 * 0.09290304);
        });

        it('should take Metric units as input and output area of room in Metric Units', function () {
            // Given
            var controller = $controller(
                'AreaCalculatorController',
                {}
            );
            controller.InputUnitType = 'Metric';
            controller.RoomLength = 5;
            controller.RoomWidth = 4;

            // When
            var RoomArea = controller.CalculateRoomArea('Metric');

            // Then
            expect(RoomArea).toEqual(20);
        });
    });
});