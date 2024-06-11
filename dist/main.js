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
        const domManager = new _display_manager__WEBPACK_IMPORTED_MODULE_1__.DomManager(this.weatherObject, this.tempUnit);
        domManager.populatePrimaryWeather();
        domManager.populateSecondaryWeather();
        // domManager.populateDailyForecast();
        domManager.populateHourlyForecast();
        // this.populatePrimaryWeather();
        // this.populateSecondaryWeather();
        //
        console.log(weatherData);
        console.log(currentWeatherObj.currentWeather);
        console.log(currentWeatherObj.dailyForecast);
        console.log(currentWeatherObj.hourlyForecast);
        // add catch/then/ whatever statement to check for errors
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
const inputBox = document.querySelector('#user-input');

submitButton.addEventListener('click', () => {
    const inputValue = inputBox.value;
    weatherManObj.getWeather(inputValue);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMEI7Ozs7Ozs7VUN4RzFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMkM7O0FBRTNDLDBCQUEwQixvREFBYztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2Rpc3BsYXktbWFuYWdlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3dlYXRoZXItb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGkga2V5OiA3MmIxYjZhMWZkM2Q0YzgyYjJjNzI0MTQyNDE1MDVcblxuLy8gUHJpbWFyeSBXZWF0aGVyOlxuLy8gY29uZGl0aW9uIHRleHQ6XG4vLyBsb2NhdGlvblxuLy8gZGF0ZTogZGF5LCBkYXRlXG4vLyB0aW1lOlxuLy8gY29uZGl0aW9uIEltYWdlXG4vLyBVViBpbmRleFxuXG4vLyBTZWNvbmRhcnkgRGF0YTpcbi8vIGZlZWxzIGxpa2U6XG4vLyBIdW1pZGl0eVxuLy8gQ2hhbmNlIG9mIHByZWNpcGl0YXRpb25cbi8vIHdpbmQgc3BlZWRcblxuLy8gRm9yZWNhc3QgZGF0YVxuLy8gZGFpbHk6XG4vLyBkYXRlXG4vLyB0ZW1wIGhpZ2hcbi8vIHRlbXAgbG93XG4vLyBjb25kaXRpb24gSW1hZ2VcblxuLy8gSG91cmx5OlxuLy8gdGltZVxuLy8gdGVtcFxuLy8gY29uZGl0aW9uIEltYWdlXG5pbXBvcnQgeyBXZWF0aGVyT2JqZWN0cyB9IGZyb20gJy4vd2VhdGhlci1vYmplY3RzJztcbmltcG9ydCB7IERvbU1hbmFnZXIgfSBmcm9tICcuL2Rpc3BsYXktbWFuYWdlcic7XG5cbmNsYXNzIFdlYXRoZXJNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50ZW1wID0gJyc7XG4gICAgICAgIC8vIHRoaXMud2VhdGhlck9iamVjdEFycmF5ID0gW107XG4gICAgICAgIHRoaXMud2VhdGhlck9iamVjdCA9IFtdO1xuICAgICAgICB0aGlzLnRlbXBVbml0ID0gJ2YnOyAvLyAwIGZvciBGLCAxIGZvciBDLiBXcml0ZSBhbiBldmVudCBsaXN0ZW5lciB0aGF0IGNoYW5nZXMgdGVtcCB1bml0IG9uIGNsaWNrL3RvZ2dsZVxuICAgICAgICB0aGlzLmRhaWx5SG91cmx5ID0gJ2QnO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTcyYjFiNmExZmQzZDRjODJiMmM3MjQxNDI0MTUwNSZxPSR7bG9jYXRpb259JmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vYCxcbiAgICAgICAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyT2JqID0gbmV3IFdlYXRoZXJPYmplY3RzKFxuICAgICAgICAgICAgd2VhdGhlckRhdGEsXG4gICAgICAgICAgICB0aGlzLnRlbXBVbml0XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMud2VhdGhlck9iamVjdCA9IGN1cnJlbnRXZWF0aGVyT2JqO1xuICAgICAgICAvLyB0ZXN0aW5nLy9cbiAgICAgICAgY29uc3QgZG9tTWFuYWdlciA9IG5ldyBEb21NYW5hZ2VyKHRoaXMud2VhdGhlck9iamVjdCwgdGhpcy50ZW1wVW5pdCk7XG4gICAgICAgIGRvbU1hbmFnZXIucG9wdWxhdGVQcmltYXJ5V2VhdGhlcigpO1xuICAgICAgICBkb21NYW5hZ2VyLnBvcHVsYXRlU2Vjb25kYXJ5V2VhdGhlcigpO1xuICAgICAgICAvLyBkb21NYW5hZ2VyLnBvcHVsYXRlRGFpbHlGb3JlY2FzdCgpO1xuICAgICAgICBkb21NYW5hZ2VyLnBvcHVsYXRlSG91cmx5Rm9yZWNhc3QoKTtcbiAgICAgICAgLy8gdGhpcy5wb3B1bGF0ZVByaW1hcnlXZWF0aGVyKCk7XG4gICAgICAgIC8vIHRoaXMucG9wdWxhdGVTZWNvbmRhcnlXZWF0aGVyKCk7XG4gICAgICAgIC8vXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXJPYmouY3VycmVudFdlYXRoZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlck9iai5kYWlseUZvcmVjYXN0KTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXJPYmouaG91cmx5Rm9yZWNhc3QpO1xuICAgICAgICAvLyBhZGQgY2F0Y2gvdGhlbi8gd2hhdGV2ZXIgc3RhdGVtZW50IHRvIGNoZWNrIGZvciBlcnJvcnNcbiAgICB9XG59XG5cbmV4cG9ydCB7IFdlYXRoZXJNYW5hZ2VyIH07XG4iLCJjbGFzcyBEb21NYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcih3ZWF0aGVyT2JqZWN0LCB0ZW1wVW5pdCkge1xuICAgICAgICB0aGlzLndlYXRoZXJPYmplY3QgPSB3ZWF0aGVyT2JqZWN0O1xuICAgICAgICB0aGlzLnRlbXBVbml0ID0gdGVtcFVuaXQ7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVQcmltYXJ5V2VhdGhlcigpIHtcbiAgICAgICAgdGhpcy5jbGVhckRpdigncHJpbWFyeS13ZWF0aGVyJyk7XG5cbiAgICAgICAgLy8gd2VhdGhlciB0ZXh0XG4gICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlci10ZXh0JyxcbiAgICAgICAgICAgICdjb25kaXRpb25fdGV4dCcsXG4gICAgICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXInLFxuICAgICAgICAgICAgJ2N1cnJlbnRXZWF0aGVyJ1xuICAgICAgICApO1xuICAgICAgICAvLyB3ZWF0aGVyIGljb25cbiAgICAgICAgdGhpcy5jcmVhdGVOZXdEaXYoXG4gICAgICAgICAgICAncHJpbWFyeS13ZWF0aGVyLWljb24nLFxuICAgICAgICAgICAgJ2NvbmRpdGlvbl9pbWFnZScsXG4gICAgICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXInLFxuICAgICAgICAgICAgJ2N1cnJlbnRXZWF0aGVyJyxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgLy8gVGVtcGVyYXR1cmVcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50ZW1wVW5pdCk7XG4gICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlci10ZW1wJyxcbiAgICAgICAgICAgIGB0ZW1wXyR7dGhpcy50ZW1wVW5pdH1gLFxuICAgICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgICAgICAgICAncHJpbWFyeS13ZWF0aGVyJyxcbiAgICAgICAgICAgICdjdXJyZW50V2VhdGhlcidcbiAgICAgICAgKTtcbiAgICAgICAgLy8gbG9jYXRpb25cbiAgICAgICAgdGhpcy5jcmVhdGVOZXdEaXYoXG4gICAgICAgICAgICAncHJpbWFyeS13ZWF0aGVyLWxvY2F0aW9uJyxcbiAgICAgICAgICAgICdsb2NhdGlvbicsXG4gICAgICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXInLFxuICAgICAgICAgICAgJ2N1cnJlbnRXZWF0aGVyJ1xuICAgICAgICApO1xuICAgICAgICAvLyByZWdpb25cbiAgICAgICAgdGhpcy5jcmVhdGVOZXdEaXYoXG4gICAgICAgICAgICAncHJpbWFyeS13ZWF0aGVyLXJlZ2lvbicsXG4gICAgICAgICAgICAncmVnaW9uJyxcbiAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlcicsXG4gICAgICAgICAgICAnY3VycmVudFdlYXRoZXInXG4gICAgICAgICk7XG4gICAgICAgIC8vIGNvdW50cnlcbiAgICAgICAgdGhpcy5jcmVhdGVOZXdEaXYoXG4gICAgICAgICAgICAncHJpbWFyeS13ZWF0aGVyLWNvdW50cnknLFxuICAgICAgICAgICAgJ2NvdW50cnknLFxuICAgICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgICAgICAgICAncHJpbWFyeS13ZWF0aGVyJyxcbiAgICAgICAgICAgICdjdXJyZW50V2VhdGhlcidcbiAgICAgICAgKTtcbiAgICAgICAgLy8gZGF0ZVxuICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXItZGF0ZScsXG4gICAgICAgICAgICAnZGF0ZScsXG4gICAgICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXInLFxuICAgICAgICAgICAgJ2N1cnJlbnRXZWF0aGVyJ1xuICAgICAgICApO1xuICAgICAgICAvLyB0aW1lXG4gICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlci10aW1lJyxcbiAgICAgICAgICAgICd0aW1lJyxcbiAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlcicsXG4gICAgICAgICAgICAnY3VycmVudFdlYXRoZXInXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gd2VhdGhlciBVVi1pbmRleFxuICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICdwcmltYXJ5LXdlYXRoZXItVVYnLFxuICAgICAgICAgICAgJ1VWX2luZGV4JyxcbiAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgJ3ByaW1hcnktd2VhdGhlcicsXG4gICAgICAgICAgICAnY3VycmVudFdlYXRoZXInXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gU2Vjb25kYXJ5IERhdGE6XG4gICAgLy8gZmVlbHMgbGlrZTpcbiAgICAvLyBIdW1pZGl0eVxuICAgIC8vIENoYW5jZSBvZiBwcmVjaXBpdGF0aW9uXG4gICAgLy8gd2luZCBzcGVlZFxuICAgIHBvcHVsYXRlU2Vjb25kYXJ5V2VhdGhlcigpIHtcbiAgICAgICAgdGhpcy5jbGVhckRpdignc2Vjb25kYXJ5LXdlYXRoZXInKTtcbiAgICAgICAgLy8gZmVlbHMgbGlrZVxuICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICdmZWVscy1saWtlJyxcbiAgICAgICAgICAgIGBmZWVsc19saWtlXyR7dGhpcy50ZW1wVW5pdH1gLFxuICAgICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgICAgICAgICAnc2Vjb25kYXJ5LXdlYXRoZXInLFxuICAgICAgICAgICAgJ2N1cnJlbnRXZWF0aGVyJ1xuICAgICAgICApO1xuICAgICAgICAvLyBodW1pZGl0eTtcbiAgICAgICAgdGhpcy5jcmVhdGVOZXdEaXYoXG4gICAgICAgICAgICAnaHVtaWRpdHknLFxuICAgICAgICAgICAgYGh1bWlkaXR5YCxcbiAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgJ3NlY29uZGFyeS13ZWF0aGVyJyxcbiAgICAgICAgICAgICdjdXJyZW50V2VhdGhlcidcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY2hhbmNlIG9mIHJhaW5cbiAgICAgICAgdGhpcy5jcmVhdGVOZXdEaXYoXG4gICAgICAgICAgICAncmFpbi1jaGFuY2UnLFxuICAgICAgICAgICAgJ3JhaW5fY2hhbmNlJyxcbiAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgJ3NlY29uZGFyeS13ZWF0aGVyJyxcbiAgICAgICAgICAgICdjdXJyZW50V2VhdGhlcidcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy53ZWF0aGVyT2JqZWN0WycnXSk7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVEYWlseUZvcmVjYXN0KCkge1xuICAgICAgICB0aGlzLmNsZWFyRGl2KCdmb3JlY2FzdCcpO1xuICAgICAgICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9yZWNhc3QnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBvdXRlckRpdi5pZCA9IGBkYWlseS1mb3JlY2FzdC0ke2l9YDtcbiAgICAgICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChvdXRlckRpdik7XG4gICAgICAgICAgICAvLyBvdXRlckRpdi5jbGFzc05hbWU7XG4gICAgICAgICAgICAvLyBEYWlseSBkYXRlXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICAgICBgZGFpbHktZGF0ZS0ke2l9YCxcbiAgICAgICAgICAgICAgICAnZGF0ZScsXG4gICAgICAgICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgICAgICAgICAgICAgYGRhaWx5LWZvcmVjYXN0LSR7aX1gLFxuICAgICAgICAgICAgICAgICdkYWlseUZvcmVjYXN0JyxcbiAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBEYWlseSB0ZW1wIGhpZ2hcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3RGl2KFxuICAgICAgICAgICAgICAgIGBkYWlseS10ZW1wLWhpZ2gtJHtpfWAsXG4gICAgICAgICAgICAgICAgYHRlbXBfaGlnaF8ke3RoaXMudGVtcFVuaXR9YCxcbiAgICAgICAgICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAgICAgICAgICAgICBgZGFpbHktZm9yZWNhc3QtJHtpfWAsXG4gICAgICAgICAgICAgICAgJ2RhaWx5Rm9yZWNhc3QnLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIERhaWx5IHRlbXAgbG93XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICAgICBgZGFpbHktdGVtcC1sb3ctJHtpfWAsXG4gICAgICAgICAgICAgICAgYHRlbXBfbG93XyR7dGhpcy50ZW1wVW5pdH1gLFxuICAgICAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgICAgIGBkYWlseS1mb3JlY2FzdC0ke2l9YCxcbiAgICAgICAgICAgICAgICAnZGFpbHlGb3JlY2FzdCcsXG4gICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gRGFpbHkgd2VhdGhlciBpY29uXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICAgICBgZGFpbHktaWNvbi0ke2l9YCxcbiAgICAgICAgICAgICAgICBgY29uZGl0aW9uX2ltYWdlYCxcbiAgICAgICAgICAgICAgICAncmFuZG9tLWNsYXNzJyxcbiAgICAgICAgICAgICAgICBgZGFpbHktZm9yZWNhc3QtJHtpfWAsXG4gICAgICAgICAgICAgICAgJ2RhaWx5Rm9yZWNhc3QnLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBwYXJlbnREaXYuYXBwZW5kQ2hpbGQob3V0ZXJEaXYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9wdWxhdGVIb3VybHlGb3JlY2FzdCgpIHtcbiAgICAgICAgdGhpcy5jbGVhckRpdignZm9yZWNhc3QnKTtcbiAgICAgICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvcmVjYXN0Jyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG91dGVyRGl2LmlkID0gYGhvdXJseS1mb3JlY2FzdC0ke2l9YDtcbiAgICAgICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChvdXRlckRpdik7XG5cbiAgICAgICAgICAgIC8vIGhvdXJseSB0aW1lXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICAgICBgaG91cmx5LXRpbWUtJHtpfWAsXG4gICAgICAgICAgICAgICAgJ3RpbWUnLFxuICAgICAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgICAgIGBob3VybHktZm9yZWNhc3QtJHtpfWAsXG4gICAgICAgICAgICAgICAgJ2hvdXJseUZvcmVjYXN0JyxcbiAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBob3VybHkgdGltZVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVOZXdEaXYoXG4gICAgICAgICAgICAgICAgYGhvdXJseS10ZW1wLSR7aX1gLFxuICAgICAgICAgICAgICAgIGB0ZW1wXyR7dGhpcy50ZW1wVW5pdH1gLFxuICAgICAgICAgICAgICAgICdyYW5kb20tY2xhc3MnLFxuICAgICAgICAgICAgICAgIGBob3VybHktZm9yZWNhc3QtJHtpfWAsXG4gICAgICAgICAgICAgICAgJ2hvdXJseUZvcmVjYXN0JyxcbiAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBob3VybHkgd2VhdGhlciBpY29uXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld0RpdihcbiAgICAgICAgICAgICAgICBgaG91cmx5LWljb24tJHtpfWAsXG4gICAgICAgICAgICAgICAgYGNvbmRpdGlvbl9pbWFnZWAsXG4gICAgICAgICAgICAgICAgJ3JhbmRvbS1jbGFzcycsXG4gICAgICAgICAgICAgICAgYGhvdXJseS1mb3JlY2FzdC0ke2l9YCxcbiAgICAgICAgICAgICAgICAnaG91cmx5Rm9yZWNhc3QnLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWV0aG9kIHRvIGNyZWF0ZSBkaXZzIHVzZWQgaW4gdGhlICdwb3B1bGF0ZS0nIG1ldGhvZHNcbiAgICAvLyBtYXliZSB3ZSBjYW4gZGVsZXRlIHRoZSBcImNsYXNzXCIgc3R1ZmYuIE5vdCBzdXJlIGlmIGl0IHdpbGwgYmUgdXNlZnVsXG4gICAgLy8gY3JlYXRlTmV3RGl2KGlkLCBvYmplY3RSZWZlcmVuY2UsIGNsYXNzTmFtZSwgcGFyZW50RGl2TmFtZSkge1xuICAgIC8vICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyAgICAgbmV3RGl2LmlkID0gaWQ7XG4gICAgLy8gICAgIG5ld0Rpdi5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgLy8gICAgIG5ld0Rpdi50ZXh0Q29udGVudCA9IHRoaXMud2VhdGhlck9iamVjdC5jdXJyZW50V2VhdGhlcltvYmplY3RSZWZlcmVuY2VdO1xuICAgIC8vICAgICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwYXJlbnREaXZOYW1lfWApO1xuICAgIC8vICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICAvLyB9XG5cbiAgICAvLyBNZXRob2QgdG8gY3JlYXRlIGEgbmV3IGRpdlxuICAgIC8vIGlucHV0czpcbiAgICAvLyBpZCBmb3IgbmV3IGRpdi5jdXJyZW50V2VhdGhlclxuICAgIC8vIG9iamVjdCByZWZlcmVuY2UgdG8gZmluZCBpbmZvIGluIHRoZSBkaWN0aW9uYXJ5XG4gICAgLy8gY2xhc3MgbmFtZSBmb3IgdGhlIG5ldyBkaXZcbiAgICAvLyBwYXJlbnREaXYgbmFtZSBzbyB0aGF0IHdlIGtub3cgd2hlcmUgdG8gcHV0IHRoZSBuZXcgZGl2XG4gICAgLy8gd2VhdGhlclJlZmVyZW5jZSB0ZWxscyB1cyBpZiB3ZSdyZSB3b3JraW5nIHdpdGggY3VycmVudC9kYWlseS9ob3VybHkgZGF0YVxuICAgIC8vIGlzSW1hZ2UgdG8gZGV0ZXJtaW5lIHdoYXQga2luZCBvZiBkaXYgdG8gY3JlYXRlXG4gICAgY3JlYXRlTmV3RGl2KFxuICAgICAgICBpZCxcbiAgICAgICAgb2JqZWN0UmVmZXJlbmNlLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHBhcmVudERpdk5hbWUsXG4gICAgICAgIHdlYXRoZXJSZWZlcmVuY2UsXG4gICAgICAgIGlzSW1hZ2UgPSBmYWxzZSxcbiAgICAgICAgaXNBcnJheSA9IGZhbHNlLFxuICAgICAgICBhcnJheUluZGV4ID0gMFxuICAgICkge1xuICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gaXNJbWFnZVxuICAgICAgICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3RWxlbWVudC5pZCA9IGlkO1xuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgaWYgKGlzSW1hZ2UgJiYgaXNBcnJheSkge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5zcmMgPSBgaHR0cHM6JHt0aGlzLndlYXRoZXJPYmplY3Rbd2VhdGhlclJlZmVyZW5jZV1bb2JqZWN0UmVmZXJlbmNlXVthcnJheUluZGV4XX1gO1xuICAgICAgICAgICAgbmV3RWxlbWVudC5hbHQgPSBvYmplY3RSZWZlcmVuY2U7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNJbWFnZSkge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5zcmMgPSBgaHR0cHM6JHt0aGlzLndlYXRoZXJPYmplY3Rbd2VhdGhlclJlZmVyZW5jZV1bb2JqZWN0UmVmZXJlbmNlXX1gO1xuICAgICAgICAgICAgbmV3RWxlbWVudC5hbHQgPSBvYmplY3RSZWZlcmVuY2U7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyT2JqZWN0W3dlYXRoZXJSZWZlcmVuY2VdW29iamVjdFJlZmVyZW5jZV1bXG4gICAgICAgICAgICAgICAgICAgIGFycmF5SW5kZXhcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyT2JqZWN0W3dlYXRoZXJSZWZlcmVuY2VdW29iamVjdFJlZmVyZW5jZV1bXG4gICAgICAgICAgICAgICAgICAgIGFycmF5SW5kZXhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyT2JqZWN0LmN1cnJlbnRXZWF0aGVyW29iamVjdFJlZmVyZW5jZV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGFyZW50RGl2TmFtZX1gKTtcbiAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIG1ldGhvZCB0byBjbGVhciBhbGwgY2hpbGQgZWxlbWVudHMgb2YgYSBkaXYgZ2l2ZW4gY2xhc3MgbmFtZVxuICAgIC8vIG1heWJlIHR1cm4gdGhpcyBpbnRvIGEgZnVuY3Rpb24gaW5zdGVhZD9cbiAgICAvLyBjaGFuZ2UgY2xlYXJEaXYgdG8gYWNjZXB0IElEIGFzIGFuIGlucHV0IGluc3RlYWRcbiAgICBjbGVhckRpdihjbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApO1xuICAgICAgICB3aGlsZSAoZGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IERvbU1hbmFnZXIgfTtcbiIsImNsYXNzIFdlYXRoZXJPYmplY3RzIHtcbiAgICBjb25zdHJ1Y3Rvcihqc29uRGF0YSkge1xuICAgICAgICAvLyB0aGlzLmN1cnJlbnRXZWF0aGVyID0gdGhpcy5jcmVhdGVDdXJyZW50V2VhdGhlcihqc29uRGF0YSk7XG4gICAgICAgIC8vIHRoaXMuZGFpbHlGb3JlY2FzdCA9IHRoaXMuY3JlYXRlRGFpbHlGb3JlY2FzdChqc29uRGF0YSwgMyk7XG4gICAgICAgIC8vIHRoaXMuaG91cmx5Rm9yZWNhc3QgPSB0aGlzLmNyZWF0ZUhvdXJseUZvcmVjYXN0KGpzb25EYXRhLCAyNCwgMCk7XG4gICAgICAgIHRoaXMuY3VycmVudFdlYXRoZXIgPSB7fTtcbiAgICAgICAgdGhpcy5kYWlseUZvcmVjYXN0ID0ge307XG4gICAgICAgIHRoaXMuaG91cmx5Rm9yZWNhc3QgPSB7fTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUN1cnJlbnRXZWF0aGVyKGpzb25EYXRhKTtcbiAgICAgICAgdGhpcy5jcmVhdGVEYWlseUZvcmVjYXN0KGpzb25EYXRhLCAzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVIb3VybHlGb3JlY2FzdChqc29uRGF0YSwgMjQsIDApO1xuICAgIH1cblxuICAgIGNyZWF0ZUN1cnJlbnRXZWF0aGVyKGpzb25EYXRhKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFdlYXRoZXIgPSB7XG4gICAgICAgICAgICBjb25kaXRpb25fdGV4dDoganNvbkRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgIGNvbmRpdGlvbl9pbWFnZToganNvbkRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBqc29uRGF0YS5sb2NhdGlvbi5uYW1lLFxuICAgICAgICAgICAgcmVnaW9uOiBqc29uRGF0YS5sb2NhdGlvbi5yZWdpb24sXG4gICAgICAgICAgICBjb3VudHJ5OiBqc29uRGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgICAgICAgZGF0ZToganNvbkRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgICAgICAgICAgdGltZToganNvbkRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgICAgICAgICAgdGVtcF9jOiBqc29uRGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICAgICAgICAgIHRlbXBfZjoganNvbkRhdGEuY3VycmVudC50ZW1wX2YsXG4gICAgICAgICAgICBVVl9pbmRleDoganNvbkRhdGEuY3VycmVudC5odW1pZGl0eSxcbiAgICAgICAgICAgIGZlZWxzX2xpa2VfYzoganNvbkRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICAgICAgICAgIGZlZWxzX2xpa2VfZjoganNvbkRhdGEuY3VycmVudC5mZWVsc2xpa2VfZixcbiAgICAgICAgICAgIGh1bWlkaXR5OiBqc29uRGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICAgICAgcmFpbl9jaGFuY2U6XG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxuICAgICAgICB9O1xuICAgICAgICAvLyByZXR1cm4gY3VycmVudFdlYXRoZXJPYmo7XG4gICAgfVxuXG4gICAgY3JlYXRlRGFpbHlGb3JlY2FzdChqc29uRGF0YSwgbnVtRGF5cykge1xuICAgICAgICB0aGlzLmRhaWx5Rm9yZWNhc3QgPSB7XG4gICAgICAgICAgICBkYXRlOiBbXSxcbiAgICAgICAgICAgIHRlbXBfaGlnaF9jOiBbXSxcbiAgICAgICAgICAgIHRlbXBfaGlnaF9mOiBbXSxcbiAgICAgICAgICAgIHRlbXBfbG93X2M6IFtdLFxuICAgICAgICAgICAgdGVtcF9sb3dfZjogW10sXG4gICAgICAgICAgICBjb25kaXRpb25faW1hZ2U6IFtdLFxuICAgICAgICAgICAgY29uZGl0aW9uX3RleHQ6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bURheXM7IGkrKykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coanNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLmRhaWx5Rm9yZWNhc3QuZGF0ZS5wdXNoKGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRhdGUpO1xuICAgICAgICAgICAgdGhpcy5kYWlseUZvcmVjYXN0LnRlbXBfaGlnaF9jLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfY1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuZGFpbHlGb3JlY2FzdC50ZW1wX2hpZ2hfZi5wdXNoKFxuICAgICAgICAgICAgICAgIGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2ZcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmRhaWx5Rm9yZWNhc3QudGVtcF9sb3dfYy5wdXNoKFxuICAgICAgICAgICAgICAgIGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2NcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmRhaWx5Rm9yZWNhc3QudGVtcF9sb3dfZi5wdXNoKFxuICAgICAgICAgICAgICAgIGpzb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2ZcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmRhaWx5Rm9yZWNhc3QuY29uZGl0aW9uX2ltYWdlLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi5pY29uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5kYWlseUZvcmVjYXN0LmNvbmRpdGlvbl90ZXh0LnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi50ZXh0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybiBkYWlseUZvcmVjYXN0O1xuICAgIH1cblxuICAgIC8vIEhvdXJseTpcbiAgICAvLyB0aW1lXG4gICAgLy8gdGVtcFxuICAgIC8vIGNvbmRpdGlvbiBJbWFnZVxuICAgIGNyZWF0ZUhvdXJseUZvcmVjYXN0KGpzb25EYXRhLCBudW1Ib3VycywgZm9yZWNhc3REYXkpIHtcbiAgICAgICAgdGhpcy5ob3VybHlGb3JlY2FzdCA9IHtcbiAgICAgICAgICAgIHRpbWU6IFtdLFxuICAgICAgICAgICAgdGVtcF9jOiBbXSxcbiAgICAgICAgICAgIHRlbXBfZjogW10sXG4gICAgICAgICAgICBjb25kaXRpb25fdGV4dDogW10sXG4gICAgICAgICAgICBjb25kaXRpb25faW1hZ2U6IFtdLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtSG91cnM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ob3VybHlGb3JlY2FzdC50aW1lLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltpXS50aW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5ob3VybHlGb3JlY2FzdC50ZW1wX2MucHVzaChcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ldLnRlbXBfY1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuaG91cmx5Rm9yZWNhc3QudGVtcF9mLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltpXS50ZW1wX2ZcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmhvdXJseUZvcmVjYXN0LmNvbmRpdGlvbl90ZXh0LnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltpXS5jb25kaXRpb24udGV4dFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuaG91cmx5Rm9yZWNhc3QuY29uZGl0aW9uX2ltYWdlLnB1c2goXG4gICAgICAgICAgICAgICAganNvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltpXS5jb25kaXRpb24uaWNvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZXR1cm4gaG91cmx5Rm9yZWNhc3Q7XG4gICAgfVxufVxuXG5leHBvcnQgeyBXZWF0aGVyT2JqZWN0cyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBXZWF0aGVyTWFuYWdlciB9IGZyb20gJy4vY2xhc3Nlcyc7XG5cbmNvbnN0IHdlYXRoZXJNYW5PYmogPSBuZXcgV2VhdGhlck1hbmFnZXIoKTtcbndlYXRoZXJNYW5PYmouZ2V0V2VhdGhlcignYXRsYW50YScpO1xuXG4vLyBhY2NlcHQgdXNlciBpbnB1dCBhbmQgc2VhcmNoIGZvciB3ZWF0aGVyIGRhdGEgZm9yIGNpdHlcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtYnV0dG9uJyk7XG5jb25zdCBpbnB1dEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyLWlucHV0Jyk7XG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXRCb3gudmFsdWU7XG4gICAgd2VhdGhlck1hbk9iai5nZXRXZWF0aGVyKGlucHV0VmFsdWUpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=