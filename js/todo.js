import init from './init.js';
import handleForm from './handleTodoForm.js';

document.addEventListener('DOMContentLoaded', () => {
  init();

  const form = document.querySelector('#todo-form');

  form.addEventListener('submit', e => {
    handleForm(e);
  });

});
