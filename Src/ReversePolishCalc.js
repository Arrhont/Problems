"use strict";

function reversePolishCalc(str) {
  const notation = str.split(" ");
  let stack = [];
  let i = 0;
  let tmpOperand1, tmpOperand2;

  function calculate(operand1, operand2, operator) {
    switch (operator) {
      case "+":
        return operand2 + operand1;

      case "-":
        return operand2 - operand1;

      case "*":
        return operand2 * operand1;

      case "/":
        return operand2 / operand1;

      default:
        throw new Error("Оператор не распознан");
    }
  }

  while (notation[i]) {
    if (isFinite(notation[i])) {
      stack.push(notation[i]);
      i++;
    } else {
      if (stack.length < 2) throw new Error("Неправильный формат нотации");
      tmpOperand1 = +stack.pop();
      tmpOperand2 = +stack.pop();
      stack.push(calculate(tmpOperand1, tmpOperand2, notation[i]));
      i++;
    }
  }
  return stack;
}

module.exports.reversePolishCalc = reversePolishCalc;

console.log(reversePolishCalc("5 3 - 8 * "));