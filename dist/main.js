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
        const currentWeatherObj = new _weather_objects__WEBPACK_IMPORTED_MODULE_0__.WeatherObjects(
            weatherData,
            this.tempUnit
        );
        this.weatherObject = currentWeatherObj;
        // testing//
        this.domManagerObject = new _display_manager__WEBPACK_IMPORTED_MODULE_1__.DomManager(
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
    constructor(weatherObject, tempUnit) {
        this.weatherObject = weatherObject;
        this.tempUnit = tempUnit;
    }

    populatePrimaryWeather() {
        this.clearDiv('primary-weather');

        // weather text
        this.createNewDiv(
            'primary-weather-text',
            'condition_text',
            'random-class',
            'primary-weather',
            'currentWeather'
        );
        // weather icon
        this.createNewDiv(
            'primary-weather-icon',
            'condition_image',
            'random-class',
            'primary-weather',
            'currentWeather',
            true
        );
        // Temperature
        console.log(this.tempUnit);
        this.createNewDiv(
            'primary-weather-temp',
            `temp_${this.tempUnit}`,
            'random-class',
            'primary-weather',
            'currentWeather'
        );
        // location
        this.createNewDiv(
            'primary-weather-location',
            'location',
            'random-class',
            'primary-weather',
            'currentWeather'
        );
        // region
        this.createNewDiv(
            'primary-weather-region',
            'region',
            'random-class',
            'primary-weather',
            'currentWeather'
        );
        // country
        this.createNewDiv(
            'primary-weather-country',
            'country',
            'random-class',
            'primary-weather',
            'currentWeather'
        );
        // date
        this.createNewDiv(
            'primary-weather-date',
            'date',
            'random-class',
            'primary-weather',
            'currentWeather'
        );
        // time
        this.createNewDiv(
            'primary-weather-time',
            'time',
            'random-class',
            'primary-weather',
            'currentWeather'
        );

        // weather UV-index
        this.createNewDiv(
            'primary-weather-UV',
            'UV_index',
            'random-class',
            'primary-weather',
            'currentWeather'
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
            'secondary-weather',
            'currentWeather'
        );
        // humidity;
        this.createNewDiv(
            'humidity',
            `humidity`,
            'random-class',
            'secondary-weather',
            'currentWeather'
        );
        // chance of rain
        this.createNewDiv(
            'rain-chance',
            'rain_chance',
            'random-class',
            'secondary-weather',
            'currentWeather'
        );
        // console.log(this.weatherObject['']);
    }

    populateDailyForecast() {
        this.clearDiv('forecast');
        const parentDiv = document.querySelector('#forecast');
        for (let i = 0; i < 3; i++) {
            const outerDiv = document.createElement('div');
            outerDiv.id = `daily-forecast-${i}`;
            parentDiv.appendChild(outerDiv);
            // outerDiv.className;
            // Daily date
            this.createNewDiv(
                `daily-date-${i}`,
                'date',
                'random-class',
                `daily-forecast-${i}`,
                'dailyForecast',
                false,
                true,
                i
            );
            // Daily temp high
            this.createNewDiv(
                `daily-temp-high-${i}`,
                `temp_high_${this.tempUnit}`,
                'random-class',
                `daily-forecast-${i}`,
                'dailyForecast',
                false,
                true,
                i
            );
            // Daily temp low
            this.createNewDiv(
                `daily-temp-low-${i}`,
                `temp_low_${this.tempUnit}`,
                'random-class',
                `daily-forecast-${i}`,
                'dailyForecast',
                false,
                true,
                i
            );
            // Daily weather icon
            this.createNewDiv(
                `daily-icon-${i}`,
                `condition_image`,
                'random-class',
                `daily-forecast-${i}`,
                'dailyForecast',
                true,
                true,
                i
            );

            // parentDiv.appendChild(outerDiv);
        }
    }

    populateHourlyForecast() {
        this.clearDiv('forecast');
        const parentDiv = document.querySelector('#forecast');
        for (let i = 0; i < 24; i++) {
            const outerDiv = document.createElement('div');
            outerDiv.id = `hourly-forecast-${i}`;
            parentDiv.appendChild(outerDiv);

            // hourly time
            this.createNewDiv(
                `hourly-time-${i}`,
                'time',
                'random-class',
                `hourly-forecast-${i}`,
                'hourlyForecast',
                false,
                true,
                i
            );
            // hourly time
            this.createNewDiv(
                `hourly-temp-${i}`,
                `temp_${this.tempUnit}`,
                'random-class',
                `hourly-forecast-${i}`,
                'hourlyForecast',
                false,
                true,
                i
            );
            // hourly weather icon
            this.createNewDiv(
                `hourly-icon-${i}`,
                `condition_image`,
                'random-class',
                `hourly-forecast-${i}`,
                'hourlyForecast',
                true,
                true,
                i
            );
        }
    }

    // method to create divs used in the 'populate-' methods
    // maybe we can delete the "class" stuff. Not sure if it will be useful
    // createNewDiv(id, objectReference, className, parentDivName) {
    //     const newDiv = document.createElement('div');
    //     newDiv.id = id;
    //     newDiv.className = className;
    //     newDiv.textContent = this.weatherObject.currentWeather[objectReference];
    //     const parentDiv = document.querySelector(`.${parentDivName}`);
    //     parentDiv.appendChild(newDiv);
    // }

    // Method to create a new div
    // inputs:
    // id for new div.currentWeather
    // object reference to find info in the dictionary
    // class name for the new div
    // parentDiv name so that we know where to put the new div
    // weatherReference tells us if we're working with current/daily/hourly data
    // isImage to determine what kind of div to create
    createNewDiv(
        id,
        objectReference,
        className,
        parentDivName,
        weatherReference,
        isImage = false,
        isArray = false,
        arrayIndex = 0
    ) {
        const newElement = isImage
            ? document.createElement('img')
            : document.createElement('div');
        newElement.id = id;
        newElement.className = className;
        if (isImage && isArray) {
            newElement.src = `https:${this.weatherObject[weatherReference][objectReference][arrayIndex]}`;
            newElement.alt = objectReference;
        } else if (isImage) {
            newElement.src = `https:${this.weatherObject[weatherReference][objectReference]}`;
            newElement.alt = objectReference;
        } else if (isArray) {
            newElement.textContent =
                this.weatherObject[weatherReference][objectReference][
                    arrayIndex
                ];
            console.log(
                this.weatherObject[weatherReference][objectReference][
                    arrayIndex
                ]
            );
        } else {
            newElement.textContent =
                this.weatherObject.currentWeather[objectReference];
        }
        const parentDiv = document.querySelector(`#${parentDivName}`);
        parentDiv.appendChild(newElement);
    }

    // method to clear all child elements of a div given class name
    // maybe turn this into a function instead?
    // change clearDiv to accept ID as an input instead
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
                jsonData.forecast.forecastday[0].hour[i].time
            );
            this.hourlyForecast.temp_c.push(
                jsonData.forecast.forecastday[0].hour[i].temp_c
            );
            this.hourlyForecast.temp_f.push(
                jsonData.forecast.forecastday[0].hour[i].temp_f
            );
            this.hourlyForecast.condition_text.push(
                jsonData.forecast.forecastday[0].hour[i].condition.text
            );
            this.hourlyForecast.condition_image.push(
                jsonData.forecast.forecastday[0].hour[i].condition.icon
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUwQjs7Ozs7OztVQ3hHMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yQzs7QUFFM0MsMEJBQTBCLG9EQUFjO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2Rpc3BsYXktbWFuYWdlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3dlYXRoZXItb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGkga2V5OiA3MmIxYjZhMWZkM2Q0YzgyYjJjNzI0MTQyNDE1MDVcblxuLy8gUHJpbWFyeSBXZWF0aGVyOlxuLy8gY29uZGl0aW9uIHRleHQ6XG4vLyBsb2NhdGlvblxuLy8gZGF0ZTogZGF5LCBkYXRlXG4vLyB0aW1lOlxuLy8gY29uZGl0aW9uIEltYWdlXG4vLyBVViBpbmRleFxuXG4vLyBTZWNvbmRhcnkgRGF0YTpcbi8vIGZlZWxzIGxpa2U6XG4vLyBIdW1pZGl0eVxuLy8gQ2hhbmNlIG9mIHByZWNpcGl0YXRpb25cbi8vIHdpbmQgc3BlZWRcblxuLy8gRm9yZWNhc3QgZGF0YVxuLy8gZGFpbHk6XG4vLyBkYXRlXG4vLyB0ZW1wIGhpZ2hcbi8vIHRlbXAgbG93XG4vLyBjb25kaXRpb24gSW1hZ2VcblxuLy8gSG91cmx5OlxuLy8gdGltZVxuLy8gdGVtcFxuLy8gY29uZGl0aW9uIEltYWdlXG5pbXBvcnQgeyBXZWF0aGVyT2JqZWN0cyB9IGZyb20gJy4vd2VhdGhlci1vYmplY3RzJztcbmltcG9ydCB7IERvbU1hbmFnZXIgfSBmcm9tICcuL2Rpc3BsYXktbWFuYWdlcic7XG5cbmNsYXNzIFdlYXRoZXJNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50ZW1wID0gJyc7XG4gICAgICAgIC8vIHRoaXMud2VhdGhlck9iamVjdEFycmF5ID0gW107XG4gICAgICAgIHRoaXMud2VhdGhlck9iamVjdCA9IFtdO1xuICAgICAgICB0aGlzLmRvbU1hbmFnZXJPYmplY3QgPSBbXTtcbiAgICAgICAgdGhpcy50ZW1wVW5pdCA9ICdmJzsgLy8gMCBmb3IgRiwgMSBmb3IgQy4gV3JpdGUgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCBjaGFuZ2VzIHRlbXAgdW5pdCBvbiBjbGljay90b2dnbGVcbiAgICAgICAgdGhpcy5kYWlseUhvdXJseSA9ICdkJztcbiAgICB9XG5cbiAgICBhc3luYyBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT03MmIxYjZhMWZkM2Q0YzgyYjJjNzI0MTQyNDE1MDUmcT0ke2xvY2F0aW9ufSZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ub2AsXG4gICAgICAgICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBjdXJyZW50V2VhdGhlck9iaiA9IG5ldyBXZWF0aGVyT2JqZWN0cyhcbiAgICAgICAgICAgIHdlYXRoZXJEYXRhLFxuICAgICAgICAgICAgdGhpcy50ZW1wVW5pdFxuICAgICAgICApO1xuICAgICAgICB0aGlzLndlYXRoZXJPYmplY3QgPSBjdXJyZW50V2VhdGhlck9iajtcbiAgICAgICAgLy8gdGVzdGluZy8vXG4gICAgICAgIHRoaXMuZG9tTWFuYWdlck9iamVjdCA9IG5ldyBEb21NYW5hZ2VyKFxuICAgICAgICAgICAgdGhpcy53ZWF0aGVyT2JqZWN0LFxuICAgICAgICAgICAgdGhpcy50ZW1wVW5pdFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmRvbU1hbmFnZXJPYmplY3QucG9wdWxhdGVQcmltYXJ5V2VhdGhlcigpO1xuICAgICAgICB0aGlzLmRvbU1hbmFnZXJPYmplY3QucG9wdWxhdGVTZWNvbmRhcnlXZWF0aGVyKCk7XG4gICAgICAgIHRoaXMuZG9tTWFuYWdlck9iamVjdC5wb3B1bGF0ZURhaWx5Rm9yZWNhc3QoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyT2JqLmN1cnJlbnRXZWF0aGVyKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXJPYmouZGFpbHlGb3JlY2FzdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyT2JqLmhvdXJseUZvcmVjYXN0KTtcbiAgICAgICAgLy8gYWRkIGNhdGNoL3RoZW4vIHdoYXRldmVyIHN0YXRlbWVudCB0byBjaGVjayBmb3IgZXJyb3JzXG4gICAgfVxuXG4gICAgcG9wdWxhdGVEYWlseSgpIHtcbiAgICAgICAgdGhpcy5kb21NYW5hZ2VyT2JqZWN0LnBvcHVsYXRlRGFpbHlGb3JlY2FzdCgpO1xuICAgIH1cblxuICAgIHBvcHVsYXRlSG91cmx5KCkge1xuICAgICAgICB0aGlzLmRvbU1hbmFnZXJPYmplY3QucG9wdWxhdGVIb3VybHlGb3JlY2FzdCgpO1xuICAgIH1cblxuICAgIHBvcHVsYXRlQ3VycmVudCgpIHtcbiAgICAgICAgdGhpcy5kb21NYW5hZ2VyT2JqZWN0LnBvcHVsYXRlUHJpbWFyeVdlYXRoZXIoKTtcbiAgICAgICAgdGhpcy5kb21NYW5hZ2VyT2JqZWN0LnBvcHVsYXRlU2Vjb25kYXJ5V2VhdGhlcigpO1xuICAgIH1cblxuICAgIHRvZ2dsZVRlbXBVbml0KCkge1xuICAgICAgICBpZiAodGhpcy50ZW1wVW5pdCA9PT0gJ2YnKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBVbml0ID0gJ2MnO1xuICAgICAgICAgICAgdGhpcy5kb21NYW5hZ2VyT2JqZWN0LnRlbXBVbml0ID0gJ2MnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50ZW1wVW5pdCA9ICdmJztcbiAgICAgICAgICAgIHRoaXMuZG9tTWFuYWdlck9iamVjdC50ZW1wVW5pdCA9ICdmJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZURhaWx5SG91cmx5KCkge1xuICAgICAgICBpZiAodGhpcy5kYWlseUhvdXJseSA9PT0gJ2QnKSB7XG4gICAgICAgICAgICB0aGlzLmRhaWx5SG91cmx5ID0gJ2gnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYWlseUhvdXJseSA9ICdkJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgV2VhdGhlck1hbmFnZXIgfTtcbiIsImNsYXNzIERvbU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKHdlYXRoZXJPYmplY3QsIHRlbXBVbml0KSB7XG4gICAgICAgIHRoaXMud2VhdGhlck9iamVjdCA9IHdlYXRoZXJPYmplY3Q7XG4gICAgICAgIHRoaXMudGVtcFVuaXQgPSB0ZW1wVW5pdDtcbiAgICB9XG5cbiAgICBwb3B1bGF0ZVByaW1hcnlXZWF0aGVyKCkge1xuICAgICAgICB0aGlzLmNsZWFyRGl2KCdwcmltYXJ5LXdlYXRoZXInKTtcblxuICAgICAgICAvLyB3ZWF0aGVyIHRleHRcbiAgICAgICAgdGhpcy5jcmVhdGVOZXdEaXYoXG4gICAgICAgICAgICAncHJpbWFyeS13ZWF0aGVyLXRleHQnLFxuICAgICAgICAgICAgJ2NvbmRpdGlvbl90ZXh0JyxcbiAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlcicsXG4gICAgICAgICAgICAnY3VycmVudFdlYXRoZXInXG4gICAgICAgICk7XG4gICAgICAgIC8vIHdlYXRoZXIgaWNvblxuICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXItaWNvbicsXG4gICAgICAgICAgICAnY29uZGl0aW9uX2ltYWdlJyxcbiAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlcicsXG4gICAgICAgICAgICAnY3VycmVudFdlYXRoZXInLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICAvLyBUZW1wZXJhdHVyZVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRlbXBVbml0KTtcbiAgICAgICAgdGhpcy5jcmVhdGVOZXdEaXYoXG4gICAgICAgICAgICAncHJpbWFyeS13ZWF0aGVyLXRlbXAnLFxuICAgICAgICAgICAgYHRlbXBfJHt0aGlzLnRlbXBVbml0fWAsXG4gICAgICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXInLFxuICAgICAgICAgICAgJ2N1cnJlbnRXZWF0aGVyJ1xuICAgICAgICApO1xuICAgICAgICAvLyBsb2NhdGlvblxuICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXItbG9jYXRpb24nLFxuICAgICAgICAgICAgJ2xvY2F0aW9uJyxcbiAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlcicsXG4gICAgICAgICAgICAnY3VycmVudFdlYXRoZXInXG4gICAgICAgICk7XG4gICAgICAgIC8vIHJlZ2lvblxuICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXItcmVnaW9uJyxcbiAgICAgICAgICAgICdyZWdpb24nLFxuICAgICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgICAgICAgICAncHJpbWFyeS13ZWF0aGVyJyxcbiAgICAgICAgICAgICdjdXJyZW50V2VhdGhlcidcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY291bnRyeVxuICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXItY291bnRyeScsXG4gICAgICAgICAgICAnY291bnRyeScsXG4gICAgICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXInLFxuICAgICAgICAgICAgJ2N1cnJlbnRXZWF0aGVyJ1xuICAgICAgICApO1xuICAgICAgICAvLyBkYXRlXG4gICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlci1kYXRlJyxcbiAgICAgICAgICAgICdkYXRlJyxcbiAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlcicsXG4gICAgICAgICAgICAnY3VycmVudFdlYXRoZXInXG4gICAgICAgICk7XG4gICAgICAgIC8vIHRpbWVcbiAgICAgICAgdGhpcy5jcmVhdGVOZXdEaXYoXG4gICAgICAgICAgICAncHJpbWFyeS13ZWF0aGVyLXRpbWUnLFxuICAgICAgICAgICAgJ3RpbWUnLFxuICAgICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgICAgICAgICAncHJpbWFyeS13ZWF0aGVyJyxcbiAgICAgICAgICAgICdjdXJyZW50V2VhdGhlcidcbiAgICAgICAgKTtcblxuICAgICAgICAvLyB3ZWF0aGVyIFVWLWluZGV4XG4gICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlci1VVicsXG4gICAgICAgICAgICAnVVZfaW5kZXgnLFxuICAgICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgICAgICAgICAncHJpbWFyeS13ZWF0aGVyJyxcbiAgICAgICAgICAgICdjdXJyZW50V2VhdGhlcidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBTZWNvbmRhcnkgRGF0YTpcbiAgICAvLyBmZWVscyBsaWtlOlxuICAgIC8vIEh1bWlkaXR5XG4gICAgLy8gQ2hhbmNlIG9mIHByZWNpcGl0YXRpb25cbiAgICAvLyB3aW5kIHNwZWVkXG4gICAgcG9wdWxhdGVTZWNvbmRhcnlXZWF0aGVyKCkge1xuICAgICAgICB0aGlzLmNsZWFyRGl2KCdzZWNvbmRhcnktd2VhdGhlcicpO1xuICAgICAgICAvLyBmZWVscyBsaWtlXG4gICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgJ2ZlZWxzLWxpa2UnLFxuICAgICAgICAgICAgYGZlZWxzX2xpa2VfJHt0aGlzLnRlbXBVbml0fWAsXG4gICAgICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAgICAgICAgICdzZWNvbmRhcnktd2VhdGhlcicsXG4gICAgICAgICAgICAnY3VycmVudFdlYXRoZXInXG4gICAgICAgICk7XG4gICAgICAgIC8vIGh1bWlkaXR5O1xuICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICdodW1pZGl0eScsXG4gICAgICAgICAgICBgaHVtaWRpdHlgLFxuICAgICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgICAgICAgICAnc2Vjb25kYXJ5LXdlYXRoZXInLFxuICAgICAgICAgICAgJ2N1cnJlbnRXZWF0aGVyJ1xuICAgICAgICApO1xuICAgICAgICAvLyBjaGFuY2Ugb2YgcmFpblxuICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICdyYWluLWNoYW5jZScsXG4gICAgICAgICAgICAncmFpbl9jaGFuY2UnLFxuICAgICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgICAgICAgICAnc2Vjb25kYXJ5LXdlYXRoZXInLFxuICAgICAgICAgICAgJ2N1cnJlbnRXZWF0aGVyJ1xuICAgICAgICApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLndlYXRoZXJPYmplY3RbJyddKTtcbiAgICB9XG5cbiAgICBwb3B1bGF0ZURhaWx5Rm9yZWNhc3QoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJEaXYoJ2ZvcmVjYXN0Jyk7XG4gICAgICAgIGNvbnN0IHBhcmVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JlY2FzdCcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG91dGVyRGl2LmlkID0gYGRhaWx5LWZvcmVjYXN0LSR7aX1gO1xuICAgICAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKG91dGVyRGl2KTtcbiAgICAgICAgICAgIC8vIG91dGVyRGl2LmNsYXNzTmFtZTtcbiAgICAgICAgICAgIC8vIERhaWx5IGRhdGVcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgICAgIGBkYWlseS1kYXRlLSR7aX1gLFxuICAgICAgICAgICAgICAgICdkYXRlJyxcbiAgICAgICAgICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAgICAgICAgICAgICBgZGFpbHktZm9yZWNhc3QtJHtpfWAsXG4gICAgICAgICAgICAgICAgJ2RhaWx5Rm9yZWNhc3QnLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIERhaWx5IHRlbXAgaGlnaFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVOZXdEaXYoXG4gICAgICAgICAgICAgICAgYGRhaWx5LXRlbXAtaGlnaC0ke2l9YCxcbiAgICAgICAgICAgICAgICBgdGVtcF9oaWdoXyR7dGhpcy50ZW1wVW5pdH1gLFxuICAgICAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgICAgIGBkYWlseS1mb3JlY2FzdC0ke2l9YCxcbiAgICAgICAgICAgICAgICAnZGFpbHlGb3JlY2FzdCcsXG4gICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gRGFpbHkgdGVtcCBsb3dcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgICAgIGBkYWlseS10ZW1wLWxvdy0ke2l9YCxcbiAgICAgICAgICAgICAgICBgdGVtcF9sb3dfJHt0aGlzLnRlbXBVbml0fWAsXG4gICAgICAgICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgICAgICAgICAgICAgYGRhaWx5LWZvcmVjYXN0LSR7aX1gLFxuICAgICAgICAgICAgICAgICdkYWlseUZvcmVjYXN0JyxcbiAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBEYWlseSB3ZWF0aGVyIGljb25cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgICAgIGBkYWlseS1pY29uLSR7aX1gLFxuICAgICAgICAgICAgICAgIGBjb25kaXRpb25faW1hZ2VgLFxuICAgICAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgICAgIGBkYWlseS1mb3JlY2FzdC0ke2l9YCxcbiAgICAgICAgICAgICAgICAnZGFpbHlGb3JlY2FzdCcsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIHBhcmVudERpdi5hcHBlbmRDaGlsZChvdXRlckRpdik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3B1bGF0ZUhvdXJseUZvcmVjYXN0KCkge1xuICAgICAgICB0aGlzLmNsZWFyRGl2KCdmb3JlY2FzdCcpO1xuICAgICAgICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9yZWNhc3QnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgb3V0ZXJEaXYuaWQgPSBgaG91cmx5LWZvcmVjYXN0LSR7aX1gO1xuICAgICAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKG91dGVyRGl2KTtcblxuICAgICAgICAgICAgLy8gaG91cmx5IHRpbWVcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgICAgIGBob3VybHktdGltZS0ke2l9YCxcbiAgICAgICAgICAgICAgICAndGltZScsXG4gICAgICAgICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgICAgICAgICAgICAgYGhvdXJseS1mb3JlY2FzdC0ke2l9YCxcbiAgICAgICAgICAgICAgICAnaG91cmx5Rm9yZWNhc3QnLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIGhvdXJseSB0aW1lXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICAgICBgaG91cmx5LXRlbXAtJHtpfWAsXG4gICAgICAgICAgICAgICAgYHRlbXBfJHt0aGlzLnRlbXBVbml0fWAsXG4gICAgICAgICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgICAgICAgICAgICAgYGhvdXJseS1mb3JlY2FzdC0ke2l9YCxcbiAgICAgICAgICAgICAgICAnaG91cmx5Rm9yZWNhc3QnLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIGhvdXJseSB3ZWF0aGVyIGljb25cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgICAgIGBob3VybHktaWNvbi0ke2l9YCxcbiAgICAgICAgICAgICAgICBgY29uZGl0aW9uX2ltYWdlYCxcbiAgICAgICAgICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAgICAgICAgICAgICBgaG91cmx5LWZvcmVjYXN0LSR7aX1gLFxuICAgICAgICAgICAgICAgICdob3VybHlGb3JlY2FzdCcsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtZXRob2QgdG8gY3JlYXRlIGRpdnMgdXNlZCBpbiB0aGUgJ3BvcHVsYXRlLScgbWV0aG9kc1xuICAgIC8vIG1heWJlIHdlIGNhbiBkZWxldGUgdGhlIFwiY2xhc3NcIiBzdHVmZi4gTm90IHN1cmUgaWYgaXQgd2lsbCBiZSB1c2VmdWxcbiAgICAvLyBjcmVhdGVOZXdEaXYoaWQsIG9iamVjdFJlZmVyZW5jZSwgY2xhc3NOYW1lLCBwYXJlbnREaXZOYW1lKSB7XG4gICAgLy8gICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vICAgICBuZXdEaXYuaWQgPSBpZDtcbiAgICAvLyAgICAgbmV3RGl2LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAvLyAgICAgbmV3RGl2LnRleHRDb250ZW50ID0gdGhpcy53ZWF0aGVyT2JqZWN0LmN1cnJlbnRXZWF0aGVyW29iamVjdFJlZmVyZW5jZV07XG4gICAgLy8gICAgIGNvbnN0IHBhcmVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BhcmVudERpdk5hbWV9YCk7XG4gICAgLy8gICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIC8vIH1cblxuICAgIC8vIE1ldGhvZCB0byBjcmVhdGUgYSBuZXcgZGl2XG4gICAgLy8gaW5wdXRzOlxuICAgIC8vIGlkIGZvciBuZXcgZGl2LmN1cnJlbnRXZWF0aGVyXG4gICAgLy8gb2JqZWN0IHJlZmVyZW5jZSB0byBmaW5kIGluZm8gaW4gdGhlIGRpY3Rpb25hcnlcbiAgICAvLyBjbGFzcyBuYW1lIGZvciB0aGUgbmV3IGRpdlxuICAgIC8vIHBhcmVudERpdiBuYW1lIHNvIHRoYXQgd2Uga25vdyB3aGVyZSB0byBwdXQgdGhlIG5ldyBkaXZcbiAgICAvLyB3ZWF0aGVyUmVmZXJlbmNlIHRlbGxzIHVzIGlmIHdlJ3JlIHdvcmtpbmcgd2l0aCBjdXJyZW50L2RhaWx5L2hvdXJseSBkYXRhXG4gICAgLy8gaXNJbWFnZSB0byBkZXRlcm1pbmUgd2hhdCBraW5kIG9mIGRpdiB0byBjcmVhdGVcbiAgICBjcmVhdGVOZXdEaXYoXG4gICAgICAgIGlkLFxuICAgICAgICBvYmplY3RSZWZlcmVuY2UsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgcGFyZW50RGl2TmFtZSxcbiAgICAgICAgd2VhdGhlclJlZmVyZW5jZSxcbiAgICAgICAgaXNJbWFnZSA9IGZhbHNlLFxuICAgICAgICBpc0FycmF5ID0gZmFsc2UsXG4gICAgICAgIGFycmF5SW5kZXggPSAwXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBpc0ltYWdlXG4gICAgICAgICAgICA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdFbGVtZW50LmlkID0gaWQ7XG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICBpZiAoaXNJbWFnZSAmJiBpc0FycmF5KSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnNyYyA9IGBodHRwczoke3RoaXMud2VhdGhlck9iamVjdFt3ZWF0aGVyUmVmZXJlbmNlXVtvYmplY3RSZWZlcmVuY2VdW2FycmF5SW5kZXhdfWA7XG4gICAgICAgICAgICBuZXdFbGVtZW50LmFsdCA9IG9iamVjdFJlZmVyZW5jZTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0ltYWdlKSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnNyYyA9IGBodHRwczoke3RoaXMud2VhdGhlck9iamVjdFt3ZWF0aGVyUmVmZXJlbmNlXVtvYmplY3RSZWZlcmVuY2VdfWA7XG4gICAgICAgICAgICBuZXdFbGVtZW50LmFsdCA9IG9iamVjdFJlZmVyZW5jZTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXJPYmplY3Rbd2VhdGhlclJlZmVyZW5jZV1bb2JqZWN0UmVmZXJlbmNlXVtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlJbmRleFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXJPYmplY3Rbd2VhdGhlclJlZmVyZW5jZV1bb2JqZWN0UmVmZXJlbmNlXVtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlJbmRleFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXJPYmplY3QuY3VycmVudFdlYXRoZXJbb2JqZWN0UmVmZXJlbmNlXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwYXJlbnREaXZOYW1lfWApO1xuICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gbWV0aG9kIHRvIGNsZWFyIGFsbCBjaGlsZCBlbGVtZW50cyBvZiBhIGRpdiBnaXZlbiBjbGFzcyBuYW1lXG4gICAgLy8gbWF5YmUgdHVybiB0aGlzIGludG8gYSBmdW5jdGlvbiBpbnN0ZWFkP1xuICAgIC8vIGNoYW5nZSBjbGVhckRpdiB0byBhY2NlcHQgSUQgYXMgYW4gaW5wdXQgaW5zdGVhZFxuICAgIGNsZWFyRGl2KGNsYXNzTmFtZSkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XG4gICAgICAgIHdoaWxlIChkaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgRG9tTWFuYWdlciB9O1xuIiwiY2xhc3MgV2VhdGhlck9iamVjdHMge1xuICAgIGNvbnN0cnVjdG9yKGpzb25EYXRhKSB7XG4gICAgICAgIC8vIHRoaXMuY3VycmVudFdlYXRoZXIgPSB0aGlzLmNyZWF0ZUN1cnJlbnRXZWF0aGVyKGpzb25EYXRhKTtcbiAgICAgICAgLy8gdGhpcy5kYWlseUZvcmVjYXN0ID0gdGhpcy5jcmVhdGVEYWlseUZvcmVjYXN0KGpzb25EYXRhLCAzKTtcbiAgICAgICAgLy8gdGhpcy5ob3VybHlGb3JlY2FzdCA9IHRoaXMuY3JlYXRlSG91cmx5Rm9yZWNhc3QoanNvbkRhdGEsIDI0LCAwKTtcbiAgICAgICAgdGhpcy5jdXJyZW50V2VhdGhlciA9IHt9O1xuICAgICAgICB0aGlzLmRhaWx5Rm9yZWNhc3QgPSB7fTtcbiAgICAgICAgdGhpcy5ob3VybHlGb3JlY2FzdCA9IHt9O1xuXG4gICAgICAgIHRoaXMuY3JlYXRlQ3VycmVudFdlYXRoZXIoanNvbkRhdGEpO1xuICAgICAgICB0aGlzLmNyZWF0ZURhaWx5Rm9yZWNhc3QoanNvbkRhdGEsIDMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUhvdXJseUZvcmVjYXN0KGpzb25EYXRhLCAyNCwgMCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ3VycmVudFdlYXRoZXIoanNvbkRhdGEpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50V2VhdGhlciA9IHtcbiAgICAgICAgICAgIGNvbmRpdGlvbl90ZXh0OiBqc29uRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgY29uZGl0aW9uX2ltYWdlOiBqc29uRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLFxuICAgICAgICAgICAgbG9jYXRpb246IGpzb25EYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgICAgICByZWdpb246IGpzb25EYXRhLmxvY2F0aW9uLnJlZ2lvbixcbiAgICAgICAgICAgIGNvdW50cnk6IGpzb25EYXRhLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICAgICAgICBkYXRlOiBqc29uRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXG4gICAgICAgICAgICB0aW1lOiBqc29uRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXG4gICAgICAgICAgICB0ZW1wX2M6IGpzb25EYXRhLmN1cnJlbnQudGVtcF9jLFxuICAgICAgICAgICAgdGVtcF9mOiBqc29uRGF0YS5jdXJyZW50LnRlbXBfZixcbiAgICAgICAgICAgIFVWX2luZGV4OiBqc29uRGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICAgICAgZmVlbHNfbGlrZV9jOiBqc29uRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgICAgICAgICAgZmVlbHNfbGlrZV9mOiBqc29uRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgICAgICAgICAgaHVtaWRpdHk6IGpzb25EYXRhLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgICAgICAgICByYWluX2NoYW5jZTpcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHJldHVybiBjdXJyZW50V2VhdGhlck9iajtcbiAgICB9XG5cbiAgICBjcmVhdGVEYWlseUZvcmVjYXN0KGpzb25EYXRhLCBudW1EYXlzKSB7XG4gICAgICAgIHRoaXMuZGFpbHlGb3JlY2FzdCA9IHtcbiAgICAgICAgICAgIGRhdGU6IFtdLFxuICAgICAgICAgICAgdGVtcF9oaWdoX2M6IFtdLFxuICAgICAgICAgICAgdGVtcF9oaWdoX2Y6IFtdLFxuICAgICAgICAgICAgdGVtcF9sb3dfYzogW10sXG4gICAgICAgICAgICB0ZW1wX2xvd19mOiBbXSxcbiAgICAgICAgICAgIGNvbmRpdGlvbl9pbWFnZTogW10sXG4gICAgICAgICAgICBjb25kaXRpb25fdGV4dDogW10sXG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRGF5czsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXRlKTtcbiAgICAgICAgICAgIHRoaXMuZGFpbHlGb3JlY2FzdC5kYXRlLnB1c2goanNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLmRhaWx5Rm9yZWNhc3QudGVtcF9oaWdoX2MucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9jXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5kYWlseUZvcmVjYXN0LnRlbXBfaGlnaF9mLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfZlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuZGFpbHlGb3JlY2FzdC50ZW1wX2xvd19jLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfY1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuZGFpbHlGb3JlY2FzdC50ZW1wX2xvd19mLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfZlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuZGFpbHlGb3JlY2FzdC5jb25kaXRpb25faW1hZ2UucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLmljb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmRhaWx5Rm9yZWNhc3QuY29uZGl0aW9uX3RleHQucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLnRleHRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmV0dXJuIGRhaWx5Rm9yZWNhc3Q7XG4gICAgfVxuXG4gICAgLy8gSG91cmx5OlxuICAgIC8vIHRpbWVcbiAgICAvLyB0ZW1wXG4gICAgLy8gY29uZGl0aW9uIEltYWdlXG4gICAgY3JlYXRlSG91cmx5Rm9yZWNhc3QoanNvbkRhdGEsIG51bUhvdXJzLCBmb3JlY2FzdERheSkge1xuICAgICAgICB0aGlzLmhvdXJseUZvcmVjYXN0ID0ge1xuICAgICAgICAgICAgdGltZTogW10sXG4gICAgICAgICAgICB0ZW1wX2M6IFtdLFxuICAgICAgICAgICAgdGVtcF9mOiBbXSxcbiAgICAgICAgICAgIGNvbmRpdGlvbl90ZXh0OiBbXSxcbiAgICAgICAgICAgIGNvbmRpdGlvbl9pbWFnZTogW10sXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Ib3VyczsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmhvdXJseUZvcmVjYXN0LnRpbWUucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ldLnRpbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmhvdXJseUZvcmVjYXN0LnRlbXBfYy5wdXNoKFxuICAgICAgICAgICAgICAgIGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaV0udGVtcF9jXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5ob3VybHlGb3JlY2FzdC50ZW1wX2YucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ldLnRlbXBfZlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuaG91cmx5Rm9yZWNhc3QuY29uZGl0aW9uX3RleHQucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ldLmNvbmRpdGlvbi50ZXh0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5ob3VybHlGb3JlY2FzdC5jb25kaXRpb25faW1hZ2UucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ldLmNvbmRpdGlvbi5pY29uXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybiBob3VybHlGb3JlY2FzdDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFdlYXRoZXJPYmplY3RzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFdlYXRoZXJNYW5hZ2VyIH0gZnJvbSAnLi9jbGFzc2VzJztcblxuY29uc3Qgd2VhdGhlck1hbk9iaiA9IG5ldyBXZWF0aGVyTWFuYWdlcigpO1xud2VhdGhlck1hbk9iai5nZXRXZWF0aGVyKCdhdGxhbnRhJyk7XG5cbi8vIGFjY2VwdCB1c2VyIGlucHV0IGFuZCBzZWFyY2ggZm9yIHdlYXRoZXIgZGF0YSBmb3IgY2l0eVxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1idXR0b24nKTtcbmNvbnN0IGRhaWx5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhaWx5LWJ1dHRvbicpO1xuY29uc3QgaG91cmx5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdXJseS1idXR0b24nKTtcbmNvbnN0IHRlbXBUb2dnbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcC10b2dnbGUnKTtcblxuY29uc3QgaW5wdXRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlci1pbnB1dCcpO1xuXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0Qm94LnZhbHVlO1xuICAgIHdlYXRoZXJNYW5PYmouZ2V0V2VhdGhlcihpbnB1dFZhbHVlKTtcbn0pO1xuXG5kYWlseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3ZWF0aGVyTWFuT2JqLnBvcHVsYXRlRGFpbHkoKTtcbiAgICB3ZWF0aGVyTWFuT2JqLnRvZ2dsZURhaWx5SG91cmx5KCk7XG59KTtcblxuaG91cmx5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdlYXRoZXJNYW5PYmoucG9wdWxhdGVIb3VybHkoKTtcbiAgICB3ZWF0aGVyTWFuT2JqLnRvZ2dsZURhaWx5SG91cmx5KCk7XG59KTtcblxuLy8gRm9yIHRoaXMgbGlzdGVuZXIgd2Ugd2FudCB0byBjaGFuZ2UgdGhlIHVuaXQgb2YgbWVhc3VyZW1lbnQgb2YgdGhlIHRlbXAsXG4vLyBob3dldmVyIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHRoYXQgd2hlbiB3ZSByZXBvcHVsYXRlIGRhaWx5IChvciBob3VybHkpXG4vLyB0aGF0IGl0IGlzIHBvcHVsYXRlZCBhZ2FpbiB3aXRob3V0IGNoYW5naW5nIHRvIHRoZSBvdGhlclxudGVtcFRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3ZWF0aGVyTWFuT2JqLnRvZ2dsZVRlbXBVbml0KCk7XG4gICAgd2VhdGhlck1hbk9iai5wb3B1bGF0ZUN1cnJlbnQoKTtcbiAgICBpZiAod2VhdGhlck1hbk9iai5kYWlseUhvdXJseSA9PT0gJ2QnKSB7XG4gICAgICAgIHdlYXRoZXJNYW5PYmoucG9wdWxhdGVEYWlseSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdlYXRoZXJNYW5PYmoucG9wdWxhdGVIb3VybHkoKTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==