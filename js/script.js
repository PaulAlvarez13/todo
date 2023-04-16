// Step 1 Find the element
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-inkput");
var todoListContainer = document.getElementById("todo-list");

// Step 2 Write the Behaviour
function onAddTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput.value = "";
    var taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    todoListContainer.insertAdjacentHTML('beforeend', taskHTML);
}
// Step 3 Link to the Event Handler (link the behaviour)
addTaskButton.addEventListener('click', onAddTaskedClicked);
