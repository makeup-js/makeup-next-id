/* eslint-disable no-console */

const nextId = require('../index.js');

const listEl = document.getElementById('list');
const testForm = document.getElementById('testForm');
const inputEl = document.getElementById('prefix');

testForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const listItem = document.createElement('li');
    listItem.innerText = `Item ${listEl.childNodes.length - 1}`;
    nextId(listItem, inputEl.value);
    listEl.appendChild(listItem);
});
