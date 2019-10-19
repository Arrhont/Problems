'use strict';
let externalResolve;
const loadWindow = new Promise((resolve, reject) => {
  externalResolve = resolve;
});

window.addEventListener('load', () => {
  externalResolve();
});

loadWindow.then(() => {
  inputCreate.counter = 0;
  const input = document.querySelector('.diagramInput');
  input.addEventListener('change', inputCreate);
  input.focus();
  const drawButton = document.querySelector('#drawButton');
  drawButton.addEventListener('click', diagramDraw);
});

function inputCreate(event) {
  inputCreate.counter++;
  event.target.removeEventListener('change', inputCreate);
  const inputContainer = document.querySelector('#inputContainer');
  const input = document.createElement('input');
  input.className = 'diagramInput';
  input.setAttribute('type', 'number');
  input.setAttribute('dependance', 'input' + inputCreate.counter);
  input.addEventListener('change', inputCreate);
  inputContainer.appendChild(input);
  input.focus();
}

function inputValueCollect() {
  const inputCollection = document.querySelectorAll('.diagramInput');
  const inputCollectionArray = Array.from(inputCollection);
  const inputValueArray = inputCollectionArray
    .map((input) => ({value: input.value, dependance: input.getAttribute('dependance')}))
    .filter((inputObj) => inputObj.value !== '');
  return inputValueArray;
}

function columnCreate(inputObj) {
  const column = document.createElement('div');
    column.style.height = inputObj.value + 'px';
    column.className = 'diagramColumn';
    column.setAttribute('dependance', inputObj.dependance);
    column.style.display = 'inline-block';
    column.style['margin-left'] = 25 + 'px';
    column.style['margin-top'] = 3 + 'px';
    return column;
}

function diagramClear() {
  const diagram = document.querySelectorAll('.diagramColumn');
  for (let column of diagram) {
    column.remove();
  }
}

function diagramDraw() {
  diagramClear();

  const inputValueArray = inputValueCollect();
  const columnCollection = inputValueArray.map(columnCreate);
  console.log(columnCollection);

  const diagramContainer = document.querySelector('.diagramContainer');
  for (let column of columnCollection) {
    diagramContainer.append(column);
  }
}
