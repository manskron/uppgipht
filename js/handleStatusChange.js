function handleStatusChange(e) {
  let todoEl = e.target.parentNode;
  let deleteButton = e.target.nextSibling;
  let id = todoEl.id;

  let currentTodos = JSON.parse(window.localStorage.getItem('todos'));

  let newTodos = [];

  currentTodos.forEach(todo => {
    if (String(todo.id) === id) {
      todo.done = !todo.done;
      todo.done === true ? e.target.textContent = 'Undo' : e.target.textContent = 'Done';
      todoEl.classList.toggle('done')
      todo.done === true ? deleteButton.style.display = '' : deleteButton.style.display = 'none';
    }
    newTodos.push(todo);
  });

  window.localStorage.setItem('todos', JSON.stringify(newTodos));
}

export default handleStatusChange;
