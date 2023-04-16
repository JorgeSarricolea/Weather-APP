$(document).ready(function() {

    let information = $("#information");
    let API_KEY = "33c9af543c6207cff3bfc0fdedc318b3";
    let url = "https://api.openweathermap.org/data/2.5/weather?q=";
    let emptyInput = "Input field cannot be empty";
    let notFound = "Not city found:(";

    /* Search Button
    ---------------------*/

    $(".search-btn").click(function() {
        let userInp = $(".search-inp").val();

        /* Error Message
        ---------------------*/

        if (userInp.length == 0) {
            $(".empty-input").html(emptyInput);
            $(".empty-input").show();
            setTimeout(function() {
                $(".empty-input").hide();
            }, 3000);

        } else {

            /* API Fetch GET
            ---------------------*/

            $.ajax({
                url: url + userInp + "&units=metric&appid=" + API_KEY,
                success: function(data) {
                    if (data != null) {
                        $("#result").show();
                        let details = data;

                        let name = details.name;
                        let weather = details.weather[0].main;
                        let description = details.weather[0].description;
                        let temperatureC = (details.main.temp).toFixed(0);
                        let humidity = details.main.humidity;
                        let windSpeed = (details.wind.speed*3.6).toFixed(2);

                        /*
                        console.log(details);
                        console.log(details.name);
                        console.log(details.weather[0].main);
                        console.log(details.weather[0].description);
                        console.log(temperatureC);
                        console.log(details.main.humidity);
                        console.log(windSpeed);
                        */

                        console.log(details);

                        /* Switch Weather Icons
                        ---------------------*/

                        switch (details.weather[0].main) {
                            case "Thunderstorm":
                                $(".weather-icon").attr("src", "https://openweathermap.org/img/wn/11d@2x.png");
                                break;

                            case "Drizzle":
                            case "Rain":
                                $(".weather-icon").attr("src", "https://openweathermap.org/img/wn/09d@2x.png");
                                break;

                            case "Snow":
                                $(".weather-icon").attr("src", "https://openweathermap.org/img/wn/13d@2x.png");
                                break;

                            case "Mist":
                                $(".weather-icon").attr("src", "https://openweathermap.org/img/wn/50d@2x.png");
                                break;

                            case "Clear":
                                $(".weather-icon").attr("src", "https://openweathermap.org/img/wn/01d@2x.png");
                                break;

                            case "Clouds":
                                $(".weather-icon").attr("src", "https://openweathermap.org/img/wn/02d@2x.png");
                                break;

                            default:
                                $(".weather-icon").attr("src", "");
                        }

                        /* User City Search
                        ---------------------*/

                        information.html(
                            `<div class="result">
                                <h2>${name}</h2>
                                <h3 class="temperature">${temperatureC}°C</h3>
                                <h3>${weather} - ${description}</h3>
                                <div class="weather-details">
                                    <div class="container">
                                        <i class="fa-solid fa-droplet">
                                        </i><h3>Humidity: ${humidity}%</h3>
                                    </div>
                                    <div class="container">
                                        <i class="fa-solid fa-wind"></i>
                                        <h3>Wind speed: ${windSpeed} km/h</h3>
                                    </div>
                                </div>
                            </div>`
                        );
                    }
                },
                error: function() {

                    /* API Invalid Input
                    ---------------------*/

                    $("#result").hide();
                    $(".invalid-input").html(notFound);
                    $(".invalid-input").show();
                    setTimeout(function() {
                            $(".invalid-input").hide();
                    }, 3000);
                }
            });
        }
    });
});