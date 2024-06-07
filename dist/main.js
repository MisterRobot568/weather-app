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
/* harmony import */ var _weather_objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-objects */ "./src/weather-objects.js");
/* harmony import */ var _display_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-manager */ "./src/display-manager.js");
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



class WeatherManager {
    constructor() {
        this.temp = '';
        // this.weatherObjectArray = [];
        this.weatherObject = [];
        this.tempUnit = 'f'; // 0 for F, 1 for C. Write an event listener that changes temp unit on click/toggle
    }

    async getWeather(location) {
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=72b1b6a1fd3d4c82b2c72414241505&q=${location}&days=3&aqi=no&alerts=no`,
            { mode: 'cors' }
        );
        const weatherData = await response.json();
        const currentWeatherObj = new _weather_objects__WEBPACK_IMPORTED_MODULE_0__.WeatherObjects(weatherData);
        this.weatherObject = currentWeatherObj;
        // testing//
        const domManager = new _display_manager__WEBPACK_IMPORTED_MODULE_1__.DomManager(this.weatherObject);
        domManager.populatePrimaryWeather();
        domManager.populateSecondaryWeather();
        // this.populatePrimaryWeather();
        // this.populateSecondaryWeather();
        //
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
    /// /// started commenting here
    // populatePrimaryWeather() {
    //     this.clearDiv('primary-weather');
    //     // const primaryWeatherText = document.createElement('div');
    //     // primaryWeatherText.id = 'primaryWeatherText';
    //     // primaryWeatherText.textContent =
    //     //     this.weatherObject.currentWeather.condition_text;
    //     // const primaryWeatherDiv = document.querySelector('.primary-weather');
    //     // primaryWeatherDiv.appendChild(primaryWeatherText);

    //     // weather text
    //     this.createNewDiv(
    //         'primary-weather-text',
    //         'condition_text',
    //         'random-class',
    //         'primary-weather'
    //     );
    //     // Temperature
    //     this.createNewDiv(
    //         'primary-weather-temp',
    //         `temp_${this.tempUnit}`,
    //         'random-class',
    //         'primary-weather'
    //     );
    //     // location
    //     this.createNewDiv(
    //         'primary-weather-location',
    //         'location',
    //         'random-class',
    //         'primary-weather'
    //     );
    //     // region
    //     this.createNewDiv(
    //         'primary-weather-region',
    //         'region',
    //         'random-class',
    //         'primary-weather'
    //     );
    //     // country
    //     this.createNewDiv(
    //         'primary-weather-country',
    //         'country',
    //         'random-class',
    //         'primary-weather'
    //     );
    //     // date
    //     this.createNewDiv(
    //         'primary-weather-date',
    //         'date',
    //         'random-class',
    //         'primary-weather'
    //     );
    //     // time
    //     this.createNewDiv(
    //         'primary-weather-time',
    //         'time',
    //         'random-class',
    //         'primary-weather'
    //     );

    //     // weather UV-index
    //     this.createNewDiv(
    //         'primary-weather-UV',
    //         'UV_index',
    //         'random-class',
    //         'primary-weather'
    //     );
    // }

    // // Secondary Data:
    // // feels like:
    // // Humidity
    // // Chance of precipitation
    // // wind speed
    // populateSecondaryWeather() {
    //     this.clearDiv('secondary-weather');
    //     // feels like
    //     this.createNewDiv(
    //         'feels-like',
    //         `feels_like_${this.tempUnit}`,
    //         'random-class',
    //         'secondary-weather'
    //     );
    //     // humidity;
    //     this.createNewDiv(
    //         'humidity',
    //         `humidity`,
    //         'random-class',
    //         'secondary-weather'
    //     );
    //     // chance of rain
    //     this.createNewDiv(
    //         'rain-chance',
    //         'rain_chance',
    //         'random-class',
    //         'secondary-weather'
    //     );
    // }

    // // method to create divs used in the 'populate-' methods
    // // maybe we can delete the "class" stuff. Not sure if it will be useful
    // createNewDiv(id, objectReference, className, parentDivName) {
    //     const newDiv = document.createElement('div');
    //     newDiv.id = id;
    //     newDiv.className = className;
    //     newDiv.textContent = this.weatherObject.currentWeather[objectReference];
    //     const parentDiv = document.querySelector(`.${parentDivName}`);
    //     parentDiv.appendChild(newDiv);
    // }

    // // method to clear all child elements of a div
    // // maybe turn this into a function instead?
    // clearDiv(className) {
    //     const div = document.querySelector(`.${className}`);
    //     while (div.firstChild) {
    //         div.removeChild(div.firstChild);
    //     }
    // }
}




/***/ }),

/***/ "./src/display-manager.js":
/*!********************************!*\
  !*** ./src/display-manager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomManager: () => (/* binding */ DomManager)
/* harmony export */ });
class DomManager {
    constructor(weatherObject) {
        this.weatherObject = weatherObject;
    }

    populatePrimaryWeather() {
        this.clearDiv('primary-weather');

        // weather text
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
        // region
        this.createNewDiv(
            'primary-weather-region',
            'region',
            'random-class',
            'primary-weather'
        );
        // country
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
    // maybe turn this into a function instead?
    clearDiv(className) {
        const div = document.querySelector(`.${className}`);
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
    }
}




/***/ }),

/***/ "./src/weather-objects.js":
/*!********************************!*\
  !*** ./src/weather-objects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherObjects: () => (/* binding */ WeatherObjects)
/* harmony export */ });
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
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");


const weatherManObj = new _classes__WEBPACK_IMPORTED_MODULE_0__.WeatherManager();
weatherManObj.getWeather('atlanta');

// accept user input and search for weather data for city
const submitButton = document.querySelector('#submit-button');
const inputBox = document.querySelector('#user-input');

submitButton.addEventListener('click', () => {
    const inputValue = inputBox.value;
    weatherManObj.getWeather(inputValue);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDbUQ7QUFDSjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0EsK0ZBQStGLFNBQVM7QUFDeEcsY0FBYztBQUNkO0FBQ0E7QUFDQSxzQ0FBc0MsNERBQWM7QUFDcEQ7QUFDQTtBQUNBLCtCQUErQix3REFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGNBQWM7QUFDdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsVUFBVTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUwQjs7Ozs7Ozs7Ozs7Ozs7O0FDM0wxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsVUFBVTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7O0FDdEh0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsYUFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBCOzs7Ozs7O1VDMUcxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjJDOztBQUUzQywwQkFBMEIsb0RBQWM7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9kaXNwbGF5LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy93ZWF0aGVyLW9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBpIGtleTogNzJiMWI2YTFmZDNkNGM4MmIyYzcyNDE0MjQxNTA1XG5cbi8vIFByaW1hcnkgV2VhdGhlcjpcbi8vIGNvbmRpdGlvbiB0ZXh0OlxuLy8gbG9jYXRpb25cbi8vIGRhdGU6IGRheSwgZGF0ZVxuLy8gdGltZTpcbi8vIGNvbmRpdGlvbiBJbWFnZVxuLy8gVVYgaW5kZXhcblxuLy8gU2Vjb25kYXJ5IERhdGE6XG4vLyBmZWVscyBsaWtlOlxuLy8gSHVtaWRpdHlcbi8vIENoYW5jZSBvZiBwcmVjaXBpdGF0aW9uXG4vLyB3aW5kIHNwZWVkXG5cbi8vIEZvcmVjYXN0IGRhdGFcbi8vIGRhaWx5OlxuLy8gZGF0ZVxuLy8gdGVtcCBoaWdoXG4vLyB0ZW1wIGxvd1xuLy8gY29uZGl0aW9uIEltYWdlXG5cbi8vIEhvdXJseTpcbi8vIHRpbWVcbi8vIHRlbXBcbi8vIGNvbmRpdGlvbiBJbWFnZVxuaW1wb3J0IHsgV2VhdGhlck9iamVjdHMgfSBmcm9tICcuL3dlYXRoZXItb2JqZWN0cyc7XG5pbXBvcnQgeyBEb21NYW5hZ2VyIH0gZnJvbSAnLi9kaXNwbGF5LW1hbmFnZXInO1xuXG5jbGFzcyBXZWF0aGVyTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGVtcCA9ICcnO1xuICAgICAgICAvLyB0aGlzLndlYXRoZXJPYmplY3RBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLndlYXRoZXJPYmplY3QgPSBbXTtcbiAgICAgICAgdGhpcy50ZW1wVW5pdCA9ICdmJzsgLy8gMCBmb3IgRiwgMSBmb3IgQy4gV3JpdGUgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCBjaGFuZ2VzIHRlbXAgdW5pdCBvbiBjbGljay90b2dnbGVcbiAgICB9XG5cbiAgICBhc3luYyBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT03MmIxYjZhMWZkM2Q0YzgyYjJjNzI0MTQyNDE1MDUmcT0ke2xvY2F0aW9ufSZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ub2AsXG4gICAgICAgICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBjdXJyZW50V2VhdGhlck9iaiA9IG5ldyBXZWF0aGVyT2JqZWN0cyh3ZWF0aGVyRGF0YSk7XG4gICAgICAgIHRoaXMud2VhdGhlck9iamVjdCA9IGN1cnJlbnRXZWF0aGVyT2JqO1xuICAgICAgICAvLyB0ZXN0aW5nLy9cbiAgICAgICAgY29uc3QgZG9tTWFuYWdlciA9IG5ldyBEb21NYW5hZ2VyKHRoaXMud2VhdGhlck9iamVjdCk7XG4gICAgICAgIGRvbU1hbmFnZXIucG9wdWxhdGVQcmltYXJ5V2VhdGhlcigpO1xuICAgICAgICBkb21NYW5hZ2VyLnBvcHVsYXRlU2Vjb25kYXJ5V2VhdGhlcigpO1xuICAgICAgICAvLyB0aGlzLnBvcHVsYXRlUHJpbWFyeVdlYXRoZXIoKTtcbiAgICAgICAgLy8gdGhpcy5wb3B1bGF0ZVNlY29uZGFyeVdlYXRoZXIoKTtcbiAgICAgICAgLy9cbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlck9iai5jdXJyZW50V2VhdGhlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyT2JqLmRhaWx5Rm9yZWNhc3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlck9iai5ob3VybHlGb3JlY2FzdCk7XG4gICAgICAgIC8vIGFkZCBjYXRjaC90aGVuLyB3aGF0ZXZlciBzdGF0ZW1lbnQgdG8gY2hlY2sgZm9yIGVycm9yc1xuICAgIH1cblxuICAgIC8vIFByaW1hcnkgV2VhdGhlcjpcbiAgICAvLyBjb25kaXRpb24gdGV4dDpcbiAgICAvLyBsb2NhdGlvblxuICAgIC8vIGRhdGU6IGRheSwgZGF0ZVxuICAgIC8vIHRpbWU6XG4gICAgLy8gY29uZGl0aW9uIEltYWdlXG4gICAgLy8gVVYgaW5kZXhcbiAgICAvLy8gLy8vIHN0YXJ0ZWQgY29tbWVudGluZyBoZXJlXG4gICAgLy8gcG9wdWxhdGVQcmltYXJ5V2VhdGhlcigpIHtcbiAgICAvLyAgICAgdGhpcy5jbGVhckRpdigncHJpbWFyeS13ZWF0aGVyJyk7XG4gICAgLy8gICAgIC8vIGNvbnN0IHByaW1hcnlXZWF0aGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vICAgICAvLyBwcmltYXJ5V2VhdGhlclRleHQuaWQgPSAncHJpbWFyeVdlYXRoZXJUZXh0JztcbiAgICAvLyAgICAgLy8gcHJpbWFyeVdlYXRoZXJUZXh0LnRleHRDb250ZW50ID1cbiAgICAvLyAgICAgLy8gICAgIHRoaXMud2VhdGhlck9iamVjdC5jdXJyZW50V2VhdGhlci5jb25kaXRpb25fdGV4dDtcbiAgICAvLyAgICAgLy8gY29uc3QgcHJpbWFyeVdlYXRoZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpbWFyeS13ZWF0aGVyJyk7XG4gICAgLy8gICAgIC8vIHByaW1hcnlXZWF0aGVyRGl2LmFwcGVuZENoaWxkKHByaW1hcnlXZWF0aGVyVGV4dCk7XG5cbiAgICAvLyAgICAgLy8gd2VhdGhlciB0ZXh0XG4gICAgLy8gICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgIC8vICAgICAgICAgJ3ByaW1hcnktd2VhdGhlci10ZXh0JyxcbiAgICAvLyAgICAgICAgICdjb25kaXRpb25fdGV4dCcsXG4gICAgLy8gICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAvLyAgICAgICAgICdwcmltYXJ5LXdlYXRoZXInXG4gICAgLy8gICAgICk7XG4gICAgLy8gICAgIC8vIFRlbXBlcmF0dXJlXG4gICAgLy8gICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgIC8vICAgICAgICAgJ3ByaW1hcnktd2VhdGhlci10ZW1wJyxcbiAgICAvLyAgICAgICAgIGB0ZW1wXyR7dGhpcy50ZW1wVW5pdH1gLFxuICAgIC8vICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgLy8gICAgICAgICAncHJpbWFyeS13ZWF0aGVyJ1xuICAgIC8vICAgICApO1xuICAgIC8vICAgICAvLyBsb2NhdGlvblxuICAgIC8vICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAvLyAgICAgICAgICdwcmltYXJ5LXdlYXRoZXItbG9jYXRpb24nLFxuICAgIC8vICAgICAgICAgJ2xvY2F0aW9uJyxcbiAgICAvLyAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgIC8vICAgICAgICAgJ3ByaW1hcnktd2VhdGhlcidcbiAgICAvLyAgICAgKTtcbiAgICAvLyAgICAgLy8gcmVnaW9uXG4gICAgLy8gICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgIC8vICAgICAgICAgJ3ByaW1hcnktd2VhdGhlci1yZWdpb24nLFxuICAgIC8vICAgICAgICAgJ3JlZ2lvbicsXG4gICAgLy8gICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAvLyAgICAgICAgICdwcmltYXJ5LXdlYXRoZXInXG4gICAgLy8gICAgICk7XG4gICAgLy8gICAgIC8vIGNvdW50cnlcbiAgICAvLyAgICAgdGhpcy5jcmVhdGVOZXdEaXYoXG4gICAgLy8gICAgICAgICAncHJpbWFyeS13ZWF0aGVyLWNvdW50cnknLFxuICAgIC8vICAgICAgICAgJ2NvdW50cnknLFxuICAgIC8vICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgLy8gICAgICAgICAncHJpbWFyeS13ZWF0aGVyJ1xuICAgIC8vICAgICApO1xuICAgIC8vICAgICAvLyBkYXRlXG4gICAgLy8gICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgIC8vICAgICAgICAgJ3ByaW1hcnktd2VhdGhlci1kYXRlJyxcbiAgICAvLyAgICAgICAgICdkYXRlJyxcbiAgICAvLyAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgIC8vICAgICAgICAgJ3ByaW1hcnktd2VhdGhlcidcbiAgICAvLyAgICAgKTtcbiAgICAvLyAgICAgLy8gdGltZVxuICAgIC8vICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAvLyAgICAgICAgICdwcmltYXJ5LXdlYXRoZXItdGltZScsXG4gICAgLy8gICAgICAgICAndGltZScsXG4gICAgLy8gICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAvLyAgICAgICAgICdwcmltYXJ5LXdlYXRoZXInXG4gICAgLy8gICAgICk7XG5cbiAgICAvLyAgICAgLy8gd2VhdGhlciBVVi1pbmRleFxuICAgIC8vICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAvLyAgICAgICAgICdwcmltYXJ5LXdlYXRoZXItVVYnLFxuICAgIC8vICAgICAgICAgJ1VWX2luZGV4JyxcbiAgICAvLyAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgIC8vICAgICAgICAgJ3ByaW1hcnktd2VhdGhlcidcbiAgICAvLyAgICAgKTtcbiAgICAvLyB9XG5cbiAgICAvLyAvLyBTZWNvbmRhcnkgRGF0YTpcbiAgICAvLyAvLyBmZWVscyBsaWtlOlxuICAgIC8vIC8vIEh1bWlkaXR5XG4gICAgLy8gLy8gQ2hhbmNlIG9mIHByZWNpcGl0YXRpb25cbiAgICAvLyAvLyB3aW5kIHNwZWVkXG4gICAgLy8gcG9wdWxhdGVTZWNvbmRhcnlXZWF0aGVyKCkge1xuICAgIC8vICAgICB0aGlzLmNsZWFyRGl2KCdzZWNvbmRhcnktd2VhdGhlcicpO1xuICAgIC8vICAgICAvLyBmZWVscyBsaWtlXG4gICAgLy8gICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgIC8vICAgICAgICAgJ2ZlZWxzLWxpa2UnLFxuICAgIC8vICAgICAgICAgYGZlZWxzX2xpa2VfJHt0aGlzLnRlbXBVbml0fWAsXG4gICAgLy8gICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAvLyAgICAgICAgICdzZWNvbmRhcnktd2VhdGhlcidcbiAgICAvLyAgICAgKTtcbiAgICAvLyAgICAgLy8gaHVtaWRpdHk7XG4gICAgLy8gICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgIC8vICAgICAgICAgJ2h1bWlkaXR5JyxcbiAgICAvLyAgICAgICAgIGBodW1pZGl0eWAsXG4gICAgLy8gICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAvLyAgICAgICAgICdzZWNvbmRhcnktd2VhdGhlcidcbiAgICAvLyAgICAgKTtcbiAgICAvLyAgICAgLy8gY2hhbmNlIG9mIHJhaW5cbiAgICAvLyAgICAgdGhpcy5jcmVhdGVOZXdEaXYoXG4gICAgLy8gICAgICAgICAncmFpbi1jaGFuY2UnLFxuICAgIC8vICAgICAgICAgJ3JhaW5fY2hhbmNlJyxcbiAgICAvLyAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgIC8vICAgICAgICAgJ3NlY29uZGFyeS13ZWF0aGVyJ1xuICAgIC8vICAgICApO1xuICAgIC8vIH1cblxuICAgIC8vIC8vIG1ldGhvZCB0byBjcmVhdGUgZGl2cyB1c2VkIGluIHRoZSAncG9wdWxhdGUtJyBtZXRob2RzXG4gICAgLy8gLy8gbWF5YmUgd2UgY2FuIGRlbGV0ZSB0aGUgXCJjbGFzc1wiIHN0dWZmLiBOb3Qgc3VyZSBpZiBpdCB3aWxsIGJlIHVzZWZ1bFxuICAgIC8vIGNyZWF0ZU5ld0RpdihpZCwgb2JqZWN0UmVmZXJlbmNlLCBjbGFzc05hbWUsIHBhcmVudERpdk5hbWUpIHtcbiAgICAvLyAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gICAgIG5ld0Rpdi5pZCA9IGlkO1xuICAgIC8vICAgICBuZXdEaXYuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIC8vICAgICBuZXdEaXYudGV4dENvbnRlbnQgPSB0aGlzLndlYXRoZXJPYmplY3QuY3VycmVudFdlYXRoZXJbb2JqZWN0UmVmZXJlbmNlXTtcbiAgICAvLyAgICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cGFyZW50RGl2TmFtZX1gKTtcbiAgICAvLyAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgLy8gfVxuXG4gICAgLy8gLy8gbWV0aG9kIHRvIGNsZWFyIGFsbCBjaGlsZCBlbGVtZW50cyBvZiBhIGRpdlxuICAgIC8vIC8vIG1heWJlIHR1cm4gdGhpcyBpbnRvIGEgZnVuY3Rpb24gaW5zdGVhZD9cbiAgICAvLyBjbGVhckRpdihjbGFzc05hbWUpIHtcbiAgICAvLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApO1xuICAgIC8vICAgICB3aGlsZSAoZGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAvLyAgICAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59XG5cbmV4cG9ydCB7IFdlYXRoZXJNYW5hZ2VyIH07XG4iLCJjbGFzcyBEb21NYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcih3ZWF0aGVyT2JqZWN0KSB7XG4gICAgICAgIHRoaXMud2VhdGhlck9iamVjdCA9IHdlYXRoZXJPYmplY3Q7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVQcmltYXJ5V2VhdGhlcigpIHtcbiAgICAgICAgdGhpcy5jbGVhckRpdigncHJpbWFyeS13ZWF0aGVyJyk7XG5cbiAgICAgICAgLy8gd2VhdGhlciB0ZXh0XG4gICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlci10ZXh0JyxcbiAgICAgICAgICAgICdjb25kaXRpb25fdGV4dCcsXG4gICAgICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXInXG4gICAgICAgICk7XG4gICAgICAgIC8vIFRlbXBlcmF0dXJlXG4gICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlci10ZW1wJyxcbiAgICAgICAgICAgIGB0ZW1wXyR7dGhpcy50ZW1wVW5pdH1gLFxuICAgICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgICAgICAgICAncHJpbWFyeS13ZWF0aGVyJ1xuICAgICAgICApO1xuICAgICAgICAvLyBsb2NhdGlvblxuICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXItbG9jYXRpb24nLFxuICAgICAgICAgICAgJ2xvY2F0aW9uJyxcbiAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlcidcbiAgICAgICAgKTtcbiAgICAgICAgLy8gcmVnaW9uXG4gICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlci1yZWdpb24nLFxuICAgICAgICAgICAgJ3JlZ2lvbicsXG4gICAgICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXInXG4gICAgICAgICk7XG4gICAgICAgIC8vIGNvdW50cnlcbiAgICAgICAgdGhpcy5jcmVhdGVOZXdEaXYoXG4gICAgICAgICAgICAncHJpbWFyeS13ZWF0aGVyLWNvdW50cnknLFxuICAgICAgICAgICAgJ2NvdW50cnknLFxuICAgICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgICAgICAgICAncHJpbWFyeS13ZWF0aGVyJ1xuICAgICAgICApO1xuICAgICAgICAvLyBkYXRlXG4gICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlci1kYXRlJyxcbiAgICAgICAgICAgICdkYXRlJyxcbiAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlcidcbiAgICAgICAgKTtcbiAgICAgICAgLy8gdGltZVxuICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXItdGltZScsXG4gICAgICAgICAgICAndGltZScsXG4gICAgICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXInXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gd2VhdGhlciBVVi1pbmRleFxuICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXItVVYnLFxuICAgICAgICAgICAgJ1VWX2luZGV4JyxcbiAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlcidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBTZWNvbmRhcnkgRGF0YTpcbiAgICAvLyBmZWVscyBsaWtlOlxuICAgIC8vIEh1bWlkaXR5XG4gICAgLy8gQ2hhbmNlIG9mIHByZWNpcGl0YXRpb25cbiAgICAvLyB3aW5kIHNwZWVkXG4gICAgcG9wdWxhdGVTZWNvbmRhcnlXZWF0aGVyKCkge1xuICAgICAgICB0aGlzLmNsZWFyRGl2KCdzZWNvbmRhcnktd2VhdGhlcicpO1xuICAgICAgICAvLyBmZWVscyBsaWtlXG4gICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgJ2ZlZWxzLWxpa2UnLFxuICAgICAgICAgICAgYGZlZWxzX2xpa2VfJHt0aGlzLnRlbXBVbml0fWAsXG4gICAgICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAgICAgICAgICdzZWNvbmRhcnktd2VhdGhlcidcbiAgICAgICAgKTtcbiAgICAgICAgLy8gaHVtaWRpdHk7XG4gICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgJ2h1bWlkaXR5JyxcbiAgICAgICAgICAgIGBodW1pZGl0eWAsXG4gICAgICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAgICAgICAgICdzZWNvbmRhcnktd2VhdGhlcidcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY2hhbmNlIG9mIHJhaW5cbiAgICAgICAgdGhpcy5jcmVhdGVOZXdEaXYoXG4gICAgICAgICAgICAncmFpbi1jaGFuY2UnLFxuICAgICAgICAgICAgJ3JhaW5fY2hhbmNlJyxcbiAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgJ3NlY29uZGFyeS13ZWF0aGVyJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIG1ldGhvZCB0byBjcmVhdGUgZGl2cyB1c2VkIGluIHRoZSAncG9wdWxhdGUtJyBtZXRob2RzXG4gICAgLy8gbWF5YmUgd2UgY2FuIGRlbGV0ZSB0aGUgXCJjbGFzc1wiIHN0dWZmLiBOb3Qgc3VyZSBpZiBpdCB3aWxsIGJlIHVzZWZ1bFxuICAgIGNyZWF0ZU5ld0RpdihpZCwgb2JqZWN0UmVmZXJlbmNlLCBjbGFzc05hbWUsIHBhcmVudERpdk5hbWUpIHtcbiAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0Rpdi5pZCA9IGlkO1xuICAgICAgICBuZXdEaXYuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICBuZXdEaXYudGV4dENvbnRlbnQgPSB0aGlzLndlYXRoZXJPYmplY3QuY3VycmVudFdlYXRoZXJbb2JqZWN0UmVmZXJlbmNlXTtcbiAgICAgICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cGFyZW50RGl2TmFtZX1gKTtcbiAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgfVxuXG4gICAgLy8gbWV0aG9kIHRvIGNsZWFyIGFsbCBjaGlsZCBlbGVtZW50cyBvZiBhIGRpdlxuICAgIC8vIG1heWJlIHR1cm4gdGhpcyBpbnRvIGEgZnVuY3Rpb24gaW5zdGVhZD9cbiAgICBjbGVhckRpdihjbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApO1xuICAgICAgICB3aGlsZSAoZGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IERvbU1hbmFnZXIgfTtcbiIsImNsYXNzIFdlYXRoZXJPYmplY3RzIHtcbiAgICBjb25zdHJ1Y3Rvcihqc29uRGF0YSkge1xuICAgICAgICAvLyB0aGlzLmN1cnJlbnRXZWF0aGVyID0gdGhpcy5jcmVhdGVDdXJyZW50V2VhdGhlcihqc29uRGF0YSk7XG4gICAgICAgIC8vIHRoaXMuZGFpbHlGb3JlY2FzdCA9IHRoaXMuY3JlYXRlRGFpbHlGb3JlY2FzdChqc29uRGF0YSwgMyk7XG4gICAgICAgIC8vIHRoaXMuaG91cmx5Rm9yZWNhc3QgPSB0aGlzLmNyZWF0ZUhvdXJseUZvcmVjYXN0KGpzb25EYXRhLCAyNCwgMCk7XG4gICAgICAgIHRoaXMuY3VycmVudFdlYXRoZXIgPSB7fTtcbiAgICAgICAgdGhpcy5kYWlseUZvcmVjYXN0ID0ge307XG4gICAgICAgIHRoaXMuaG91cmx5Rm9yZWNhc3QgPSB7fTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUN1cnJlbnRXZWF0aGVyKGpzb25EYXRhKTtcbiAgICAgICAgdGhpcy5jcmVhdGVEYWlseUZvcmVjYXN0KGpzb25EYXRhLCAzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVIb3VybHlGb3JlY2FzdChqc29uRGF0YSwgMjQsIDApO1xuICAgIH1cblxuICAgIGNyZWF0ZUN1cnJlbnRXZWF0aGVyKGpzb25EYXRhKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFdlYXRoZXIgPSB7XG4gICAgICAgICAgICBjb25kaXRpb25fdGV4dDoganNvbkRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgIGNvbmRpdGlvbl9pbWFnZToganNvbkRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBqc29uRGF0YS5sb2NhdGlvbi5uYW1lLFxuICAgICAgICAgICAgcmVnaW9uOiBqc29uRGF0YS5sb2NhdGlvbi5yZWdpb24sXG4gICAgICAgICAgICBjb3VudHJ5OiBqc29uRGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgICAgICAgZGF0ZToganNvbkRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgICAgICAgICAgdGltZToganNvbkRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgICAgICAgICAgdGVtcF9jOiBqc29uRGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICAgICAgICAgIHRlbXBfZjoganNvbkRhdGEuY3VycmVudC50ZW1wX2YsXG4gICAgICAgICAgICBVVl9pbmRleDoganNvbkRhdGEuY3VycmVudC5odW1pZGl0eSxcbiAgICAgICAgICAgIGZlZWxzX2xpa2VfYzoganNvbkRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICAgICAgICAgIGZlZWxzX2xpa2VfZjoganNvbkRhdGEuY3VycmVudC5mZWVsc2xpa2VfZixcbiAgICAgICAgICAgIGh1bWlkaXR5OiBqc29uRGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICAgICAgcmFpbl9jaGFuY2U6XG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxuICAgICAgICB9O1xuICAgICAgICAvLyByZXR1cm4gY3VycmVudFdlYXRoZXJPYmo7XG4gICAgfVxuXG4gICAgY3JlYXRlRGFpbHlGb3JlY2FzdChqc29uRGF0YSwgbnVtRGF5cykge1xuICAgICAgICB0aGlzLmRhaWx5Rm9yZWNhc3QgPSB7XG4gICAgICAgICAgICBkYXRlOiBbXSxcbiAgICAgICAgICAgIHRlbXBfaGlnaF9jOiBbXSxcbiAgICAgICAgICAgIHRlbXBfaGlnaF9mOiBbXSxcbiAgICAgICAgICAgIHRlbXBfbG93X2M6IFtdLFxuICAgICAgICAgICAgdGVtcF9sb3dfZjogW10sXG4gICAgICAgICAgICBjb25kaXRpb25faW1hZ2U6IFtdLFxuICAgICAgICAgICAgY29uZGl0aW9uX3RleHQ6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bURheXM7IGkrKykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coanNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLmRhaWx5Rm9yZWNhc3QuZGF0ZS5wdXNoKGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRhdGUpO1xuICAgICAgICAgICAgdGhpcy5kYWlseUZvcmVjYXN0LnRlbXBfaGlnaF9jLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfY1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuZGFpbHlGb3JlY2FzdC50ZW1wX2hpZ2hfZi5wdXNoKFxuICAgICAgICAgICAgICAgIGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2ZcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmRhaWx5Rm9yZWNhc3QudGVtcF9sb3dfYy5wdXNoKFxuICAgICAgICAgICAgICAgIGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2NcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmRhaWx5Rm9yZWNhc3QudGVtcF9sb3dfZi5wdXNoKFxuICAgICAgICAgICAgICAgIGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2ZcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmRhaWx5Rm9yZWNhc3QuY29uZGl0aW9uX2ltYWdlLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi5pY29uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5kYWlseUZvcmVjYXN0LmNvbmRpdGlvbl90ZXh0LnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi50ZXh0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybiBkYWlseUZvcmVjYXN0O1xuICAgIH1cblxuICAgIC8vIEhvdXJseTpcbiAgICAvLyB0aW1lXG4gICAgLy8gdGVtcFxuICAgIC8vIGNvbmRpdGlvbiBJbWFnZVxuICAgIGNyZWF0ZUhvdXJseUZvcmVjYXN0KGpzb25EYXRhLCBudW1Ib3VycywgZm9yZWNhc3REYXkpIHtcbiAgICAgICAgdGhpcy5ob3VybHlGb3JlY2FzdCA9IHtcbiAgICAgICAgICAgIHRpbWU6IFtdLFxuICAgICAgICAgICAgdGVtcF9jOiBbXSxcbiAgICAgICAgICAgIHRlbXBfZjogW10sXG4gICAgICAgICAgICBjb25kaXRpb25fdGV4dDogW10sXG4gICAgICAgICAgICBjb25kaXRpb25faW1hZ2U6IFtdLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtSG91cnM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ob3VybHlGb3JlY2FzdC50aW1lLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltmb3JlY2FzdERheV0udGltZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuaG91cmx5Rm9yZWNhc3QudGVtcF9jLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltmb3JlY2FzdERheV0udGVtcF9jXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5ob3VybHlGb3JlY2FzdC50ZW1wX2YucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ZvcmVjYXN0RGF5XS50ZW1wX2ZcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmhvdXJseUZvcmVjYXN0LmNvbmRpdGlvbl90ZXh0LnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltmb3JlY2FzdERheV0uY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5ob3VybHlGb3JlY2FzdC5jb25kaXRpb25faW1hZ2UucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ZvcmVjYXN0RGF5XS5jb25kaXRpb25cbiAgICAgICAgICAgICAgICAgICAgLmljb25cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmV0dXJuIGhvdXJseUZvcmVjYXN0O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgV2VhdGhlck9iamVjdHMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgV2VhdGhlck1hbmFnZXIgfSBmcm9tICcuL2NsYXNzZXMnO1xuXG5jb25zdCB3ZWF0aGVyTWFuT2JqID0gbmV3IFdlYXRoZXJNYW5hZ2VyKCk7XG53ZWF0aGVyTWFuT2JqLmdldFdlYXRoZXIoJ2F0bGFudGEnKTtcblxuLy8gYWNjZXB0IHVzZXIgaW5wdXQgYW5kIHNlYXJjaCBmb3Igd2VhdGhlciBkYXRhIGZvciBjaXR5XG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ1dHRvbicpO1xuY29uc3QgaW5wdXRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlci1pbnB1dCcpO1xuXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0Qm94LnZhbHVlO1xuICAgIHdlYXRoZXJNYW5PYmouZ2V0V2VhdGhlcihpbnB1dFZhbHVlKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9