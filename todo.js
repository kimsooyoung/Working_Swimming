const todoContainer = document.querySelector('.js-todo'),
    todoInput = todoContainer.querySelector('input'),
    todos = document.querySelector('.todos');

const TODO_CLASS = 'todos';
let todoList = [];

function saveTodos(){
    localStorage.setItem(TODO_CLASS, JSON.stringify(todoList));
}
function handleDelTodo(event){
    const button = event.target;
    const li     = button.parentNode;
    todos.removeChild(li);
    const clean_todos = todoList.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    todoList = clean_todos;
    saveTodos(todoList);
}

function paintTodos(todoText){
    const p = document.createElement('p');
    const delButton = document.createElement('button');
    const span = document.createElement('span');
    const todoId= todoList.length + 1;
    span.innerText = ' ' + todoText;
    delButton.innerText = 'X';
    delButton.addEventListener('click', handleDelTodo);
    p.appendChild(delButton);
    p.appendChild(span);
    p.id = todoId;
    todos.appendChild(p);
    const todoObj = {
        text: todoText,
        id:   todoId
    };
    todoList.push(todoObj);
    saveTodos();
}

function handleSubmit(event){
    event.preventDefault();
    const todo = todoInput.value;
    paintTodos(todo);
    todoInput.value = '';
}

function loadTodos(){
    const todos = localStorage.getItem(TODO_CLASS);
    if(todos !== null){
        const parsedTodos = JSON.parse(todos);
        parsedTodos.forEach(function(todo){
            paintTodos(todo.text);
        });
    }
}

function init(){
    loadTodos();
    todoContainer.addEventListener("submit", handleSubmit);
}
init();