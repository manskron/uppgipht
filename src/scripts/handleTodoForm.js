import isValidInput from './isValidInput.js';
import createTodoElement from './createTodoElement.js';
import moment from 'moment';

function handleForm(e) {
  e.preventDefault();
  let todos = document.querySelector('#todos');
  let titleInput = document.querySelector('#todo-title');
  let descInput = document.querySelector('#todo-desc');
  let title = titleInput.value;
  let desc = descInput.value;
  let id = Date.now();
  let timestamp = moment().format('MMMM Do YYYY, H:mm');

  if(!isValidInput(title) && !isValidInput(desc)){
    titleInput.placeholder = 'Please provide a title'
    descInput.placeholder = 'Please provide a description'
  }

  if(!isValidInput(title)){
    titleInput.placeholder = 'Please provide a title'
  }

  if(!isValidInput(desc)){
    descInput.placeholder = 'Please provide a description'
  }

  if (isValidInput(title) && isValidInput(desc)) {
    let todoElement = createTodoElement(title, desc, timestamp, id);
    todos.appendChild(todoElement);
    titleInput.value = '';
    descInput.value = '';
    titleInput.placeholder = ''
    descInput.placeholder = ''
    titleInput.focus();

    let storedTodos = JSON.parse(window.localStorage.getItem('todos'));
    storedTodos.push({ title, desc, done: false, added: timestamp, id });
    window.localStorage.setItem('todos', JSON.stringify(storedTodos));
  }
}

export default handleForm;
