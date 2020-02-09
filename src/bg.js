const body = document.querySelector("body");

const IMG_NUMBER = 1;

function paintImg(randomNumber){
    const image = new Image();
    console.log(randomNumber);
    image.src = `../img/${randomNumber + 1}.jpg`;
    image.classList.add("bg-image");
    body.prepend(image);
}

function makeRandNum(){
    return Math.floor(Math.random() * IMG_NUMBER);
}

function init(){
    const randomNumber = makeRandNum();
    paintImg(randomNumber);
}

init();