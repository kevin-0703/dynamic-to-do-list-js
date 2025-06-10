document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage on page load
    loadTasks();

    // Add task on button click
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = ""; // Clear input after adding
        } else {
            alert("Please enter a task.");
        }
    });

    // Add task on Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTask(taskText);
                taskInput.value = ""; // Clear input after adding
            } else {
                alert("Please enter a task.");
            }
        }
    });

    // Function to add a task to the DOM and optionally save to Local Storage
    function addTask(taskText, save = true) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Assign remove logic
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
            removeTaskFromStorage(taskText);
        };

        // Rewrap task text into a span (to preserve structure)
        const taskSpan = document.createElement('span');
        taskSpan.textContent = listItem.textContent;

        // Clear and rebuild <li> content
        listItem.textContent = '';
        listItem.appendChild(taskSpan);
        listItem.appendChild(removeButton);

        // Append task to list
        taskList.appendChild(listItem);

        // Save to localStorage if needed
        if (save) {
            const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            tasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    // Function to load tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Function to remove a task from localStorage
    function removeTaskFromStorage(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
