'use strict';

const cash = {
    100: 44,
    200: 25,
    500: 11,
    1000: 5,
    2000: 3,
    5000: 1,
};

function TerminalCreator(name, cashObj = {                 // cashObj - start terminal money state
    100: 0,
    200: 0,
    500: 0,
    1000: 0,
    2000: 0,
    5000: 0,
}) {
    if (!new.target) {
        return new TerminalCreator(name, cashObj);
    }

    this.name = name;
    this.cash = {};
    this.cashIn = function(cashObj) {
        for (let key in cashObj) {
            this.cash[key] = +this[key] + cashObj[key];          // collect bill quantity for each bill types
        }                                                   
    }
    this.cashIn(cashObj);                                   // initial cashIn

    this.cashOut = function(sum) {
        if (sum % 100 !== 0){
            throw new Error('Сумма должна быть кратна 100руб.');
        }
        let tempCash = {};
        let tempsum = sum;
        let cashArr = Object.keys(cashObj);                    //auxiliary array
        cashArr.sort((a, b) => a - b);
        for (let i = 0; i < cashArr.length; i++) {
            if (Math.floor(sum / this.cash[cashArr[i]]) >= 1) {
                //rcode
            }
        } 
        }
    }

let tinkoff = new TerminalCreator('Tinkoff', cash);
console.log(tinkoff);
