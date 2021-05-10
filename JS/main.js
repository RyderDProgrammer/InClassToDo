var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addToList = document.querySelector("input[type=button]");
    addToList.onclick = addChore;
};
function addChore() {
    if (isValid()) {
        var newChore = getToDoItem();
        displayToDoItem(newChore);
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
    var choreFinish = getInputElem("finishedChore");
    chore.finished = choreFinish.checked;
    console.log(chore);
    return chore;
}
function displayToDoItem(item) {
    var displayDiv = $("displayChores");
    var choreList = document.createElement("p");
    choreList.classList.add("todoText");
    var choreStatus = "";
    if (item.started) {
        choreStatus = " have started it.";
    }
    else if (item.finished) {
        choreStatus = " have finished it.";
    }
    else {
        choreStatus = " better get a jump on it.";
    }
    choreList.innerText = "You have to " + item.choreName + " and you " + choreStatus;
    displayDiv.appendChild(choreList);
}
function $(id) {
    return document.getElementById(id);
}
function getInputElem(id) {
    return $(id);
}
