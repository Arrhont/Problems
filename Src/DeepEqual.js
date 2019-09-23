'use strict';

function deepEqual(oper1, oper2) {
    if (oper1 === null && oper2 === null) {
        return true;
    }

    if (oper1 === null || oper2 === null) {
        return false;
    }

    if (typeof oper1 !== 'object' && typeof oper2 !== 'object') {
        return (oper1 === oper2);
    } else {
        if (Object.keys(oper1).length !== Object.keys(oper2).length) {
            return false;
        }
        for (let key in oper1) {
            if (!deepEqual(oper1[key], oper2[key])) {
                return false;
            }
        }
        return true;
    }
}

let testedItem1 = { 1: 2, ff: { all: 'test' } };
let testedItem2 = { 1: 2, ff: { all: 'test' } };



console.log(deepEqual(testedItem1, testedItem2));