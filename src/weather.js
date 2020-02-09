const weather = document.querySelector(".js-weather");

const COORD_LS = "coords";
const API_KEY = `cd177c6f265e586ca27c21cdb3a62856`;

function getWeather(lat, lng){
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    ).then(function(res){
        return res.json();
    })
    .then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${temp} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORD_LS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const coordsObj = {
        lat,
        lng
    };
    saveCoords(coordsObj);
    getWeather(lat, lng)
}

function handleGeoError(){
    console.log("Error occured during get Geo location");
}

function getCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function init(){
    const loadedCoords = localStorage.getItem(COORD_LS);
    if(loadedCoords === null){
        getCoords();
    }else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.lat, parsedCoords.lng)
    }
}
init();