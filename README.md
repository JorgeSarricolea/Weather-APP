# [Weather APP](https://jorgesarricolea.com/weather-app)
This is a weather app, with a simple and responsive design, using the [OpenWeatherMap](https://openweathermap.org/api).

## Description
When working with REST APIs, the ideal project to practice is to make a weather app. I have used the free OpenWeatherMap API. The design is minimalist, and I have used the icons that this API contains. The app is programmed to show an error message and ask the user to try again if they enter an invalid value.

## Getting Started
To get started with this project, [click here](https://jorgesarricolea.com/weather-app) or simply clone this repository to your local machine and open the recipies-net.html file in your preferred web browser.

Note: Unlike the project with MealDB, where an API key was not necessary, for this project, it is necessary to generate an API key. I recommend that you register on [OpenWeatherMap](https://openweathermap.org/api) and generate your key, so you only need to change the variables in case you want to run it locally. The variable is called "API_KEY" and you only need to declare that variable and assign it your API Key.

Example:

```
$(document).ready(function() {

    let API_KEY = "your_api_key"
    let information = $("#information");
    let url = "https://api.openweathermap.org/data/2.5/weather?q=";
    let emptyInput = "Input field cannot be empty";
    let notFound = "Not city found:(";
    
   ... Rest of the code
});
```



