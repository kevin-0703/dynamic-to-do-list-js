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

        // Create <li> and set its textContent to taskText
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn'); // <- Correct method used

        // Set up remove behavior
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Wrap original text in a span to preserve it
        const taskSpan = document.createElement('span');
        taskSpan.textContent = listItem.textContent;

        // Clear the listItem and append span + button
        listItem.textContent = '';
        listItem.appendChild(taskSpan);
        listItem.appendChild(removeButton);

        // Append to list
        taskList.appendChild(listItem);

        // Clear input
        taskInput.value = '';
    }

    // Event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
