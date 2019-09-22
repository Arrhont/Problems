"use strict";

const cash = {                                     // Let operate money in a form of object full of bills (cashObj)
  100: 0,
  200: 25,
  500: 11,
  1000: 5,
  2000: 3,
  5000: 1
};

function TerminalCreator(
  name,
  cashObj = {                                      // cashObj - start terminal money state
    100: 0,
    200: 0,
    500: 0,
    1000: 0,
    2000: 0,
    5000: 0
  }
) {
  if (!new.target) {                               // Strict constructor launch 
    return new TerminalCreator(name, cashObj);
  }

  this.name = name;                                //
  this.cash = {};                                  // Initialisation
  this.cashOut = {};                               // 

  function terminalMoneyCount() {                  // Function, that counts amount of money in terminal
    let money = 0;
    for (let key in this.cash) {
      money += +key * this.cash[key];
    }
    return money;
  }

  function billTypeSorter() {                      // Creates an array of bill types and sort it
    this.billArray = Object.keys(this.cash);
    this.billArray.sort((a, b) => b - a);
  }

  this.cashIn = function(cashObj) {
    for (let key in cashObj) {
      this.cash[key] = (typeof this.cash[key] === 'undefined') ?  cashObj[key] : this.cash[key] + cashObj[key];  // Put bills into terminal (in form of cashObj)
    }
    this.money = terminalMoneyCount.call(this);
    billTypeSorter.call(this);
  };

  this.cashIn(cashObj);                            // initial cashIn

  this.cashOutput = function cashOutput(sum) {
    let tempSum = sum;
    let i = 0;                                     // Counter for moving through BillArray

    if (sum > this.money) {
      throw new Error("Недостаточно средств в банкомате");
    }
    this.cashOut = {};
    for (let key in this.cash) {
      this.cashOut[key] = 0;  
    }                        // Emptying last cashOut

    while (tempSum !== 0) {
      if (tempSum >= this.billArray[i] && this.cash[this.billArray[i]] > 0) {
        this.cash[this.billArray[i]] -= 1;         // Take a bill from terminal
        this.cashOut[this.billArray[i]] += 1;      // Put a bill into cashOut
        tempSum -= this.billArray[i];              // How much money still needed to be cashed out
      } else {
        i++;                                       // Move to smaller bill type
        if (i > this.billArray.length - 1) {       // Case of smth went wrong (sum is not multiple the smallest bill type
          for (let key in this.cashOut) {          // or there is lack of such bills)
            this.cash[key] += this.cashOut[key];   // Returning cash into terminal from cashOut
            this.cashOut[key] = 0;
          }
          if (this.billArray.length === 0) { 
            billTypeSorter.call(this);                     // Recollecting money state (maybe -= sum?)  
            throw new Error('Невозможно выдать купюры');
          }
          this.billArray.shift();
          return cashOutput.call(this, sum);
        }
      }
    }
    this.money = terminalMoneyCount.call(this); 
    billTypeSorter.call(this);                     // Recollecting money state (maybe -= sum?)
    return this.cashOut;                           // Return money in CashObj form
  }
}

let tinkoff = new TerminalCreator("Tinkoff", cash);
console.log(tinkoff);
console.log(tinkoff.cashOutput(26400));
console.log(tinkoff);