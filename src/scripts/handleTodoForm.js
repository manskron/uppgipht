import isValidInput from './isValidInput.js';
import createTodoElement from './createTodoElement.js';

function handleForm(e) {
  e.preventDefault();
  let todos = document.querySelector('#todos');
  let titleElement = document.querySelector('#todo-title');
  let descElement = document.querySelector('#todo-desc');
  let title = titleElement.value;
  let desc = descElement.value;
  let id = Date.now();
  let timestamp = new Date().toISOString();

  if (isValidInput(title, desc)) {
    let todoElement = createTodoElement(title, desc, timestamp, id);
    todos.appendChild(todoElement);
    titleElement.value = '';
    descElement.value = '';
    titleElement.focus();

    let storedTodos = JSON.parse(window.localStorage.getItem('todos'));
    storedTodos.push({ title, desc, done: false, added: timestamp, id });
    window.localStorage.setItem('todos', JSON.stringify(storedTodos));
  }
}

export default handleForm;
