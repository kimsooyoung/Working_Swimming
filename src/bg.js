const jsMeem = document.querySelector(".meem-here");

const IMG_NUMBER = 5;

function paintImg(randomNumber){
    const image = new Image();
    console.log(randomNumber);
    jsMeem.src = `../img/${randomNumber + 1}.jpg`;
    // jsMeem.classList.add("bg-image");
    // jsMeem.prepend(image);
}

function makeRandNum(){
    return Math.floor(Math.random() * IMG_NUMBER);
}

function init(){
    const randomNumber = makeRandNum();
    paintImg(randomNumber);
}

init();