/**
 * Created by robert.passmore on 2016/02/15.
 */
// Get instance of angular module
angular.module('ExercisesForProgrammersApp')
    .controller('AreaCalculatorController', function () {
        var self = this;
        const f2tom2Factor = 0.09290304;
        self.InputUnitType = 'Imperial';
        self.RoomLength = 0;
        self.RoomWidth = 0;
        self.CalculateRoomArea = function (outputUnitType) {
            var area;

            if(self.InputUnitType === outputUnitType){
                area = self.RoomLength * self.RoomWidth;
            } else if(self.InputUnitType === 'Metric'){
                area = (self.RoomLength * self.RoomWidth) / f2tom2Factor;
            } else if(self.InputUnitType === 'Imperial'){
                area = (self.RoomLength * self.RoomWidth) * f2tom2Factor;
            }

            return area;
        }
    });