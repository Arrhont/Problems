"use strict";

for (let i = 1; i <= 8; i++) {
  let line = "";
  for (let j = 1; j <= 8; j++) {
    if ((i + j) % 2 === 0) {
      line += "#";
    } else {
      line += " ";
    }
  }
  console.log(line);
}

function chessDesk() {
  let desk = "";
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      if ((i + j) % 2 === 0) {
        desk += "#";
      } else {
        desk += " ";
      }
    }
    desk += '\n';
  }
  return desk;
}

console.log( chessDesk() );