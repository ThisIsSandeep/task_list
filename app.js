// DEFINE UI VAR
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners() {
  // add task event
  form.addEventListener('submit', addTask);
}

// add task function
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }

  // create li element
  const li = document.createElement('li');
  // add a class to li element collection-item is a materialize css class
  li.className = 'collection-item';
  // create text node to li element and append to it
  li.appendChild(document.createTextNode(taskInput.value));

  // create new link element which is for delete item from list
  const link = document.createElement('a');
  // add a class to new link element (secondary-content is a class which float to right)
  link.className = 'delete-item secondary-content';
  // add a icon in link
  link.innerHTML = '<i class="fas fa-times"></i>';

  // append the link to li
  li.appendChild(link);

  // append the li to ul means collection
  taskList.appendChild(li);

  // clear input
  taskInput.value = '';

  // preventing default behaviour
  e.preventDefault();
}
