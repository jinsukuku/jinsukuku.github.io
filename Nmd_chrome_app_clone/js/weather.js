const API_KEY = "2cba742a57e3dfe1c30fbb874033e188";
const weatherInfo = document.querySelector("#weather-info");

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

    fetch(url)

        .then((response) => response.json())
        .then((date) => {
            const weather = date.weather[0].main;

            weatherInfo.querySelector(".temp").innerText = date.main.temp + "°";
            weatherInfo.querySelector(".weather").innerText = weather + " /";
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



// 