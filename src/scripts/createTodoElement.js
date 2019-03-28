import handleStatus from './handleStatusChange';
import handleDelete from './handleDelete';

function createTodoElement(title, desc, timestamp, id, done) {
  const todo = document.createElement('div');
  todo.classList.add('todo');
  done === true ? todo.classList.add('done') : todo.classList.remove('done');
  todo.id = id;

  todo.innerHTML = `
  <h3 class="todo__title"><span class="status-dot"></span> ${title}</h3>
  <p class="todo__desc">${desc}</p>
  <p class="todo__date">${timestamp}</p>
  `;

  const statusButton = document.createElement('button');
  statusButton.classList.add('todo__status-btn');
  statusButton.id = 'statusBtn';
  done === true ? (statusButton.textContent = 'Undo') : (statusButton.textContent = 'Done');

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('todo__delete-btn');
  deleteButton.id = 'deleteBtn';
  deleteButton.textContent = 'Remove';
  done === true ? (deleteButton.style.display = '') : (deleteButton.style.display = 'none');

  todo.appendChild(statusButton);
  todo.appendChild(deleteButton);

  statusButton.addEventListener('click', e => handleStatus(e));
  deleteButton.addEventListener('click', e => handleDelete(e));

  return todo;
}

export default createTodoElement;
