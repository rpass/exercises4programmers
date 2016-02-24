/**
 * Created by rob on 2016/02/16.
 */
angular.module('ExercisesForProgrammersApp')
    .controller('PizzaPartyController', function () {
        var self = this;
        self.peopleCount = 0;
        self.pizzaCount = 0;
        self.slicesPerPizza = 0;
        self.slicesPerPerson = 0;
        self.leftOverCount = 0;
        self.slicesWantedPerPerson = 0;

        self.recalculate = function () {
            if(self.pizzaCount === 0){
                self.calculateSlicesPP();
            } else if(self.slicesWantedPerPerson){
                self.calculatePizzasNeeded();
            }
            self.calculateLeftoverSlices();
        };

        self.calculateLeftoverSlices = function () {
            var totalSlices = self.pizzaCount * self.slicesPerPizza;
            var slicesEaten = self.slicesPerPerson * self.peopleCount;
            var slicesWanted = self.slicesWantedPerPerson * self.peopleCount;

            if(slicesWanted === 0){
                self.leftOverCount = Number.isInteger(self.slicesPerPerson) ? totalSlices - slicesEaten : 0;
            } else {
                self.leftOverCount = Number.isInteger(self.slicesPerPerson) ? totalSlices - slicesWanted : 0;
            }
        };

        self.calculateSlicesPP = function () {
            var slicesPP = self.pizzaCount * self.slicesPerPizza / self.peopleCount;
            self.slicesPerPerson = Math.floor(slicesPP);
        };

        self.calculatePizzasNeeded = function () {
            var slicesNeeded = self.peopleCount * self.slicesWantedPerPerson;
            var pizzasNeeded = Math.ceil(slicesNeeded / self.slicesPerPizza);
            self.pizzaCount = pizzasNeeded;
        };

    });