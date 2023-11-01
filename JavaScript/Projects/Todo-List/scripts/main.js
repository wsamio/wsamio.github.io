// if there's no todolist in the storage create one
if(!localStorage.getItem('todoList')) {
    initialTodoList = [];
    localStorage.setItem('todoList', JSON.stringify(initialTodoList));
    console.log('Localstorage is created to store the todo list!');
}

const todoList = JSON.parse(localStorage.getItem('todoList'));

function updateLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function renderTodoList() {
    let todoHtml = '';
    for(let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // destructuring
        const { name, dueDate } = todoObject;
        const html =
        `
        <div>
            ${name}
        </div>
        <div>
            ${dueDate}
        </div>
        <button class="remove-todo-button" onclick="removeTodo(${i});">
            Delete
        </button>
        `;
        todoHtml += html;
    }
    todoListElement = document.querySelector('.js-todo-list');
    todoListElement.innerHTML = todoHtml;
}

renderTodoList();

function getTodoInput(nameInputClass, dateInputClass) {
    const nameInputElement = document.querySelector(nameInputClass);
    const name = nameInputElement.value;

    const dateInputElement = document.querySelector(dateInputClass);
    const dueDate = dateInputElement.value;

    nameInputElement.value =  dateInputElement.value = '';
    return {name, dueDate};
}

function validTodoCheck(todoName) {
    for(let i = 0; i < todoName.length; i++) {
        if(todoName[i] !== ' ') {
            return true;
        }
    }
    return false;
}

function removeTodo(removeIndex) {
    todoList.splice(removeIndex, 1);
    updateLocalStorage()
    renderTodoList();
}

function addTodo() {
    const { name, dueDate } = getTodoInput('.js-todo-input', '.js-date-input');
    if(validTodoCheck(name)) {
        todoList.push({ name, dueDate });
    }
    updateLocalStorage();
    renderTodoList();
}