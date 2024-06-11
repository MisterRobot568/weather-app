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

export { DomManager };
