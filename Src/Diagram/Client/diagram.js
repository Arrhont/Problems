'use strict';
let externalResolve;
const loadWindow = new Promise((resolve, reject) => {
  externalResolve = resolve;
});

window.addEventListener('load', () => {
  externalResolve();
});

loadWindow.then(() => {
  const input = document.querySelector('.diagramInput');
  input.addEventListener('change', inputCreate);
  input.focus();
  const drawButton = document.querySelector('#drawButton');
  drawButton.addEventListener('click', diagramDraw);
});

function inputCreate(event) {
  event.target.removeEventListener('change', inputCreate);
  const inputContainer = document.querySelector('#inputContainer');
  const input = document.createElement('input');
  input.className = 'diagramInput';
  input.setAttribute('type', 'number');
  input.addEventListener('change', inputCreate);
  inputContainer.appendChild(input);
  input.focus();
}

function diagramDraw() {
  const inputCollection = document.querySelectorAll('.diagramInput');
  const inputValueArray = [];
  for (let input of inputCollection) {
    inputValueArray.push(input.value);
  }
  inputValueArray.pop();

  const columnCollection = inputValueArray.map((inputValue, index) => {
    const column = document.createElement('div');
    column.height = inputValue + 'px';
    column.className = 'diagramColumn';
    column.setAttribute('columnNumber', index);
    return column;
  });
  console.log(columnCollection);

  const diagramContainer = document.createElement('div');
  diagramContainer.className = 'diagramContainer';
  if (!document.querySelector('.diagramContainer')) {
    document.body.append(diagramContainer);
  }

  for (let column of columnCollection) {
    diagramContainer.prepend(column);
  }
}
