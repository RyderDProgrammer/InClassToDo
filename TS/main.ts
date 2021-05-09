class ToDoItem
{
    choreName:string;
    started:boolean;
    finished:boolean;

    /* constructor(newChoreName:string)
    // {
    //     this.choreName = newChoreName;
     }*/
}

//Fake chore to test the ToDoItem class
/*let item = new ToDoItem();
item.choreName = "Test chore";
item.started = true;    
item.finished = false;  */

//Checks the forms data to ensure it is a valid input.
function isValid():boolean
{
    return true;
}

/**
 * Get all input off the form and wrap in a todo item object
 * @returns temporary X to ignore the line under the return
 * type.
 */
function getToDoItem():ToDoItem
{
    let chore = new ToDoItem();

    let newChore = getInputElem("choreName");
    chore.choreName = newChore.value;

    let choreStart = getInputElem("startedChore");
    chore.started = choreStart.checked;

    let choreFinish = getInputElem("finishedChore");
    chore.finished = choreFinish.checked;
    
    console.log(chore);
    return chore;
}

/**
 * Displays the todo item somewhere on the html page.
 */
function displayToDoItem(item:ToDoItem):void
{

}


function $(id:string)
{
    return document.getElementById(id);
}
function getInputElem(id:string):HTMLInputElement
{
    return <HTMLInputElement>$(id);
}
//Allow user to mark a todo item as completed.