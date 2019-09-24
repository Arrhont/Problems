'use strict';

function some(arr, func) {
    return arr.some(func);
}

function every(arr, func) {
    return arr.every(func);
}

console.log(some([2, 3, 4], isNaN));
console.log(some([2, 3, NaN], isNaN));
console.log(every([2, 3, NaN], isNaN));
console.log(every([NaN, NaN, NaN], isNaN));