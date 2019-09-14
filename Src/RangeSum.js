'use strict';

function range(start, end, step = 1) {

    function allow(current) {
        let increasing = start < end;
        let decreasing = start > end;

        if (step === 0) return false;
        if ( increasing && step < 0) return false;
        if ( decreasing && step > 0) return false;

        if ( increasing && current > end) return false;
        if ( decreasing && current < end) return false;

        return true;
    }

    let result = [];
    for (let i = start; allow(i); i += step) {
        result.push(i);
    }
    return result;
}

function sum(arr) {
    return arr.reduce((acc, currentValue) => acc += currentValue, 0);
}

console.log( sum( range(1, 10, -12) ) );
console.log(range(5, 2, -1));