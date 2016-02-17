/**
 * Created by robert.passmore on 2016/02/17.
 */
angular.module('ExercisesForProgrammersApp')
    .controller('pageController', function () {
        var self = this;
        self.activeCalculator = 'Sharing';
        self.setActiveCalculator = function (calcName) {
            self.activeCalculator = calcName;
        }
    });