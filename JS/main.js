var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
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
}
function $(id) {
    return document.getElementById(id);
}
function getInputElem(id) {
    return $(id);
}
