const todo_form = document.querySelector('.js-todo-form'),
    todo_input = todo_form.querySelector('input'),
    todo_list = document.querySelector('.js-todo-list');

const TODOS_LS = 'to-dos';

let to_do_arr = [];

function delete_todo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todo_list.removeChild(li);
    const clean_todos = to_do_arr.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    to_do_arr = clean_todos;
    save_todo();
}

function save_todo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(to_do_arr));
}

function paint_todo(text){
    const li = document.createElement('li');
    const del_button = document.createElement('button');
    const span = document.createElement('span');
    const new_id = to_do_arr.length + 1;
    del_button.innerHTML = "x";
    del_button.addEventListener("click", delete_todo);
    span.innerText = text + ' ';
    li.appendChild(del_button);
    li.appendChild(span);
    li.id = new_id;
    todo_list.appendChild(li);
    const to_do_obj = {
        text : text,
        id : new_id
    };
    to_do_arr.push(to_do_obj);
    save_todo();
}

function handle_submit(event){
    event.preventDefault();
    const current_value = todo_input.value;
    paint_todo(current_value);
    todo_input.value = '';
}

function load_todos(){
    const load_to_dos = localStorage.getItem(TODOS_LS);
    if(load_to_dos !== null){
        const parsed_todos = JSON.parse(load_to_dos);
        parsed_todos.forEach(function(todo){
            paint_todo(todo.text);
        });
    }
}

function init(){
    load_todos();
    todo_form.addEventListener("submit", handle_submit);
}
init();