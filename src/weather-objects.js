class WeatherObjects {
    constructor(jsonData) {
        // this.currentWeather = this.createCurrentWeather(jsonData);
        // this.dailyForecast = this.createDailyForecast(jsonData, 3);
        // this.hourlyForecast = this.createHourlyForecast(jsonData, 24, 0);
        this.currentWeather = {};
        this.dailyForecast = {};
        this.hourlyForecast = {};

        this.createCurrentWeather(jsonData);
        this.createDailyForecast(jsonData, 3);
        this.createHourlyForecast(jsonData, 24, 0);
    }

    createCurrentWeather(jsonData) {
        this.currentWeather = {
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
        // return currentWeatherObj;
    }

    createDailyForecast(jsonData, numDays) {
        this.dailyForecast = {
            date: [],
            temp_high_c: [],
            temp_high_f: [],
            temp_low_c: [],
            temp_low_f: [],
            condition_image: [],
            condition_text: [],
        };
        for (let i = 0; i < numDays; i++) {
            // console.log(jsonData.forecast.forecastday[i].date);
            this.dailyForecast.date.push(jsonData.forecast.forecastday[i].date);
            this.dailyForecast.temp_high_c.push(
                jsonData.forecast.forecastday[i].day.maxtemp_c
            );
            this.dailyForecast.temp_high_f.push(
                jsonData.forecast.forecastday[i].day.maxtemp_f
            );
            this.dailyForecast.temp_low_c.push(
                jsonData.forecast.forecastday[i].day.mintemp_c
            );
            this.dailyForecast.temp_low_f.push(
                jsonData.forecast.forecastday[i].day.mintemp_f
            );
            this.dailyForecast.condition_image.push(
                jsonData.forecast.forecastday[i].day.condition.icon
            );
            this.dailyForecast.condition_text.push(
                jsonData.forecast.forecastday[i].day.condition.text
            );
        }
        // return dailyForecast;
    }

    // Hourly:
    // time
    // temp
    // condition Image
    createHourlyForecast(jsonData, numHours, forecastDay) {
        this.hourlyForecast = {
            time: [],
            temp_c: [],
            temp_f: [],
            condition_text: [],
            condition_image: [],
        };

        for (let i = 0; i < numHours; i++) {
            this.hourlyForecast.time.push(
                jsonData.forecast.forecastday[0].hour[forecastDay].time
            );
            this.hourlyForecast.temp_c.push(
                jsonData.forecast.forecastday[0].hour[forecastDay].temp_c
            );
            this.hourlyForecast.temp_f.push(
                jsonData.forecast.forecastday[0].hour[forecastDay].temp_f
            );
            this.hourlyForecast.condition_text.push(
                jsonData.forecast.forecastday[0].hour[forecastDay].condition
                    .text
            );
            this.hourlyForecast.condition_image.push(
                jsonData.forecast.forecastday[0].hour[forecastDay].condition
                    .icon
            );
        }
        // return hourlyForecast;
    }
}

export { WeatherObjects };
