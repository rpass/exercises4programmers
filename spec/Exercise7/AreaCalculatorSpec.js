/**
 * Created by robert.passmore on 2016/02/15.
 */

describe('Exercise 7: Area Calculator Controller Test Suite', function () {
    beforeEach(angular.mock.module('ExercisesForProgrammersApp'));

    var $controller;

    beforeEach(angular.mock.inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('CalculateRoomArea function', function () {
        it('should be defined.', function () {
            var controller = $controller(
                'AreaCalculatorController',
                {}
            );
            expect(controller.RoomLength).toBeDefined();
        });

        it('should take Imperial units as input and output area of room in Imperial Units', function () {
            var controller = $controller(
                'AreaCalculatorController',
                {}
            );
            controller.InputUnitType = 'Imperial';
            controller.RoomLength = 5;
            controller.RoomWidth = 4;

            var RoomArea = controller.CalculateRoomArea('Imperial');

            expect(RoomArea).toEqual(20);
        });

        it('should take Metric units as input and output area of room in Imperial Units', function () {
            var controller = $controller(
                'AreaCalculatorController',
                {}
            );
            controller.InputUnitType = 'Metric';
            controller.RoomLength = 5;
            controller.RoomWidth = 4;

            var RoomArea = controller.CalculateRoomArea('Imperial');

            expect(RoomArea).toEqual(20 / 0.09290304);
        });

        it('should take Imperial units as input and output area of room in Metric Units', function () {
            var controller = $controller(
                'AreaCalculatorController',
                {}
            );
            controller.InputUnitType = 'Imperial';
            controller.RoomLength = 5;
            controller.RoomWidth = 4;

            var RoomArea = controller.CalculateRoomArea('Metric');

            expect(RoomArea).toEqual(20 * 0.09290304);
        });

        it('should take Metric units as input and output area of room in Metric Units', function () {
            var controller = $controller(
                'AreaCalculatorController',
                {}
            );
            controller.InputUnitType = 'Metric';
            controller.RoomLength = 5;
            controller.RoomWidth = 4;

            var RoomArea = controller.CalculateRoomArea('Metric');

            expect(RoomArea).toEqual(20);
        });
    });
});