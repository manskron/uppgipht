import moment from 'moment';
import isValidInput from './isValidInput';
import createTodoElement from './createTodoElement';

function handleForm(e) {
  e.preventDefault();
  const todos = document.querySelector('#todos');
  const titleInput = document.querySelector('#todo-title');
  const descInput = document.querySelector('#todo-desc');
  const title = titleInput.value;
  const desc = descInput.value;
  const id = Date.now();
  const timestamp = moment().format('MMMM Do YYYY, H:mm');

  if (!isValidInput(title) && !isValidInput(desc)) {
    titleInput.placeholder = 'Please provide a title';
    descInput.placeholder = 'Please provide a description';
  }

  if (!isValidInput(title)) {
    titleInput.placeholder = 'Please provide a title';
  }

  if (!isValidInput(desc)) {
    descInput.placeholder = 'Please provide a description';
  }

  if (isValidInput(title) && isValidInput(desc)) {
    const todoElement = createTodoElement(title, desc, timestamp, id);
    todos.appendChild(todoElement);
    titleInput.value = '';
    descInput.value = '';
    titleInput.placeholder = '';
    descInput.placeholder = '';
    titleInput.focus();

    const storedTodos = JSON.parse(window.localStorage.getItem('todos'));
    storedTodos.push({
      title, desc, done: false, added: timestamp, id,
    });
    window.localStorage.setItem('todos', JSON.stringify(storedTodos));
  }
}

export default handleForm;
