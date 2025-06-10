document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create the <li> element and set its textContent
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Set up the remove action
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append the button — we must preserve textContent, so re-wrap it
        // Step: Wrap current textContent in a span
        const taskSpan = document.createElement('span');
        taskSpan.textContent = listItem.textContent;

        // Clear listItem content (textContent erases all)
        listItem.textContent = '';

        // Add text and button
        listItem.appendChild(taskSpan);
        listItem.appendChild(removeButton);

        // Append to the list
        taskList.appendChild(listItem);

        // Clear the input
        taskInput.value = "";
    }

    // Button click adds task
    addButton.addEventListener('click', addTask);

    // Pressing Enter adds task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
