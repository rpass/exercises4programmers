/**
 * Created by robert.passmore on 2016/02/23.
 */
describe('PizzaPartyCalculator', function () {
    var pizzaPartyCalculator;
    beforeEach(function () {
        pizzaPartyCalculator = new PizzaPartyCalculator();
    });

    it('should calculate the number of slices per person and the number of left over slices correctly', function () {
        pizzaPartyCalculator.numberOfPeople = 5;
        pizzaPartyCalculator.numberOfPizzas = 3;
        pizzaPartyCalculator.slicesPerPizza = 6;
        pizzaPartyCalculator.calculateSlicesPerPerson();
        expect(pizzaPartyCalculator.slicesPerPerson).toEqual(3);
        expect(pizzaPartyCalculator.numberOfLeftOverSlices).toEqual(3);
    });

    it('should not accept non-numbers as input', function () {
        pizzaPartyCalculator.numberOfPeople = 'greg';
        pizzaPartyCalculator.numberOfPizzas = 3;
        pizzaPartyCalculator.slicesPerPizza = 6;
        expect(pizzaPartyCalculator.calculateSlicesPerPerson()).toEqual('only numbers accepted as input');
    });
});