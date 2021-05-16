class ToDoItem
{
    choreName:string;
    started:boolean;
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

window.onload = function()
{
    let addToList = <HTMLElement>document.querySelector("input[type=button]");
    addToList.onclick = addChore;
}

function addChore()
{
    if(isValid())
    {
        let newChore = getToDoItem();
        displayToDoItem(newChore);
    }
}

//Checks the forms data to ensure it is a valid input.
function isValid():boolean
{
    return true;
}

/**
 * Get all input off the form and wrap in a todo item object
 * @returns the completed chore to get added to the list.
 */
function getToDoItem():ToDoItem
{
    let chore = new ToDoItem();

    let newChore = getInputElem("choreName");
    chore.choreName = newChore.value;

    let choreStart = getInputElem("startedChore");
    chore.started = choreStart.checked;

    console.log(chore);
    return chore;
}

/**
 * Displays the todo item somewhere on the html page.
 * IF the item is finished it will change the text of the item
 * and cross it out of the list.
 */
function displayToDoItem(item:ToDoItem):void
{
    let displayDiv = $("displayChores");

    //Gives the P elements a class to work with CSS styling
    let choreList = document.createElement("p");

    choreList.onclick = markAsComplete;

    if(item.started)
    {
        choreList.classList.add("started");
    }
    else
    {
        choreList.classList.add("ignored");
    }

    choreList.innerText = `You have to ${item.choreName}`;
    displayDiv.appendChild(choreList);
}

function markAsComplete()
{
    let itemDiv = <HTMLElement>this;
    itemDiv.classList.add("completed");
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