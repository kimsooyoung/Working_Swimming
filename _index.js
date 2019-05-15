// Swimming = {
//     name : 'swimming_kim',
//     age : '23',
//     favorite : 'Book',
//     income : 0
// }
// function test(){
//     document.write('test');
// }

// function intro(name, age){
//     console.log(`Hello my name is ${name} and my age is ${age} `);
// }

// function return_intro(name, age){
//     return `Hello my name is ${name} and my age is ${age}`;
// }

// dev_swimming = return_intro('swimming', 23);
// document.write(dev_swimming);

// const title = document.getElementById('big_letter');
// title.innerHTML = 'Changed';
// title.style.color = 'red';

// function handle_resize(){
//     document.write('<p>resized</p><br>');
// }
// window.addEventListener('resize', handle_resize);

// function handle_resize(event){
//     console.log(event);
// }
// window.addEventListener('resize', handle_resize);

const title = document.querySelector('#title');
const CLICKED_CLASS = 'clicked';

function handle_click(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener('click', handle_click);
}//offline, online
init();