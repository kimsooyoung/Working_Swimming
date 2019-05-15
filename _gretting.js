const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    gretting = document.querySelector('.js-grettings');

const USER_LS = 'current_user',
    SHOWING_CN = 'showing';

function save_name(text){
    localStorage.setItem(USER_LS, text);
}

function handle_submit(event){
    event.preventDefault();
    const current_value = input.value;
    paint_gretting(current_value);
    save_name(current_value);
}

function ask_name(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handle_submit);
}

function paint_gretting(text){
    gretting.innerText = `Hello ${text}`;
    form.classList.remove(SHOWING_CN);
    gretting.classList.add(SHOWING_CN);
}

function load_name(){
    const current_user = localStorage.getItem(USER_LS);    
    if(current_user === null){
        ask_name();
    }else{
        paint_gretting(current_user)
    }
}

function init(){
    load_name();
}

init();