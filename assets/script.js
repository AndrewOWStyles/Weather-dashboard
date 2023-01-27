let urlStart = "http://api.openweathermap.org/geo/1.0/direct?q=";
let locationInput = document.getElementById("search-input");
let LimitApiKey = "&limit=5&appid=6f754f65b6008bfea31fb1bd4a90e6ba";
let today = document.querySelector("#today")

document.querySelector("#search-button").addEventListener("click", function(event){
    event.preventDefault();
    let location = locationInput.value;
    let queryURL = urlStart + location + LimitApiKey
    console.log(queryURL);
    // put full fetch inside event listener
    // geo api that uses names of locations to get geographical coordinates (lat, lon)
    fetch(queryURL)
    .then(response => response.json())
    .then(citiesFound => {
        
        console.log(citiesFound);
        let firstCity = citiesFound[0];
        console.log(firstCity.lat);
        console.log(firstCity.lon);
        
     // weather forecast api set to some coordinates
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=6f754f65b6008bfea31fb1bd4a90e6ba`)
    })
    
    .then(response => response.json())
    .then(data => {
        
        console.log(data);
        let cityToday = document.createElement("div")
        cityToday.innerHTML = 
        `<h1>${moment(data.list[0].dt, "X").format("DD/MM/YYYY HH:mm:ss")}</h1>
        <img src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png">
        <h3>Temp: ${data.list[0].main.temp} °C</h3>
        <h3>Wind: ${data.list[0].wind.speed} KPH</h3>
        <h3>Humidity: ${data.list[0].main.humidity} %</h3>
        `
        today.append(cityToday)
    })
})
function createCard() {
    
}
// event.target.textContent to grab text of city button