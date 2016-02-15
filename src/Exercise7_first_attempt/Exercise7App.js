/**
 * Created by robert.passmore on 2016/02/10.
 */
angular.module('Exercise7App', [])
    .controller('logicController', function () {
        var self = this;
        var areaCalc = new AreaCalculator();
        self.roomWidth = 0;
        self.roomLength = 0;
        self.roomAreaInFeet2 = 0;
        self.roomAreaInMeter2 = 0;

        // A wrapper for the calcArea function of AreaCalculator
        self.calcArea = function () {
            self.roomAreaInFeet2 = areaCalc.calcArea(self.roomLength, self.roomWidth);
            return self.roomAreaInFeet2;
        };

        // A wrapper for the conversion function of AreaCalculator
        self.convertF2toM2 = function () {
            self.roomAreaInMeter2 = areaCalc.convertF2toM2(self.roomAreaInFeet2);
            return self.roomAreaInMeter2;
        };

    });