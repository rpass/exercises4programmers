/**
 * Created by robert.passmore on 2016/02/10.
 */
var AreaCalculator;

AreaCalculator = function(){
    const conversionFactor = 0.09290304;

    var IsNumeric = function(input)
    {
        return (input - 0) == input && (''+input).trim().length > 0;
    };

    this.getConversionFactor = function () {
        return conversionFactor;
    };

    this.convertF2toM2 = function (F2Area) {
        return F2Area * conversionFactor;
    };

    this.convertM2toF2 = function(M2Area){
        return M2Area / conversionFactor;
    };

    this.calcArea = function(length, width){
        if(IsNumeric(length) && IsNumeric(width)){
            return length * width;
        } else {
            return 0;
        }
    };
};