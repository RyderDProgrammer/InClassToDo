var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addToList = document.querySelector("input[type=button]");
    addToList.onclick = addChore;
    loadSavedItem();
};
function addChore() {
    if (isValid()) {
        var newChore = getToDoItem();
        displayToDoItem(newChore);
        saveToDo(newChore);
    }
}
function isValid() {
    return true;
}
function getToDoItem() {
    var chore = new ToDoItem();
    var newChore = getInputElem("choreName");
    chore.choreName = newChore.value;
    var choreStart = getInputElem("startedChore");
    chore.started = choreStart.checked;
    console.log(chore);
    return chore;
}
function displayToDoItem(item) {
    var displayDiv = $("displayChores");
    var choreList = document.createElement("p");
    choreList.onclick = markAsComplete;
    if (item.started) {
        choreList.classList.add("started");
    }
    else {
        choreList.classList.add("ignored");
    }
    choreList.innerText = "You have to " + item.choreName;
    displayDiv.appendChild(choreList);
}
function markAsComplete() {
    var itemDiv = this;
    itemDiv.classList.add("completed");
}
function $(id) {
    return document.getElementById(id);
}
function getInputElem(id) {
    return $(id);
}
function saveToDo(item) {
    var itemString = JSON.stringify(item);
    localStorage.setItem(todoKey, itemString);
}
var todoKey = "todo";
function getToDo() {
    var itemString = localStorage.getItem(todoKey);
    var item = JSON.parse(itemString);
    return item;
}
function loadSavedItem() {
    var item = getToDo();
    displayToDoItem(item);
}
