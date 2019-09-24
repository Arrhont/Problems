'use strict';

// import { ancestry } from "./AverageMotherAndSon.js";
const { ancestry } = require("./AverageMotherAndSon");

function centuryDeterminant(person) {
    let century = Math.floor(person.died / 100 + 1) + ' Century';
    return century;
}

let agesByCentury = ancestry.reduce((acc, item) => {
    if (!acc[centuryDeterminant(item)]) {
        acc[centuryDeterminant(item)] = [item.died - item.born];
    } else {
        acc[centuryDeterminant(item)].push(item.died - item.born);
    }
    return acc;
}, {});

function averageYearByCentury(obj) {
    let keys = Object.keys(obj);
    keys.sort();
    for (let i = 0; i < keys.length; i++) {
        console.log(keys[i] + ': ' + obj[keys[i]].reduce((acc, item) => acc + item, 0) / obj[keys[i]].length);
    }
}

averageYearByCentury(agesByCentury);