'use strict';

let rNum1 = 'XVI';
let rNum2 = 'XIX';
let rNum3 = 'XXIV';
let rNum4 = 'III';
let rNum5 = 'CXCIX';
let rNum6 = 'CX';

let romanConverter = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
};


function romanToArabic(str) {
    let romanArray = str.split('');
    let arabicArray = romanArray.map( (a) => romanConverter[a] );

    return arabicArray.reduce((acc, current, index) => {
        if ( (current >= arabicArray[index+1]) || index === arabicArray.length - 1 ) {
            acc += current;
        } else {
            acc -= current;
        }
        
        return acc;
    }, 0);
}

console.log( romanToArabic(rNum1) );
console.log( romanToArabic(rNum2) );
console.log( romanToArabic(rNum3) );
console.log( romanToArabic(rNum4) );
console.log( romanToArabic(rNum5) );
console.log( romanToArabic(rNum6) );
