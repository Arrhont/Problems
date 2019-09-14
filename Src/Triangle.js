'use strict';

let a = '#';
for( let i = 0; i < 10; i++) {
    console.log(a);
    a = a + '#';
}

for( let b = '#'; b.length < 10; b += '#') {
    console.log(b);
}