// api key: 72b1b6a1fd3d4c82b2c72414241505

// Primary Weather:
// condition text:
// location
// date: day, date
// time:
// condition Image
// UV index

// Secondary Data:
// feels like:
// Humidity
// Chance of precipitation
// wind speed

// Forecast data
// daily:
// date
// temp high
// temp low
// condition Image

// Hourly:
// time
// temp
// condition Image
import { WeatherObjects } from './weather-objects';
import { DomManager } from './display-manager';

class WeatherManager {
    constructor() {
        this.temp = '';
        // this.weatherObjectArray = [];
        this.weatherObject = [];
        this.domManagerObject = [];
        this.tempUnit = 'f'; // 0 for F, 1 for C. Write an event listener that changes temp unit on click/toggle
        this.dailyHourly = 'd';
    }

    async getWeather(location) {
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=72b1b6a1fd3d4c82b2c72414241505&q=${location}&days=3&aqi=no&alerts=no`,
            { mode: 'cors' }
        );
        const weatherData = await response.json();
        const currentWeatherObj = new WeatherObjects(
            weatherData,
            this.tempUnit
        );
        this.weatherObject = currentWeatherObj;
        // testing//
        this.domManagerObject = new DomManager(
            this.weatherObject,
            this.tempUnit
        );
        this.domManagerObject.populatePrimaryWeather();
        this.domManagerObject.populateSecondaryWeather();
        this.domManagerObject.populateDailyForecast();

        console.log(weatherData);
        console.log(currentWeatherObj.currentWeather);
        console.log(currentWeatherObj.dailyForecast);
        console.log(currentWeatherObj.hourlyForecast);
        // add catch/then/ whatever statement to check for errors
    }

    populateDaily() {
        this.domManagerObject.populateDailyForecast();
    }

    populateHourly() {
        this.domManagerObject.populateHourlyForecast();
    }

    populateCurrent() {
        this.domManagerObject.populatePrimaryWeather();
        this.domManagerObject.populateSecondaryWeather();
    }

    toggleTempUnit() {
        if (this.tempUnit === 'f') {
            this.tempUnit = 'c';
            this.domManagerObject.tempUnit = 'c';
        } else {
            this.tempUnit = 'f';
            this.domManagerObject.tempUnit = 'f';
        }
    }

    toggleDailyHourly() {
        if (this.dailyHourly === 'd') {
            this.dailyHourly = 'h';
        } else {
            this.dailyHourly = 'd';
        }
    }
}

export { WeatherManager };
