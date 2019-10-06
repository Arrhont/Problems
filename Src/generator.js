"use strict";

function* pseudoRandom(seed) {
  let result = seed;
  for (let i = 0; i < 10; i++) {
    result = (result * 16807) % 2147483647;
    yield result;
  }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073

let generator2 = pseudoRandom(1);

for (let pseudo of generator2) {
  console.log(pseudo);
}
