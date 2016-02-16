/**
 * Created by robert.passmore on 2016/02/16.
 */
angular.module('ExercisesForProgrammersApp')
    .directive('exercise7', function () {
        return {
            require: 'E',
            templateUrl: 'Exercise7/Exercise7Template.html'
        };
    });