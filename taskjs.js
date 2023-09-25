const taskInput = document.getElementById("tname");
const deadlineInput = document.getElementById("duedate");
const addTaskButton = document.getElementById("addtask");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", () => {
    const task = taskInput.value;
    //const priority = priorityInput.value;
    const deadline = deadlineInput.value;
    if (task.trim() === "" || deadline === "") {
        alert("Please select an upcoming date for the deadline.")
        return;
    }
    const selectedDate = new Date(deadline);
    const currentDate = new Date();
    if (selectedDate <= currentDate) {
        alert("Please select an upcoming date for the deadline.");
        return;
    }
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    taskItem.innerHTML = `
    <p>${task}</p>        
    <p>Deadline: ${deadline}</p>
    <button class="mark-done">Completed</button>
  `;
    dolist.appendChild(taskItem);
    taskInput.value = "";
    deadlineInput.value = "";
});
function clear(){
    document.getElementById("dolist").innerHTML="";
}