const nameContainer = document.querySelector('.js-greeting');
    nameInput = document.querySelector('.greeting-box'),
    title = nameContainer.querySelector('h1');

const USER_LS = 'name'
const HIDDEN_CN = "hidden";

function handleSubmit(event){
    event.preventDefault(); // prevent refresh
    const userName = nameInput.value;
    paintName(userName);
    localStorage.setItem(USER_LS, userName);
}

function askName(){
    nameContainer.addEventListener('submit', handleSubmit);
}

function paintName(userName){
    nameInput.classList.add(HIDDEN_CN);
    title.innerText = `일해라, ${userName} !!!`;
}

function loadName(){
    const userName = localStorage.getItem(USER_LS);
    userName === null ? askName():paintName(userName);
}

function init(){
    loadName();
}
init();