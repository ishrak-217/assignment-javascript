// https://github.com/ishrak-217/assignment-javascript

// converting kilometer to meter
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "ERROR! Please Enter a valid (positive) number. Distance can not be a negative number.";
    } // to check whether the distance is in negative number or not
    else {
        const meter = 1000;
        var meterResult = kilometer * meter;
        return meterResult;
    }
}

// budget calculator
function budgetCalculator(clockNum, phoneNum, laptopNum) {
    if (clockNum < 0 || phoneNum < 0 || laptopNum < 0) {
        return "ERROR! Please Enter a valid (positive) number. Product can not be a negative number.";
    } // to check whether the products are in negative number or not
    else {
        var clocksCost = clockNum * 50;
        var phonesCost = phoneNum * 100;
        var laptopsCost = laptopNum * 500;

        var totalCost = clocksCost + phonesCost + laptopsCost;
        return totalCost;
    }
}

// hotel cost counter
function hotelCost(dayStayed) {
    var totalCost = 0;
    if (dayStayed < 0) {
        return "ERROR! Please Enter a valid (positive) number. Stayed days can not be a negative number.";
    } // to check stayed days are negative or not
    else {
        if (dayStayed <= 10) {
            totalCost = dayStayed * 100;
            return totalCost;
        }
        else if (dayStayed <= 20) {
            var remainingDays = dayStayed - 10;
            var firstPart = 10 * 100;
            var secondPart = remainingDays * 80;

            totalCost = firstPart + secondPart;
            return totalCost;
        }
        else {
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remainingDays = dayStayed - 20;
            var restPart = remainingDays * 50;

            totalCost = firstPart + secondPart + restPart;
            return totalCost;
        }
    }
}

// finding largest name
function megaFriend(names) {
    var max = 0;
    var largestName = names[0];
    for (var i = 0; i < names.length; i++) {
        if (names[i] == ' ') {
            return "ERROR! Names can not be white spaces. Please Enter names.";
        } // to check array has white space or not
        else if (names[i].length > max) {
            max = names[i].length;
            largestName = names[i];
        }
    }
    return largestName;
}