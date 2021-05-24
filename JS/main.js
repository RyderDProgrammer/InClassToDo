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
    if (getInputElem("choreName").value.length == 0) {
        var spanGrabber_1 = document.querySelector("span");
        spanGrabber_1.innerHTML = "Cant be blank!";
        return false;
    }
    var spanGrabber = document.querySelector("span");
    spanGrabber.innerHTML = "*";
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
    var itemText = document.createElement("h3");
    itemText.innerText = item.choreName;
    var itemDiv = document.createElement("div");
    itemDiv.setAttribute("data-task-title", item.choreName);
    itemDiv.onclick = markAsComplete;
    itemDiv.classList.add("todo");
    if (item.finished) {
        itemDiv.classList.remove("todo");
        itemDiv.classList.add("completed");
    }
    itemDiv.appendChild(itemText);
    if (item.finished) {
        itemText.innerHTML = "You finished " + item.choreName;
        var completedTodo = $("completedChores");
        completedTodo.appendChild(itemDiv);
    }
    else {
        if (item.started) {
            itemText.innerHTML = "You have to " + item.choreName;
            var startTodo = $("displayChores");
            startTodo.classList.add("started");
            startTodo.appendChild(itemDiv);
        }
        else {
            itemText.innerHTML = "Better get started on " + item.choreName;
            var slackingTodo = $("displayChores");
            slackingTodo.classList.add("ignored");
            slackingTodo.appendChild(itemDiv);
        }
    }
}
function markAsComplete() {
    var itemDiv = this;
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
            upcomingChore.finished = !upcomingChore.finished;
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
