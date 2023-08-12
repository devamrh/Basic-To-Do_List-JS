const newInputTask = document.getElementById("newTask");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


function addTask(){
    const taskText = newInputTask.value;

    if(taskText==="")
    {
        alert("Please enter task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;


    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click",()=>{
        taskList.removeChild(li);
    });

    li.appendChild(removeButton);
    taskList.appendChild(li);
    
    newInputTask.value = "";
}

addButton.addEventListener("click", addTask);
newInputTask.addEventListener("keypress", (event)=>
{

    if (event.key==="Enter") {
        addTask();
    }
});