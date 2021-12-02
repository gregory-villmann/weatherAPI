function getWeather(){
    let APIEndpoint = 'https://api.openweathermap.org/data/2.5/weather?q=tartu&appid=3f68bed6ed513095148620e7453abb2e';
    fetch(APIEndpoint).then(function (response){
        return response.json();
    }).then(function(weatherData){
        let temp = document.querySelector(".temp");
        let location = document.querySelector(".location");
        let desc = document.querySelector(".description");
        desc.textContent = weatherData.weather[0].description;
        location.textContent = weatherData.name;
        temp.textContent = kelvinToCelsius(weatherData.main.temp);
    }).catch(function (err){
        console.log(err);
    })
}

function kelvinToCelsius(kelvin){
    return Math.round(kelvin-273.1) + '\xB0';
}

