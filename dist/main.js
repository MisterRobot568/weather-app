/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherManager: () => (/* binding */ WeatherManager)
/* harmony export */ });
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
        // const locationText = weatherData. location.name;
        // const weatherCondition = weatherData.current.condition.text;
        // const conditionImage = weatherData.current.condition.icon;
        // console.log(locationText);
        // console.log(weatherCondition);
        // console.log(conditionImage);
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ "./src/classes.js");
//function to get the weather data

const weatherManObj = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.WeatherManager();
weatherManObj.getWeather('atlanta');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtGQUErRixTQUFTO0FBQ3hHLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMEI7Ozs7Ozs7VUN6SjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUM4QztBQUM5QywwQkFBMEIsdURBQWM7QUFDeEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBpIGtleTogNzJiMWI2YTFmZDNkNGM4MmIyYzcyNDE0MjQxNTA1XG5cbi8vIFByaW1hcnkgV2VhdGhlcjpcbi8vIGNvbmRpdGlvbiB0ZXh0OlxuLy8gbG9jYXRpb25cbi8vIGRhdGU6IGRheSwgZGF0ZVxuLy8gdGltZTpcbi8vIGNvbmRpdGlvbiBJbWFnZVxuLy8gVVYgaW5kZXhcblxuLy8gU2Vjb25kYXJ5IERhdGE6XG4vLyBmZWVscyBsaWtlOlxuLy8gSHVtaWRpdHlcbi8vIENoYW5jZSBvZiBwcmVjaXBpdGF0aW9uXG4vLyB3aW5kIHNwZWVkXG5cbi8vRm9yZWNhc3QgZGF0YVxuLy8gZGFpbHk6XG4vLyBkYXRlXG4vLyB0ZW1wIGhpZ2hcbi8vIHRlbXAgbG93XG4vLyBjb25kaXRpb24gSW1hZ2VcblxuLy8gSG91cmx5OlxuLy8gdGltZVxuLy8gdGVtcFxuLy8gY29uZGl0aW9uIEltYWdlXG5cbmNsYXNzIFdlYXRoZXJNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50ZW1wID0gJyc7XG4gICAgICAgIHRoaXMud2VhdGhlck9iamVjdEFycmF5ID0gW107XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NzJiMWI2YTFmZDNkNGM4MmIyYzcyNDE0MjQxNTA1JnE9JHtsb2NhdGlvbn0mZGF5cz0zJmFxaT1ubyZhbGVydHM9bm9gLFxuICAgICAgICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgY3VycmVudFdlYXRoZXJPYmogPSBuZXcgV2VhdGhlck9iamVjdHMod2VhdGhlckRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyT2JqLmN1cnJlbnRXZWF0aGVyKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXJPYmouZGFpbHlGb3JlY2FzdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyT2JqLmhvdXJseUZvcmVjYXN0KTtcbiAgICAgICAgLy8gYWRkIGNhdGNoL3RoZW4vIHdoYXRldmVyIHN0YXRlbWVudCB0byBjaGVjayBmb3IgZXJyb3JzXG4gICAgICAgIC8vIGNvbnN0IGxvY2F0aW9uVGV4dCA9IHdlYXRoZXJEYXRhLiBsb2NhdGlvbi5uYW1lO1xuICAgICAgICAvLyBjb25zdCB3ZWF0aGVyQ29uZGl0aW9uID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICAgICAgLy8gY29uc3QgY29uZGl0aW9uSW1hZ2UgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2NhdGlvblRleHQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyQ29uZGl0aW9uKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29uZGl0aW9uSW1hZ2UpO1xuICAgIH1cblxuICAgIHJlYWRKc29uKCkge31cbiAgICBnZXRMb2NhdGlvbigpIHt9XG59XG5cbmNsYXNzIFdlYXRoZXJPYmplY3RzIHtcbiAgICBjb25zdHJ1Y3Rvcihqc29uRGF0YSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRXZWF0aGVyID0gdGhpcy5jcmVhdGVDdXJyZW50V2VhdGhlcihqc29uRGF0YSk7XG4gICAgICAgIHRoaXMuZGFpbHlGb3JlY2FzdCA9IHRoaXMuY3JlYXRlRGFpbHlGb3JlY2FzdChqc29uRGF0YSwgMyk7XG4gICAgICAgIHRoaXMuaG91cmx5Rm9yZWNhc3QgPSB0aGlzLmNyZWF0ZUhvdXJseUZvcmVjYXN0KGpzb25EYXRhLCAyNCwgMCk7XG4gICAgfVxuICAgIGNyZWF0ZUN1cnJlbnRXZWF0aGVyKGpzb25EYXRhKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyT2JqID0ge1xuICAgICAgICAgICAgY29uZGl0aW9uX3RleHQ6IGpzb25EYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICBjb25kaXRpb25faW1hZ2U6IGpzb25EYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXG4gICAgICAgICAgICBsb2NhdGlvbjoganNvbkRhdGEubG9jYXRpb24ubmFtZSxcbiAgICAgICAgICAgIGRhdGU6IGpzb25EYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICAgICAgICAgIHRpbWU6IGpzb25EYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICAgICAgICAgIHRlbXBfYzoganNvbkRhdGEuY3VycmVudC50ZW1wX2MsXG4gICAgICAgICAgICB0ZW1wX2Y6IGpzb25EYXRhLmN1cnJlbnQudGVtcF9mLFxuICAgICAgICAgICAgVVZfaW5kZXg6IGpzb25EYXRhLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgICAgICAgICBmZWVsc19saWtlX2M6IGpzb25EYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MsXG4gICAgICAgICAgICBmZWVsc19saWtlX2Y6IGpzb25EYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YsXG4gICAgICAgICAgICBodW1pZGl0eToganNvbkRhdGEuY3VycmVudC5odW1pZGl0eSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyT2JqO1xuICAgIH1cbiAgICBjcmVhdGVEYWlseUZvcmVjYXN0KGpzb25EYXRhLCBudW1fZGF5cykge1xuICAgICAgICBjb25zdCBkYWlseUZvcmVjYXN0ID0ge1xuICAgICAgICAgICAgZGF0ZTogW10sXG4gICAgICAgICAgICB0ZW1wX2hpZ2hfYzogW10sXG4gICAgICAgICAgICB0ZW1wX2hpZ2hfZjogW10sXG4gICAgICAgICAgICB0ZW1wX2xvd19jOiBbXSxcbiAgICAgICAgICAgIHRlbXBfbG93X2Y6IFtdLFxuICAgICAgICAgICAgY29uZGl0aW9uX2ltYWdlOiBbXSxcbiAgICAgICAgICAgIGNvbmRpdGlvbl90ZXh0OiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1fZGF5czsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXRlKTtcbiAgICAgICAgICAgIGRhaWx5Rm9yZWNhc3QuZGF0ZS5wdXNoKGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRhdGUpO1xuICAgICAgICAgICAgZGFpbHlGb3JlY2FzdC50ZW1wX2hpZ2hfYy5wdXNoKFxuICAgICAgICAgICAgICAgIGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2NcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkYWlseUZvcmVjYXN0LnRlbXBfaGlnaF9mLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfZlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRhaWx5Rm9yZWNhc3QudGVtcF9sb3dfYy5wdXNoKFxuICAgICAgICAgICAgICAgIGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2NcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkYWlseUZvcmVjYXN0LnRlbXBfbG93X2YucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9mXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZGFpbHlGb3JlY2FzdC5jb25kaXRpb25faW1hZ2UucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLmljb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkYWlseUZvcmVjYXN0LmNvbmRpdGlvbl90ZXh0LnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi50ZXh0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYWlseUZvcmVjYXN0O1xuICAgIH1cbiAgICAvLyBIb3VybHk6XG4gICAgLy8gdGltZVxuICAgIC8vIHRlbXBcbiAgICAvLyBjb25kaXRpb24gSW1hZ2VcbiAgICBjcmVhdGVIb3VybHlGb3JlY2FzdChqc29uRGF0YSwgbnVtX2hvdXJzLCBmb3JlY2FzdF9kYXkpIHtcbiAgICAgICAgY29uc3QgaG91cmx5Rm9yZWNhc3QgPSB7XG4gICAgICAgICAgICB0aW1lOiBbXSxcbiAgICAgICAgICAgIHRlbXBfYzogW10sXG4gICAgICAgICAgICB0ZW1wX2Y6IFtdLFxuICAgICAgICAgICAgY29uZGl0aW9uX3RleHQ6IFtdLFxuICAgICAgICAgICAgY29uZGl0aW9uX2ltYWdlOiBbXSxcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV9ob3VyczsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtmb3JlY2FzdF9kYXldLmhvdXJbaV0udGltZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGhvdXJseUZvcmVjYXN0LnRpbWUucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ZvcmVjYXN0X2RheV0udGltZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGhvdXJseUZvcmVjYXN0LnRlbXBfYy5wdXNoKFxuICAgICAgICAgICAgICAgIGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbZm9yZWNhc3RfZGF5XS50ZW1wX2NcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBob3VybHlGb3JlY2FzdC50ZW1wX2YucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ZvcmVjYXN0X2RheV0udGVtcF9mXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaG91cmx5Rm9yZWNhc3QuY29uZGl0aW9uX3RleHQucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ZvcmVjYXN0X2RheV0uY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaG91cmx5Rm9yZWNhc3QuY29uZGl0aW9uX2ltYWdlLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltmb3JlY2FzdF9kYXldLmNvbmRpdGlvblxuICAgICAgICAgICAgICAgICAgICAuaWNvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaG91cmx5Rm9yZWNhc3Q7XG4gICAgfVxufVxuXG5leHBvcnQgeyBXZWF0aGVyTWFuYWdlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2Z1bmN0aW9uIHRvIGdldCB0aGUgd2VhdGhlciBkYXRhXG5pbXBvcnQgeyBXZWF0aGVyTWFuYWdlciB9IGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5jb25zdCB3ZWF0aGVyTWFuT2JqID0gbmV3IFdlYXRoZXJNYW5hZ2VyKCk7XG53ZWF0aGVyTWFuT2JqLmdldFdlYXRoZXIoJ2F0bGFudGEnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==