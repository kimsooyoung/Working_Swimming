const jsMeem = document.querySelector(".meem-here");

const IMG_NUMBER = 4;

const imageUrls = [
    'https://sayingimages.com/wp-content/uploads/that-look-back-to-work-meme.jpg',
    'https://memesbams.com/wp-content/uploads/2017/10/42-Enjoy-Your-Weekend-Meme.jpg',
    'https://pics.me.me/askme-about-my-weekend-one-more-time-working-weekend-52477103.png',
    'https://pics.awwmemes.com/wifi-notworking-lam-notworking-wifi-not-working-milton-meme-53518097.png'
]

function paintImg(randomNumber){
    console.log(randomNumber);
    // jsMeem.src = `../img/${randomNumber + 1}.jpg`;
    jsMeem.src = imageUrls[randomNumber + 1];
}

function makeRandNum(){
    return Math.floor(Math.random() * IMG_NUMBER);
}

function init(){
    const randomNumber = makeRandNum();
    paintImg(randomNumber);
}

init();