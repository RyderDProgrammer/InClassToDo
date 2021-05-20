var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addToList = document.querySelector("input[type=button]");
    addToList.onclick = addChore;
    var clearList = $("clearButton");
    clearList.onclick = localClear;
    loadSavedItem();
};
function addChore() {
    if (isValid()) {
        var newChore = getToDoItem();
        displayToDoItem(newChore);
        saveToDo(newChore);
    }
}
function localClear() {
    localStorage.clear();
    $("displayChores").innerHTML = "";
    $("completedChores").innerHTML = "";
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
    var itemDiv = document.createElement("div");
    itemDiv.setAttribute("data-task-title", item.choreName);
    itemDiv.onclick = markAsComplete;
    if (item.started) {
        choreList.classList.add("started");
    }
    else {
        choreList.classList.add("ignored");
    }
    choreList.innerText = "You have to " + item.choreName;
    itemDiv.appendChild(choreList);
    displayDiv.appendChild(itemDiv);
}
function markAsComplete() {
    var itemDiv = this;
    console.log("Itemdiv is:");
    console.log(itemDiv);
    if (itemDiv.classList.contains("completed")) {
        itemDiv.classList.remove("completed");
        var inProgressChores = $("displayChores");
        inProgressChores.appendChild(itemDiv);
    }
    else {
        itemDiv.classList.add("completed");
        var completedChore = $("completedChores");
        completedChore.appendChild(itemDiv);
    }
    var allTodos = getToDoItems();
    var currentTodoTitle = itemDiv.getAttribute("data-task-title");
    for (var i = 0; i < allTodos.length; i++) {
        var upcomingChore = allTodos[i];
        if (upcomingChore.choreName == currentTodoTitle) {
            upcomingChore.started = !upcomingChore.started;
        }
    }
    savedAllTodos(allTodos);
}
function savedAllTodos(allTodos) {
    localStorage.setItem(todoKey, "");
    var allItemsString = JSON.stringify(allTodos);
    localStorage.setItem(todoKey, allItemsString);
}
function $(id) {
    return document.getElementById(id);
}
function getInputElem(id) {
    return $(id);
}
function saveToDo(item) {
    var currentItems = getToDoItems();
    if (currentItems == null) {
        currentItems = new Array();
    }
    currentItems.push(item);
    var currentItemsString = JSON.stringify(currentItems);
    localStorage.setItem(todoKey, currentItemsString);
}
var todoKey = "todo";
function getToDoItems() {
    var itemString = localStorage.getItem(todoKey);
    var item = JSON.parse(itemString);
    return item;
}
function loadSavedItem() {
    var itemArray = getToDoItems();
    for (var i = 0; i < itemArray.length; i++) {
        displayToDoItem(itemArray[i]);
    }
}
