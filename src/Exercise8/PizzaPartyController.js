/**
 * Created by rob on 2016/02/16.
 */
angular.module('ExercisesForProgrammersApp')
    .controller('PizzaPartyController', function () {
        var self = this;
        self.peopleCount = 0;
        self.pizzaCount = 0;
        self.sliceCount = 0;
        self.slicesPerPerson;
        self.leftOverCount;
        self.calculateSlicesPP = function () {
          self.slicesPerPerson = self.pizzaCount * self.sliceCount / self.peopleCount;
        };
    });