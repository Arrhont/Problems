'use strict';
let externalResolve;
const loadWindow = new Promise((resolve, reject) => {
  externalResolve = resolve;
});

window.addEventListener('load', () => {
  externalResolve();
});

loadWindow.then(() => {
  inputBlockDraw.counter = 0;
  const input = document.querySelector('.diagramInput');
  input.addEventListener('change', inputBlockDraw);
  input.addEventListener('change', inputChangeHandle);
  const removeButton = document.querySelector('.removeButton');
  removeButton.addEventListener('click', inputDivRemove);
});

function inputBlockDraw(event) {
  inputBlockDraw.counter++;
  event.target.removeEventListener('change', inputBlockDraw);

  const inputDiv = document.createElement('div');
  inputDiv.className = 'inputDiv';
  inputDiv.setAttribute('dependance', 'input' + inputBlockDraw.counter);
  const inputContainer = document.querySelector('#inputContainer');
  inputContainer.append(inputDiv);
  const input = inputCreate(inputBlockDraw.counter);
  const removeButton = removeButtonCreate(inputBlockDraw.counter);
  inputDiv.append(input);
  inputDiv.append(removeButton);
  input.focus();
}

function inputChangeHandle(event) {
  const dependanceLabel = event.target.getAttribute('dependance');
  const isColumnExist = document.querySelector(`div[dependance="${dependanceLabel}"].diagramColumn`) !== null;
  if (isColumnExist) {
    columnRedraw(event);
  } else {
    columnAdd(event);
  }
}

function columnAdd(event) {
  const input = event.target;
  const value = input.value;
  const dependanceLabel = input.getAttribute('dependance');
  const column = columnCreate({value: 0, dependance: dependanceLabel});
  const diagramContainer = document.querySelector('.diagramContainer');
  diagramContainer.append(column);
  setTimeout(() => column.style.height = value + 'px', 0);
}

function columnRedraw(event) {
  const input = event.target;
  const newValue = input.value;
  const dependanceLabel = input.getAttribute('dependance');
  const resizingColumn = document.querySelector(`div[dependance="${dependanceLabel}"].diagramColumn`);
  resizingColumn.style.height = newValue + 'px';
}

function inputCreate(counter) {
  const input = document.createElement('input');
  input.className = 'diagramInput';
  input.setAttribute('type', 'number');
  input.setAttribute('dependance', 'input' + counter);
  input.addEventListener('change', inputBlockDraw);
  input.addEventListener('change', inputChangeHandle);
  return input;
}

function removeButtonCreate(counter) {
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.className = 'removeButton';
  removeButton.setAttribute('dependance', 'input' + counter);
  removeButton.addEventListener('click', inputDivRemove);
  removeButton.addEventListener('click', columnRemove);
  return removeButton;
}

function columnRemove(event) {
  const input = event.target;
  const dependanceLabel = input.getAttribute('dependance');
  const removingColumn = document.querySelector(`div[dependance="${dependanceLabel}"].diagramColumn`);
  removingColumn.remove();
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

function inputDivRemove(event) {
  const inputDivCollection = document.querySelectorAll('.inputDiv');
  if (inputDivCollection.length === 1) {
    return;
  }
  const inputDiv = event.target.closest('div');
  const dependanceLabel = inputDiv.getAttribute('dependance');
  const nextInputDiv = document.querySelector(`[dependance="${dependanceLabel}"] + div`);
  const thisIsLastDiv = !nextInputDiv;
  if (thisIsLastDiv) {
    return;
  }
  event.target.removeEventListener('click', inputDivRemove);
  inputDiv.remove();
}