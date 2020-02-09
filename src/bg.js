const jsMeem = document.querySelector(".meem-here");

const IMG_NUMBER = 4;

// const imageUrls = [
//     'https://sayingimages.com/wp-content/uploads/that-look-back-to-work-meme.jpg',
//     'https://memesbams.com/wp-content/uploads/2017/10/42-Enjoy-Your-Weekend-Meme.jpg',
//     'https://pics.me.me/askme-about-my-weekend-one-more-time-working-weekend-52477103.png',
//     'https://pics.awwmemes.com/wifi-notworking-lam-notworking-wifi-not-working-milton-meme-53518097.png'
// ]

const imageUrls = [
    'https://user-images.githubusercontent.com/12381733/74104899-b1e86400-4b9c-11ea-972a-46f4c97210b5.jpg',
    'https://user-images.githubusercontent.com/12381733/74104901-b3199100-4b9c-11ea-9f51-c6dfd2018bef.jpg',
    'https://user-images.githubusercontent.com/12381733/74104902-b3b22780-4b9c-11ea-85ea-ad92532aa3d5.jpg',
    'https://user-images.githubusercontent.com/12381733/74104903-b3b22780-4b9c-11ea-896c-76e8dac9f985.jpg',
    'https://user-images.githubusercontent.com/12381733/74104904-b44abe00-4b9c-11ea-8350-b56b725da99d.jpg'
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