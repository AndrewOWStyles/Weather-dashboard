let urlStart = "https://api.openweathermap.org/geo/1.0/direct?q=";
let locationInput = document.getElementById("search-input");
let LimitApiKey = "&limit=5&appid=6f754f65b6008bfea31fb1bd4a90e6ba";
let today = document.querySelector("#today")
let weekForecast = document.querySelector("#forecast")

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
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=6f754f65b6008bfea31fb1bd4a90e6ba`)
    })
    
    .then(response => response.json())
    .then(data => {
        
        console.log(data);
        let cityToday = document.createElement("div")
        let todayTemp = Math.round(data.list[0].main.temp - 273)
        cityToday.innerHTML = 
        `<h1 class= "todayHeader">${data.city.name + " " + moment(data.list[0].dt, "X").format("DD/MM/YYYY HH:mm") + " "}
        <img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png"></h1>
        <h3>Temp: ${todayTemp} °C</h3>
        <h3>Wind: ${data.list[0].wind.speed} KPH</h3>
        <h3>Humidity: ${data.list[0].main.humidity} %</h3>
        `
        cityToday.setAttribute("class", "todayFore");
        today.append(cityToday);


        let city1 = document.createElement("div")
        let temp1 = Math.round(data.list[7].main.temp - 273)
        city1.innerHTML = 
        `<h1 class= "todayHeader">${data.city.name + " " + moment(data.list[7].dt, "X").format("DD/MM/YYYY HH:mm")}</h1>
        <h3><img src="https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png"}</h3>
        <h3>Temp: ${temp1} °C</h3>
        <h3>Wind: ${data.list[7].wind.speed} KPH</h3>
        <h3>Humidity: ${data.list[7].main.humidity} %</h3>
        `
        city1.setAttribute("class", "weekFore");
        weekForecast.append(city1);

        let city2 = document.createElement("div")
        let temp2 = Math.round(data.list[15].main.temp - 273)
        city2.innerHTML = 
        `<h1 class= "todayHeader">${data.city.name + " " + moment(data.list[15].dt, "X").format("DD/MM/YYYY HH:mm")}</h1>
        <h3><img src="https://openweathermap.org/img/wn/${data.list[15].weather[0].icon}@2x.png"}</h3>
        <h3>Temp: ${temp2} °C</h3>
        <h3>Wind: ${data.list[15].wind.speed} KPH</h3>
        <h3>Humidity: ${data.list[15].main.humidity} %</h3>
        `
        city2.setAttribute("class", "weekFore");
        weekForecast.append(city2);

        let city3 = document.createElement("div")
        let temp3 = Math.round(data.list[23].main.temp - 273)
        city3.innerHTML = 
        `<h1 class= "todayHeader">${data.city.name + " " + moment(data.list[23].dt, "X").format("DD/MM/YYYY HH:mm")}</h1>
        <h3><img src="https://openweathermap.org/img/wn/${data.list[23].weather[0].icon}@2x.png"}</h3>
        <h3>Temp: ${temp3} °C</h3>
        <h3>Wind: ${data.list[23].wind.speed} KPH</h3>
        <h3>Humidity: ${data.list[23].main.humidity} %</h3>
        `
        city3.setAttribute("class", "weekFore");
        weekForecast.append(city3);

        let city4 = document.createElement("div")
        let temp4 = Math.round(data.list[31].main.temp - 273)
        city4.innerHTML = 
        `<h1 class= "todayHeader">${data.city.name + " " + moment(data.list[31].dt, "X").format("DD/MM/YYYY HH:mm")}</h1>
        <h3><img src="https://openweathermap.org/img/wn/${data.list[31].weather[0].icon}@2x.png"}</h3>
        <h3>Temp: ${temp4} °C</h3>
        <h3>Wind: ${data.list[31].wind.speed} KPH</h3>
        <h3>Humidity: ${data.list[31].main.humidity} %</h3>
        `
        city4.setAttribute("class", "weekFore");
        weekForecast.append(city4);

        let city5 = document.createElement("div")
        let temp5 = Math.round(data.list[39].main.temp - 273)
        city5.innerHTML = 
        `<h1 class= "todayHeader">${data.city.name + " " + moment(data.list[39].dt, "X").format("DD/MM/YYYY HH:mm")}</h1>
        <h3><img src="https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png"}</h3>
        <h3>Temp: ${temp5} °C</h3>
        <h3>Wind: ${data.list[39].wind.speed} KPH</h3>
        <h3>Humidity: ${data.list[39].main.humidity} %</h3>
        `
        city5.setAttribute("class", "weekFore");
        weekForecast.append(city5);
    })
})
function createCard() {
    
}
// event.target.textContent to grab text of city button