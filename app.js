// api.openweathermap.org/data/2.5/weather?q=tartu&appid=3f68bed6ed513095148620e7453abb2e


function getWeather(){
    let APIEndpoint = 'https://api.openweathermap.org/data/2.5/weather?q=tartu&appid=3f68bed6ed513095148620e7453abb2e';
    fetch(APIEndpoint).then(function (response){
        return response.json();
    }).then(function(weatherData){
        console.log(weatherData)
    }).catch(function (err){
        console.log(err);
    })
}