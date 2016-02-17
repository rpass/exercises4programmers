/**
 * Created by robert.passmore on 2016/02/17.
 */
angular.module('ExercisesForProgrammersApp')
    .directive('evenNumber', function () {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$validators.evenNumber = function (modelValue, viewValue) {
                    //if(ctrl.$isEmpty(modelValue)){
                    //    return false;
                    //}
                    return viewValue % 2 === 0;
                }
            }
        }
    });