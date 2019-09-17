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
//   let list = { value: null, rest: null };
//   for (let i = arr.length - 1; i >= 0; i--) {
//     list.value = arr[i];
//     if (!i) return list;
//     list.rest = list;
//   }
  let objArr = arr.map( (item) => {value : item, rest : null} );
  for (let i = objArr.length -1; i < 1; i--) {
      objArr[i - 1].rest = objArr[i];
  }
  return objArr[0];
}

console.log(list);
console.log(arrayToList([1, 2, 3])); // тесты
console.log(list.rest.rest.value); // тесты
console.log(list.rest.rest.rest); // тесты

function listToArray(list) {
  let result = [];
  result.push(list.value);
  if (list.rest) {
    listToArray(list.rest);
  }
  return result;
}

let test = arrayToList([1, 2]);
console.log(listToArray(list));
