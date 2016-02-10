/**
 * Created by robert.passmore on 2016/02/10.
 */
describe('Exercise 7 Test Suite', function () {
    var areaCalc;
    beforeEach(function () {
       areaCalc = new AreaCalculator();
    });

    it('should have a constructor for the AreaCalculator function', function () {
        expect(AreaCalculator).toBeDefined();
    });

    it('should have a method called calcArea.', function () {
        expect(areaCalc.calcArea).toBeDefined();
    });

    describe('Conversion factor Test Suite', function () {
        //it('should be a constant', function () {
        //    expect(areaCalc.getConversionFactor()).to
        //})

        it('should have a getter method for the constant conversion factor', function () {
            expect(areaCalc.getConversionFactor).toBeDefined();
        });

        it('should have a constant conversion factor of 0.09290304', function () {
            expect(areaCalc.getConversionFactor()).toBe(0.09290304);
        });
    });

    describe('calcArea Test Suite', function () {
        var area;
        beforeEach(function () {
            area = 0;
        });

        it('should take 2 integer parameters and return their product.', function () {
            area = areaCalc.calcArea(10, 12);
            expect(area).toEqual(120);
        });

    });

    // Should we be testing private functions? If so, how do we test private functions?
    // http://philipwalton.com/articles/how-to-unit-test-private-functions-in-javascript/
    describe('feet squared area conversion to metre squared Test Suite', function () {
        it('should have a method for converting feet squared to metre squared', function () {
            expect(areaCalc.convertF2toM2).toBeDefined();
        });

        it('should take a single number argument and return the metre-squared equivalent', function () {
            var F2Area = 360;
            var M2Area = F2Area * 0.09290304;
            expect(areaCalc.convertF2toM2(F2Area)).toEqual(M2Area);
        });
    });

    describe('Metre squared area conversion to feet squared Test Suite', function () {
        it('should have a method for converting feet squared to metre squared', function () {
            expect(areaCalc.convertM2toF2).toBeDefined();
        });

        it('should take a single number argument and return the metre-squared equivalent', function () {
            var F2Area = 360;
            var M2Area = F2Area * 0.09290304;
            expect(areaCalc.convertM2toF2(M2Area)).toEqual(F2Area);
        });

    });
});