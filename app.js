document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const completedTasksTable = document.getElementById('completed-tasks').getElementsByTagName('tbody')[0];

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function (event) {
        if (event.target.classList.contains('complete')) {
            const taskItem = event.target.parentElement;
            taskItem.classList.toggle('completed');
            if (taskItem.classList.contains('completed')) {
                moveCompletedTaskToTable(taskItem);
            } else {
                moveTaskBackToTaskList(taskItem);
            }
        } else if (event.target.classList.contains('delete')) {
            event.target.parentElement.parentElement.remove();
        }
    });

    function addTask(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${text}</span>
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);
    }

    function moveCompletedTaskToTable(taskItem) {
        const taskText = taskItem.querySelector('span').textContent;
        const newRow = completedTasksTable.insertRow();
        newRow.innerHTML = `
            <td>${taskText}</td>`;
        taskItem.remove();
    }

    function moveTaskBackToTaskList(taskItem) {
        taskItem.classList.remove('completed');
        taskList.appendChild(taskItem);
    }
});
