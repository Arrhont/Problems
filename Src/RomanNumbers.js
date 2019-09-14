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

function arabicToRoman(num) {
    let arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000, 4000, 9000, 10000];
    let roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M', 'MW','W', 'Z'];
    
    if ( !isFinite(num) ) return 'Ошибка, не число.';
    if (num >= 39999) return 'Сильно много';

    let result = '';
    let i = arabic.length - 1;
    let remainNum = num;

    while (remainNum > 0) {
        if (remainNum >= arabic[i]) {
            result += roman[i];
            remainNum -= arabic[i];
        } else {
            i--;
        }
    }
    return result;
}

console.log( arabicToRoman(459) );