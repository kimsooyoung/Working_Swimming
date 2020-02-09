const todoContainer = document.querySelector('.js-todo'),
    todoInput = todoContainer.querySelector('input'),
    todoList = document.querySelector('.todo-list');

const TODO_LS = 'todos';
let todos = [];

function saveTodos(){
    localStorage.setItem(TODO_LS, JSON.stringify(todos));
}

function deleteTodo(event){
    const button = event.target;
    const li = button.parentNode;
    todoList.removeChild(li);
    const filteredTodos = todos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    todos = filteredTodos;
    saveTodos(todos);
}

function paintTodo(text){
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    const span = document.createElement('span');
    const id= todos.length + 1;
    span.innerText = ' ' + text;
    delButton.innerText = 'X';
    delButton.addEventListener('click', deleteTodo);
    li.appendChild(delButton);
    li.appendChild(span);
    li.id = id;
    todoList.appendChild(li);
    const todoObj = {
        text,
        id
    };
    todos.push(todoObj);
    saveTodos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    console.log(currentValue);
    todoInput.value = '';
}

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODO_LS);
    if(loadedTodos !== null){
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(function(todo){
            paintTodo(todo.text);
        });
    }
}

function init(){
    loadTodos();
    todoContainer.addEventListener("submit", handleSubmit);
}
init();