import { WeatherManager } from './classes.js';

const weatherManObj = new WeatherManager();
weatherManObj.getWeather('atlanta');

// accept user input and search for weather data for city
const submitButton = document.querySelector('#submit-button');
const inputBox = document.querySelector('#user-input');

submitButton.addEventListener('click', () => {
    const inputValue = inputBox.value;
    weatherManObj.getWeather(inputValue);
});
