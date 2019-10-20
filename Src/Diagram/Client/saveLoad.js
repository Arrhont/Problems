'use strict';
window.addEventListener('load', () => {
    saveButtonCreate();
    loadButtonCreate();
}); 

let id;

function diagramClear() {
    const diagram = document.querySelectorAll('.diagramColumn');
    for (let column of diagram) {
        column.remove();
    }
}

function inputValueCollect() {
    const inputCollection = document.querySelectorAll('.diagramInput');
    const inputCollectionArray = Array.from(inputCollection);
    const inputValueArray = inputCollectionArray
        .map((input) => input.value)
        .filter((value) => value !== '');
    return inputValueArray;
}

function saveButtonCreate() {
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.className = 'saveButton';
    saveButton.addEventListener('click', saveDiagram);
    const saveLoadDiv = document.createElement('div');
    saveLoadDiv.className = 'saveLoadDiv';
    document.body.append(saveLoadDiv);
    saveLoadDiv.append(saveButton);
}

function loadButtonCreate() {
    const loadButton = document.createElement('button');
    loadButton.textContent = 'Load';
    loadButton.className = 'loadButton';
    loadButton.addEventListener('click', loadDiagram);
    const saveLoadDiv = document.querySelector('.saveLoadDiv');
    saveLoadDiv.append(loadButton);
}

async function saveDiagram() {
    const diagramData = inputValueCollect();
    const response = await fetch('/save-diagram', {
         method: 'POST', 
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(diagramData) });
    const text = await response.text();
    id = text;
}

async function loadDiagram() {
   const response = await fetch(`/save-diagram?id=${id}`);
   const json = await response.json();
   console.log(json);
}