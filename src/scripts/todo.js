import init from './init.js';
import handleForm from './handleTodoForm.js';
import css from '../style/todo.css'

document.addEventListener('DOMContentLoaded', () => {
  init();

  const form = document.querySelector('#todo-form');

  form.addEventListener('submit', e => {
    handleForm(e);
  });

});
