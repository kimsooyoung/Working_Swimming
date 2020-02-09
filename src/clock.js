const clockContainer = document.querySelector('.js-clock');
    
function paintClock(){
    const date = new Date();
    const hours = date.getHours();
    const min  = date.getMinutes();
    const sec  = date.getSeconds();
    clockContainer.innerText = `${hours>12?`PM`:`AM`} ${(hours-12) < 10?`0${hours}`:(hours-12)}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
}

function init(){
    paintClock();
    setInterval(paintClock, 1000);
}
init();