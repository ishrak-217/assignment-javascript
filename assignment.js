// https://github.com/ishrak-217/assignment-javascript

// converting kilometer to meter
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "ERROR! Please Enter a positive number. Distance can not be a negative number.";
    }
    else {
        const meter = 1000;
        var meterResult = kilometer * meter;
        return meterResult;
    }
}

