import init from './init';
import handleForm from './handleTodoForm';
import css from '../style/todo.css';

document.addEventListener('DOMContentLoaded', () => {
  init();

  const form = document.querySelector('#todo-form');

  form.addEventListener('submit', (e) => {
    handleForm(e);
  });
});
