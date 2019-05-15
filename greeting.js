const nameContainer = document.querySelector('.js-greeting');
    input = document.querySelector('input'),
    title = nameContainer.querySelector('h1');

const nameClass = 'name'

function handleSubmit(event){
    event.preventDefault();
    const userName = input.value;
    paintName(userName);
    localStorage.setItem(nameClass, userName);
}

function askName(){
    const name = nameContainer.addEventListener('submit', handleSubmit);
}

function paintName(userName){
    input.classList.add('hidden');
    title.innerText = `일해라, ${userName} !!!`;
}

function loadName(){
    const userName = localStorage.getItem(nameClass);
    if(userName === null){
        askName();
    }else{
        paintName(userName);
    }
}

function init(){
    loadName();
}
init();