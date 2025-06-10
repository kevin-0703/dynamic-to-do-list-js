// Run the script after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create the <li> element
        const listItem = document.createElement('li');

        // Create a text node for the task text
        const textNode = document.createTextNode(taskText);

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign the remove function to the button
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append the task text and the remove button to the list item
        listItem.appendChild(textNode);
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for Enter key press in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
