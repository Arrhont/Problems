'use strict';

import { reversePolishCalc } from './ReversePolishCalc.js';

export function ReversePolishConverter(str) {
    const priority = {
        '(': 1,
        '+': 2,
        '-': 2,
        '*': 3,
        '/': 4,
    };

    let inputArray = str.split('');
    if (str[0] == '-') {
        inputArray.unshift('0');
    }

    let result = '';
    let operatorStack = [];

    for (let i = 0; i < inputArray.length; i++) {
        if (isFinite(inputArray[i])) {
            result = result + inputArray[i];
        }

    }
}

let test;
console.log(reversePolishCalc(test));