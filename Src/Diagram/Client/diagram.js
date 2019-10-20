'use strict';
let externalResolve;
const loadWindow = new Promise((resolve, reject) => {
  externalResolve = resolve;
});

window.addEventListener('load', () => {
  externalResolve();
});

loadWindow.then(() => {
  imputBlockDraw.counter = 0;
  const input = document.querySelector('.diagramInput');
  input.addEventListener('change', imputBlockDraw);
  input.focus();
  const drawButton = document.querySelector('#drawButton');
  drawButton.addEventListener('click', diagramDraw);
  const removeButton = document.querySelector('.removeButton');
  removeButton.addEventListener('click', inputDivRemove);
});

function inputCreate(counter) {
  const input = document.createElement('input');
  input.className = 'diagramInput';
  input.setAttribute('type', 'number');
  input.setAttribute('dependance', 'input' + counter);
  input.addEventListener('change', imputBlockDraw);
  return input;
}

function removeButtonCreate(counter) {
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.className = 'removeButton';
  removeButton.setAttribute('dependance', 'input' + counter);
  removeButton.addEventListener('click', inputDivRemove);
  return removeButton;
}

function inputDivRemove(event) {
  const inputDivCollection = document.querySelectorAll('.inputDiv');
  if (inputDivCollection.length == 1) {
    return;
  }
  const inputDiv = event.target.closest('div');
  const dependanceLabel = inputDiv.getAttribute('dependance');
  const nextInputDiv = document.querySelector(`[dependance="${dependanceLabel}"] + div`);
  if (!nextInputDiv) {
    return;
  }
  event.target.removeEventListener('click', inputDivRemove);
  inputDiv.remove();
}

function imputBlockDraw(event) {
  imputBlockDraw.counter++;
  event.target.removeEventListener('change', imputBlockDraw);

  const inputDiv = document.createElement('div');
  inputDiv.className = 'inputDiv';
  inputDiv.setAttribute('dependance', 'input' + imputBlockDraw.counter);
  
  const inputContainer = document.querySelector('#inputContainer');
  inputContainer.append(inputDiv);
  const input = inputCreate(imputBlockDraw.counter);
  const removeButton = removeButtonCreate(imputBlockDraw.counter);
  inputDiv.append(input);
  inputDiv.append(removeButton);
  input.focus();
}

function inputValueCollect() {
  // returns an array of objects {value, label} to create dependance between inputs and columns respectively 
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
