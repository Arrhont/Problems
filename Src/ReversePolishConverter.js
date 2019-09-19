"use strict";

// import { reversePolishCalc } from "./ReversePolishCalc.js";
const { reversePolishCalc } = require("./ReversePolishCalc");

function reversePolishConverter(str) {
  const priority = {
    "0": -1,
    "(": 1,
    "+": 2,
    "-": 2,
    "*": 3,
    "/": 3
  };

  let inputArray = str.split("");
  if (str[0] == "-") {
    inputArray.unshift("0");
  }

  let result = "";
  let operatorStack = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (isFinite(inputArray[i])) {
      result += " " + inputArray[i];
      continue;
    } 
    if (inputArray[i] in priority) {
      if (operatorStack.length == 0) {
        operatorStack.push(inputArray[i]);
        continue;
      }
      if (
        priority[operatorStack[operatorStack.length - 1]] < priority[inputArray[i]]) {
        operatorStack.push(inputArray[i]);
      } else {
        result += " " + operatorStack.pop();
        operatorStack.push(inputArray[i]);
      }
      if (inputArray[i] == ")") {
        for (let j = operatorStack.length - 1; j >= 0; j--) {
          if (operatorStack[j] !== ")") {
            result += " " + operatorStack.pop();
          } else {
            operatorStack.pop();
          }
        }
      }
    } else throw new Error("Один из операторов не распознан");
  }
  result += ' ' + operatorStack.reverse().join(' ');
  return result;
}
module.exports.reversePolishConverter = reversePolishConverter;

let test = "1+2*3/2-3+2*2";
console.log(reversePolishCalc("1 2 +"));
console.log(reversePolishConverter(test));
console.log(reversePolishCalc("1 2 3 * 2 / 3 - 2 2 * + +"));
