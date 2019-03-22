import createTodoElement from './createTodoElement';
import setTheme from './applyTheme';

function init() {
  const { localStorage } = window;

  if (!localStorage.todos) {
    localStorage.setItem('todos', JSON.stringify([]));
  }

  if (!localStorage.theme) {
    localStorage.setItem('theme', '');
  }

  let { theme } = localStorage;
  setTheme(theme);

  const logo = document.querySelector('#logo');
  logo.addEventListener('click', () => {
    if (theme === 'light' || theme === '') {
      setTheme('dark');
      theme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      theme = 'light';
      localStorage.setItem('theme', 'light');
    }
  });

  const app = document.querySelector('#app');
  const todosDiv = document.createElement('div');
  todosDiv.id = 'todos';
  todosDiv.classList.add('app__todos');
  app.appendChild(todosDiv);

  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  storedTodos.forEach((todo) => {
    const element = createTodoElement(todo.title, todo.desc, todo.added, todo.id, todo.done);
    todosDiv.appendChild(element);
  });
}

export default init;
