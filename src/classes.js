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
        this.weatherObjectArray = [];
    }

    async getWeather(location) {
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=72b1b6a1fd3d4c82b2c72414241505&q=${location}&days=3&aqi=no&alerts=no`,
            { mode: 'cors' }
        );
        const weatherData = await response.json();
        const currentWeatherObj = new WeatherObjects(weatherData);
        console.log(weatherData);
        console.log(currentWeatherObj.currentWeather);
        console.log(currentWeatherObj.dailyForecast);
        console.log(currentWeatherObj.hourlyForecast);
        // add catch/then/ whatever statement to check for errors
    }

    readJson() {}
    getLocation() {}
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
            date: jsonData.location.localtime,
            time: jsonData.location.localtime,
            temp_c: jsonData.current.temp_c,
            temp_f: jsonData.current.temp_f,
            UV_index: jsonData.current.humidity,
            feels_like_c: jsonData.current.feelslike_c,
            feels_like_f: jsonData.current.feelslike_f,
            humidity: jsonData.current.humidity,
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
            console.log(
                jsonData.forecast.forecastday[forecast_day].hour[i].time
            );
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
