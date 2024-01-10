const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Form submit event
todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  addTask();
});

// Add Task function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

// Complete Task function
// function completeTask(button) {
//   const taskItem = button.parentElement;
//   taskItem.classList.toggle('completed');
// }

// Delete Task function
function deleteTask(button) {
  const taskItem = button.parentElement;
  taskList.removeChild(taskItem);
}
