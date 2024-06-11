import { WeatherManager } from './classes';

const weatherManObj = new WeatherManager();
weatherManObj.getWeather('atlanta');

// accept user input and search for weather data for city
const submitButton = document.querySelector('#submit-button');
const dailyButton = document.querySelector('#daily-button');
const hourlyButton = document.querySelector('#hourly-button');
const tempToggleButton = document.querySelector('#temp-toggle');

const inputBox = document.querySelector('#user-input');

submitButton.addEventListener('click', () => {
    const inputValue = inputBox.value;
    weatherManObj.getWeather(inputValue);
});

dailyButton.addEventListener('click', () => {
    weatherManObj.populateDaily();
    weatherManObj.toggleDailyHourly();
});

hourlyButton.addEventListener('click', () => {
    weatherManObj.populateHourly();
    weatherManObj.toggleDailyHourly();
});

// For this listener we want to change the unit of measurement of the temp,
// however we want to make sure that when we repopulate daily (or hourly)
// that it is populated again without changing to the other
tempToggleButton.addEventListener('click', () => {
    weatherManObj.toggleTempUnit();
    weatherManObj.populateCurrent();
    if (weatherManObj.dailyHourly === 'd') {
        weatherManObj.populateDaily();
    } else {
        weatherManObj.populateHourly();
    }
});
