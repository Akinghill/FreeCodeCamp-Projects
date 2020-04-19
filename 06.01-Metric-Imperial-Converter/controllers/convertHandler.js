/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.getNum = function (input) {
    var result;
    var result = input.match(/^[0-9]+(\.[0-9]+)?/);
    return result;
  };

  this.getUnit = function (input) {
    var result;
    var result = input.match(/\D+$/)[0];
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    var result;
    switch(initUnit){
      case 'gal':
        result = 'L';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'L':
        result = 'gal';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = "invalid unit"
        break;
    }
    return result;
  };

  this.spellOutUnit = function (unit) {
    var result;
    switch(unit){
      case 'gal':
        result = 'gallons';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'L':
        result = 'liters';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'km':
        result = 'kilometers';
        break;
      default:
        break;
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit){
      case 'gal':
        result = initNum * galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        result = "invalid unit"
        break;
    }
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result = returnUnit;
    
    return result;
  };

}

module.exports = ConvertHandler;
