/* eslint-disable no-console */

const nextId = require('../index.js');

const listEl = document.getElementById('list');
const testForm = document.getElementById('testForm');
const inputEl = document.getElementById('prefix');

testForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const listItem = document.createElement('li');
    const id = nextId(listItem, inputEl.value);
    listItem.innerText = `Item ${listEl.childNodes.length} (${id})`;
    console.log(`id: ${id}`);
    listEl.appendChild(listItem);
});
