// Ensure script runs only after DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create the <li> and set its textContent to taskText
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Set up onclick to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append remove button AFTER setting textContent
        listItem.appendChild(removeButton);

        // Add the listItem to the taskList
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Add button click event
    addButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
