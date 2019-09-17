'use strict';

function arrayReverse(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

let test = [1, 2, 3, 4, 'ds', 6, 7, 8, 9];

console.log(arrayReverse(test));
console.log(arrayReverse(test));

function arrayReverse2(arr) {
    let middle = Math.floor(arr.length / 2);
    let temp = '';
    for (let i = 0; i <= middle; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(arrayReverse2(test));
console.log(arrayReverse2(test));

function arrayReverse3(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i >= 0; i--) {
        const element = copy[i];
        arr.splice(0, 1);
        arr.push(element);
    }

    return arr;
}

console.log(arrayReverse3(test));
console.log(arrayReverse3(test));
