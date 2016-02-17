/**
 * Created by robert.passmore on 2016/02/16.
 */
angular.module('ExercisesForProgrammersApp')
    .controller('TabController', [function () {
        var self = this;
        self.tabs = ['7','8','9'];
        self.activeTab = '8';
        self.setActiveTab = function (tab) {
            self.activeTab = tab;
        };
    }]);