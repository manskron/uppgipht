function handleDelete(e) {
  let todoElement = e.target.parentNode;
  let id = todoElement.id;

  let storedTodos = JSON.parse(window.localStorage.getItem('todos'));
  let newTodos = storedTodos.filter(todo => {
    return String(todo.id) !== id;
  });
  localStorage.setItem('todos', JSON.stringify(newTodos));

  todoElement.remove();
}

export default handleDelete;
