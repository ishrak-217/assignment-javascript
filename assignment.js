// https://github.com/ishrak-217/assignment-javascript

// converting kilometer to meter
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "ERROR! Please Enter a positive number. Distance can not be a negative number.";
    } // used if else method to check whether the distance is in negative number or not
    else {
        const meter = 1000;
        var meterResult = kilometer * meter;
        return meterResult;
    }
}

// budget calculator
function budgetCalculator(clockNum, phoneNum, laptopNum) {
    if (clockNum < 0 || phoneNum < 0 || laptopNum < 0) {
        return "ERROR! Please Enter a positive number. Product can not be a negative number.";
    } // used if else method to check whether the products are in negative number or not
    else {
        var clocksCost = clockNum * 50;
        var phonesCost = phoneNum * 100;
        var laptopsCost = laptopNum * 500;

        var totalCost = clocksCost + phonesCost + laptopsCost;
        return totalCost;
    }
}

