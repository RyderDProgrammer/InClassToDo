var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
function isValid() {
    return true;
}
function getToDoItem() {
    var x = new ToDoItem();
    return x;
}
function displayToDoItem(item) {
}
function $(id) {
    return document.getElementById(id);
}
function getInputElem(id) {
    return $(id);
}
