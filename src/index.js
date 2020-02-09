const title = document.querySelector('#title');
const CLICKED_CLASS = 'clicked';

function handle_click(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener('click', handle_click);
}
init();