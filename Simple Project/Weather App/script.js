
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apikeys = "2ad6ba0ccce3a9755f441a8ae187f189";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();
    
    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error);
        }
    } else {
        displayError("Please enter the city");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikeys}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    } 

    return await response.json();
}

function displayWeatherInfo(data) {
    
    const {name: city, main: {temp, humidity},weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("p");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherDisplay = document.createElement("p");

    cityDisplay.textContent = city;
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.textContent = `${temp}K`;
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.textContent = humidity;
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.textContent = description;
    descDisplay.classList.add("descDisplay");
    weatherDisplay.textContent = getWeatherEmoji(id);
    weatherDisplay.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherDisplay);
}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId <300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌦️";
        case (weatherId >= 500 && weatherId <600):
            return "🌦️";
        case (weatherId >= 600 && weatherId <700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}