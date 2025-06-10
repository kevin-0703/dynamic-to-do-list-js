// Run all logic after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Define the addTask function
    function addTask() {
        const taskText = taskInput.value.trim(); // Trim input

        // Step 3: Validate input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Step 4: Create list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Step 5: Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Step 6: Add event to remove task
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Step 7: Append elements
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Step 8: Clear input field
        taskInput.value = "";
    }

    // Step 9: Add event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Step 10: Invoke addTask on load (optional placeholder logic)
    // addTask(); // Not necessary to call on load unless placeholder task is intended
});
