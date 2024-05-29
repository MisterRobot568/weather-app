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

const weatherManObj = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.WeatherManager();
weatherManObj.getWeather('atlanta');

const submitButton = document.querySelector('#submit-button');
const inputBox = document.querySelector('#user-input');

submitButton.addEventListener('click', () => {
    const inputValue = inputBox.value;
    weatherManObj.getWeather(inputValue);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtGQUErRixTQUFTO0FBQ3hHLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMEI7Ozs7Ozs7VUNoSjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEM7QUFDOUMsMEJBQTBCLHVEQUFjO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGkga2V5OiA3MmIxYjZhMWZkM2Q0YzgyYjJjNzI0MTQyNDE1MDVcblxuLy8gUHJpbWFyeSBXZWF0aGVyOlxuLy8gY29uZGl0aW9uIHRleHQ6XG4vLyBsb2NhdGlvblxuLy8gZGF0ZTogZGF5LCBkYXRlXG4vLyB0aW1lOlxuLy8gY29uZGl0aW9uIEltYWdlXG4vLyBVViBpbmRleFxuXG4vLyBTZWNvbmRhcnkgRGF0YTpcbi8vIGZlZWxzIGxpa2U6XG4vLyBIdW1pZGl0eVxuLy8gQ2hhbmNlIG9mIHByZWNpcGl0YXRpb25cbi8vIHdpbmQgc3BlZWRcblxuLy9Gb3JlY2FzdCBkYXRhXG4vLyBkYWlseTpcbi8vIGRhdGVcbi8vIHRlbXAgaGlnaFxuLy8gdGVtcCBsb3dcbi8vIGNvbmRpdGlvbiBJbWFnZVxuXG4vLyBIb3VybHk6XG4vLyB0aW1lXG4vLyB0ZW1wXG4vLyBjb25kaXRpb24gSW1hZ2VcblxuY2xhc3MgV2VhdGhlck1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRlbXAgPSAnJztcbiAgICAgICAgdGhpcy53ZWF0aGVyT2JqZWN0QXJyYXkgPSBbXTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT03MmIxYjZhMWZkM2Q0YzgyYjJjNzI0MTQyNDE1MDUmcT0ke2xvY2F0aW9ufSZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ub2AsXG4gICAgICAgICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBjdXJyZW50V2VhdGhlck9iaiA9IG5ldyBXZWF0aGVyT2JqZWN0cyh3ZWF0aGVyRGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXJPYmouY3VycmVudFdlYXRoZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlck9iai5kYWlseUZvcmVjYXN0KTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXJPYmouaG91cmx5Rm9yZWNhc3QpO1xuICAgICAgICAvLyBhZGQgY2F0Y2gvdGhlbi8gd2hhdGV2ZXIgc3RhdGVtZW50IHRvIGNoZWNrIGZvciBlcnJvcnNcbiAgICB9XG5cbiAgICByZWFkSnNvbigpIHt9XG4gICAgZ2V0TG9jYXRpb24oKSB7fVxufVxuXG5jbGFzcyBXZWF0aGVyT2JqZWN0cyB7XG4gICAgY29uc3RydWN0b3IoanNvbkRhdGEpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50V2VhdGhlciA9IHRoaXMuY3JlYXRlQ3VycmVudFdlYXRoZXIoanNvbkRhdGEpO1xuICAgICAgICB0aGlzLmRhaWx5Rm9yZWNhc3QgPSB0aGlzLmNyZWF0ZURhaWx5Rm9yZWNhc3QoanNvbkRhdGEsIDMpO1xuICAgICAgICB0aGlzLmhvdXJseUZvcmVjYXN0ID0gdGhpcy5jcmVhdGVIb3VybHlGb3JlY2FzdChqc29uRGF0YSwgMjQsIDApO1xuICAgIH1cbiAgICBjcmVhdGVDdXJyZW50V2VhdGhlcihqc29uRGF0YSkge1xuICAgICAgICBjb25zdCBjdXJyZW50V2VhdGhlck9iaiA9IHtcbiAgICAgICAgICAgIGNvbmRpdGlvbl90ZXh0OiBqc29uRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgY29uZGl0aW9uX2ltYWdlOiBqc29uRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLFxuICAgICAgICAgICAgbG9jYXRpb246IGpzb25EYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgICAgICBkYXRlOiBqc29uRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXG4gICAgICAgICAgICB0aW1lOiBqc29uRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXG4gICAgICAgICAgICB0ZW1wX2M6IGpzb25EYXRhLmN1cnJlbnQudGVtcF9jLFxuICAgICAgICAgICAgdGVtcF9mOiBqc29uRGF0YS5jdXJyZW50LnRlbXBfZixcbiAgICAgICAgICAgIFVWX2luZGV4OiBqc29uRGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICAgICAgZmVlbHNfbGlrZV9jOiBqc29uRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgICAgICAgICAgZmVlbHNfbGlrZV9mOiBqc29uRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgICAgICAgICAgaHVtaWRpdHk6IGpzb25EYXRhLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjdXJyZW50V2VhdGhlck9iajtcbiAgICB9XG4gICAgY3JlYXRlRGFpbHlGb3JlY2FzdChqc29uRGF0YSwgbnVtX2RheXMpIHtcbiAgICAgICAgY29uc3QgZGFpbHlGb3JlY2FzdCA9IHtcbiAgICAgICAgICAgIGRhdGU6IFtdLFxuICAgICAgICAgICAgdGVtcF9oaWdoX2M6IFtdLFxuICAgICAgICAgICAgdGVtcF9oaWdoX2Y6IFtdLFxuICAgICAgICAgICAgdGVtcF9sb3dfYzogW10sXG4gICAgICAgICAgICB0ZW1wX2xvd19mOiBbXSxcbiAgICAgICAgICAgIGNvbmRpdGlvbl9pbWFnZTogW10sXG4gICAgICAgICAgICBjb25kaXRpb25fdGV4dDogW10sXG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtX2RheXM7IGkrKykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coanNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZSk7XG4gICAgICAgICAgICBkYWlseUZvcmVjYXN0LmRhdGUucHVzaChqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXRlKTtcbiAgICAgICAgICAgIGRhaWx5Rm9yZWNhc3QudGVtcF9oaWdoX2MucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9jXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZGFpbHlGb3JlY2FzdC50ZW1wX2hpZ2hfZi5wdXNoKFxuICAgICAgICAgICAgICAgIGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2ZcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkYWlseUZvcmVjYXN0LnRlbXBfbG93X2MucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9jXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZGFpbHlGb3JlY2FzdC50ZW1wX2xvd19mLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfZlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRhaWx5Rm9yZWNhc3QuY29uZGl0aW9uX2ltYWdlLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi5pY29uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZGFpbHlGb3JlY2FzdC5jb25kaXRpb25fdGV4dC5wdXNoKFxuICAgICAgICAgICAgICAgIGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24udGV4dFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGFpbHlGb3JlY2FzdDtcbiAgICB9XG4gICAgLy8gSG91cmx5OlxuICAgIC8vIHRpbWVcbiAgICAvLyB0ZW1wXG4gICAgLy8gY29uZGl0aW9uIEltYWdlXG4gICAgY3JlYXRlSG91cmx5Rm9yZWNhc3QoanNvbkRhdGEsIG51bV9ob3VycywgZm9yZWNhc3RfZGF5KSB7XG4gICAgICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0ge1xuICAgICAgICAgICAgdGltZTogW10sXG4gICAgICAgICAgICB0ZW1wX2M6IFtdLFxuICAgICAgICAgICAgdGVtcF9mOiBbXSxcbiAgICAgICAgICAgIGNvbmRpdGlvbl90ZXh0OiBbXSxcbiAgICAgICAgICAgIGNvbmRpdGlvbl9pbWFnZTogW10sXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1faG91cnM7IGkrKykge1xuICAgICAgICAgICAgaG91cmx5Rm9yZWNhc3QudGltZS5wdXNoKFxuICAgICAgICAgICAgICAgIGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbZm9yZWNhc3RfZGF5XS50aW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaG91cmx5Rm9yZWNhc3QudGVtcF9jLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltmb3JlY2FzdF9kYXldLnRlbXBfY1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGhvdXJseUZvcmVjYXN0LnRlbXBfZi5wdXNoKFxuICAgICAgICAgICAgICAgIGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbZm9yZWNhc3RfZGF5XS50ZW1wX2ZcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBob3VybHlGb3JlY2FzdC5jb25kaXRpb25fdGV4dC5wdXNoKFxuICAgICAgICAgICAgICAgIGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbZm9yZWNhc3RfZGF5XS5jb25kaXRpb25cbiAgICAgICAgICAgICAgICAgICAgLnRleHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBob3VybHlGb3JlY2FzdC5jb25kaXRpb25faW1hZ2UucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ZvcmVjYXN0X2RheV0uY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgICAgIC5pY29uXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBob3VybHlGb3JlY2FzdDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFdlYXRoZXJNYW5hZ2VyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFdlYXRoZXJNYW5hZ2VyIH0gZnJvbSAnLi9jbGFzc2VzLmpzJztcbmNvbnN0IHdlYXRoZXJNYW5PYmogPSBuZXcgV2VhdGhlck1hbmFnZXIoKTtcbndlYXRoZXJNYW5PYmouZ2V0V2VhdGhlcignYXRsYW50YScpO1xuXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ1dHRvbicpO1xuY29uc3QgaW5wdXRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlci1pbnB1dCcpO1xuXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0Qm94LnZhbHVlO1xuICAgIHdlYXRoZXJNYW5PYmouZ2V0V2VhdGhlcihpbnB1dFZhbHVlKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9