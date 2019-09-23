'use strict';

let arrays = [[1, 2, 3], [4, 5], [6]];

let result = arrays.reduce((acc, current) => acc.concat(current), []);
console.log(result);