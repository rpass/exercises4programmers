/**
 * Created by robert.passmore on 2016/02/16.
 */
angular.module('ExercisesForProgrammersApp')
    .directive('exercise8', function () {
        return {
            require: 'E',
            templateUrl: 'Exercise8/Exercise8Template.html'
        };
    });