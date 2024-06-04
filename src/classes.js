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

//Forecast data
// daily:
// date
// temp high
// temp low
// condition Image

// Hourly:
// time
// temp
// condition Image

class WeatherManager {
    constructor() {
        this.temp = '';
        // this.weatherObjectArray = [];
        this.weatherObject = [];
        this.tempUnit = 'f'; //0 for F, 1 for C. Write an event listener that changes temp unit on click/toggle
    }

    async getWeather(location) {
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=72b1b6a1fd3d4c82b2c72414241505&q=${location}&days=3&aqi=no&alerts=no`,
            { mode: 'cors' }
        );
        const weatherData = await response.json();
        const currentWeatherObj = new WeatherObjects(weatherData);
        this.weatherObject = currentWeatherObj;
        this.populatePrimaryWeather();
        this.populateSecondaryWeather();
        console.log(weatherData);
        console.log(currentWeatherObj.currentWeather);
        console.log(currentWeatherObj.dailyForecast);
        console.log(currentWeatherObj.hourlyForecast);
        // add catch/then/ whatever statement to check for errors
    }

    // Primary Weather:
    // condition text:
    // location
    // date: day, date
    // time:
    // condition Image
    // UV index
    populatePrimaryWeather() {
        this.clearDiv('primary-weather');
        // const primaryWeatherText = document.createElement('div');
        // primaryWeatherText.id = 'primaryWeatherText';
        // primaryWeatherText.textContent =
        //     this.weatherObject.currentWeather.condition_text;
        // const primaryWeatherDiv = document.querySelector('.primary-weather');
        // primaryWeatherDiv.appendChild(primaryWeatherText);

        //weather text
        this.createNewDiv(
            'primary-weather-text',
            'condition_text',
            'random-class',
            'primary-weather'
        );
        // Temperature
        this.createNewDiv(
            'primary-weather-temp',
            `temp_${this.tempUnit}`,
            'random-class',
            'primary-weather'
        );
        // location
        this.createNewDiv(
            'primary-weather-location',
            'location',
            'random-class',
            'primary-weather'
        );
        //region
        this.createNewDiv(
            'primary-weather-region',
            'region',
            'random-class',
            'primary-weather'
        );
        //country
        this.createNewDiv(
            'primary-weather-country',
            'country',
            'random-class',
            'primary-weather'
        );
        // date
        this.createNewDiv(
            'primary-weather-date',
            'date',
            'random-class',
            'primary-weather'
        );
        // time
        this.createNewDiv(
            'primary-weather-time',
            'time',
            'random-class',
            'primary-weather'
        );

        // weather UV-index
        this.createNewDiv(
            'primary-weather-UV',
            'UV_index',
            'random-class',
            'primary-weather'
        );
    }
    // Secondary Data:
    // feels like:
    // Humidity
    // Chance of precipitation
    // wind speed
    populateSecondaryWeather() {
        this.clearDiv('secondary-weather');
        // feels like
        this.createNewDiv(
            'feels-like',
            `feels_like_${this.tempUnit}`,
            'random-class',
            'secondary-weather'
        );
        // humidity;
        this.createNewDiv(
            'humidity',
            `humidity`,
            'random-class',
            'secondary-weather'
        );
        // chance of rain
        this.createNewDiv(
            'rain-chance',
            'rain_chance',
            'random-class',
            'secondary-weather'
        );
    }
    // method to create divs used in the 'populate-' methods
    // maybe we can delete the "class" stuff. Not sure if it will be useful
    createNewDiv(id, objectReference, className, parentDivName) {
        const newDiv = document.createElement('div');
        newDiv.id = id;
        newDiv.className = className;
        newDiv.textContent = this.weatherObject.currentWeather[objectReference];
        const parentDiv = document.querySelector(`.${parentDivName}`);
        parentDiv.appendChild(newDiv);
    }
    // method to clear all child elements of a div
    clearDiv(className) {
        const div = document.querySelector(`.${className}`);
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
    }
}

class WeatherObjects {
    constructor(jsonData) {
        this.currentWeather = this.createCurrentWeather(jsonData);
        this.dailyForecast = this.createDailyForecast(jsonData, 3);
        this.hourlyForecast = this.createHourlyForecast(jsonData, 24, 0);
    }
    createCurrentWeather(jsonData) {
        const currentWeatherObj = {
            condition_text: jsonData.current.condition.text,
            condition_image: jsonData.current.condition.icon,
            location: jsonData.location.name,
            region: jsonData.location.region,
            country: jsonData.location.country,
            date: jsonData.location.localtime,
            time: jsonData.location.localtime,
            temp_c: jsonData.current.temp_c,
            temp_f: jsonData.current.temp_f,
            UV_index: jsonData.current.humidity,
            feels_like_c: jsonData.current.feelslike_c,
            feels_like_f: jsonData.current.feelslike_f,
            humidity: jsonData.current.humidity,
            rain_chance:
                jsonData.forecast.forecastday[0].day.daily_chance_of_rain,
        };
        return currentWeatherObj;
    }
    createDailyForecast(jsonData, num_days) {
        const dailyForecast = {
            date: [],
            temp_high_c: [],
            temp_high_f: [],
            temp_low_c: [],
            temp_low_f: [],
            condition_image: [],
            condition_text: [],
        };
        for (let i = 0; i < num_days; i++) {
            // console.log(jsonData.forecast.forecastday[i].date);
            dailyForecast.date.push(jsonData.forecast.forecastday[i].date);
            dailyForecast.temp_high_c.push(
                jsonData.forecast.forecastday[i].day.maxtemp_c
            );
            dailyForecast.temp_high_f.push(
                jsonData.forecast.forecastday[i].day.maxtemp_f
            );
            dailyForecast.temp_low_c.push(
                jsonData.forecast.forecastday[i].day.mintemp_c
            );
            dailyForecast.temp_low_f.push(
                jsonData.forecast.forecastday[i].day.mintemp_f
            );
            dailyForecast.condition_image.push(
                jsonData.forecast.forecastday[i].day.condition.icon
            );
            dailyForecast.condition_text.push(
                jsonData.forecast.forecastday[i].day.condition.text
            );
        }
        return dailyForecast;
    }
    // Hourly:
    // time
    // temp
    // condition Image
    createHourlyForecast(jsonData, num_hours, forecast_day) {
        const hourlyForecast = {
            time: [],
            temp_c: [],
            temp_f: [],
            condition_text: [],
            condition_image: [],
        };

        for (let i = 0; i < num_hours; i++) {
            hourlyForecast.time.push(
                jsonData.forecast.forecastday[0].hour[forecast_day].time
            );
            hourlyForecast.temp_c.push(
                jsonData.forecast.forecastday[0].hour[forecast_day].temp_c
            );
            hourlyForecast.temp_f.push(
                jsonData.forecast.forecastday[0].hour[forecast_day].temp_f
            );
            hourlyForecast.condition_text.push(
                jsonData.forecast.forecastday[0].hour[forecast_day].condition
                    .text
            );
            hourlyForecast.condition_image.push(
                jsonData.forecast.forecastday[0].hour[forecast_day].condition
                    .icon
            );
        }
        return hourlyForecast;
    }
}

export { WeatherManager };
