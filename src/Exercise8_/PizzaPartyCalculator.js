/**
 * Created by robert.passmore on 2016/02/23.
 */
var PizzaPartyCalculator = function () {
    this.numberOfPeople = 0;
    this.numberOfPizzas = 0;
    this.slicesPerPizza = 0;
    this.slicesPerPerson = 0;
    this.calculateSlicesPerPerson = function () {
        if(typeof this.numberOfPeople !== 'number') return 'only numbers accepted as input';
        var totalSlicesOfPizza = this.numberOfPizzas * this.slicesPerPizza;
        this.slicesPerPerson = Math.floor(totalSlicesOfPizza / this.numberOfPeople);
        this.numberOfLeftOverSlices = totalSlicesOfPizza - this.slicesPerPerson * this.numberOfPeople;
    }
};