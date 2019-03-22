function handleDelete(e) {
  const todoElement = e.target.parentNode;
  const { id } = todoElement;

  const storedTodos = JSON.parse(window.localStorage.getItem('todos'));
  const newTodos = storedTodos.filter(todo => String(todo.id) !== id);
  localStorage.setItem('todos', JSON.stringify(newTodos));

  todoElement.remove();
}

export default handleDelete;
