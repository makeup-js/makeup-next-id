var nextId = require('../index.js');

var listEl = document.getElementById('list');
var testForm = document.getElementById('testForm');
var inputEl = document.getElementById('prefix');

testForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var listItem = document.createElement('li');
    listItem.innerText = 'Item ' + (listEl.childNodes.length - 1);
    nextId(listItem, inputEl.value);
    listEl.appendChild(listItem);
});
