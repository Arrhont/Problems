"use strict";

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

function arrayToList(arr) {
  return arr.reduceRight((acc, item) => {
    let temp = { value: item, rest: acc };
    return temp;
  }, null);

  // let objArr = arr.map( (item) => ({value : item, rest : null}) );
  // for (let i = objArr.length -1; i >= 1; i--) {
  //     objArr[i - 1].rest = objArr[i];
  // }
  // return objArr[0];
}

console.log(list);
console.log(arrayToList([1, 2, 3])); // тесты

function listToArray(list) {
  let result = [];
  result.push(list.value);
  if (list.rest) {
    result.push(...listToArray(list.rest));
  }
  return result;
}

console.log(listToArray(list));

function listToArrayLoop(list) {
  let result = [];
  let temp = list;
  while (temp) {
    result.push(temp.value);
    temp = temp.rest;
  }
  return result;
}

console.log(listToArrayLoop(list));