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

    let choreFinish = getInputElem("finishedChore");
    chore.finished = choreFinish.checked;

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
    choreList.classList.add("todoText");

    //Creating an element to display the chore that gets added to the div element to display your chore.
    let choreStatus = "";

    choreList.onclick = markAsComplete;

    if(item.started)
    {
        choreList.classList.add("started");
        choreStatus = " have started it."
    }
    else if(item.finished)
    {
        choreStatus = " have finished it."
        choreList.classList.add("completed");
    }
    else
    {
        choreStatus = " better get a jump on it."
    }

    choreList.innerText = `You have to ${item.choreName} and you ${choreStatus}`;
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