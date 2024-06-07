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

export { DomManager };
