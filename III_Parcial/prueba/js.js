document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var newTaskInput = document.getElementById('new-task');
    var taskList = document.getElementById('task-list');
    
    if (newTaskInput.value.trim() !== '') {
        var newTask = document.createElement('li');
        newTask.textContent = newTaskInput.value;
        taskList.appendChild(newTask);
        newTaskInput.value = '';
    }
});
