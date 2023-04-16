$(document).ready(function() {

    let result = $("#result");
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
                        let temperatureC = details.main.temp;
                        let humidity = details.main.humidity;
                        let windSpeed = (details.wind.speed*3.6).toFixed(2);

                        console.log(details);
                        console.log(details.name);
                        console.log(details.weather[0].main);
                        console.log(details.weather[0].description);
                        console.log(temperatureC);
                        console.log(details.main.humidity);
                        console.log(windSpeed);

                        /* User City Search
                        ---------------------*/

                        result.html(
                            `<div class="result">
                                <h2>${name}</h2>
                                <h3>${weather} - ${description}</h3>
                                <h3>${temperatureC}°C</h3>
                                <h3>Humidity: ${humidity}%</h3>
                                <h3>Wind speed: ${windSpeed} km/h</h3>
                            </div>`
                        );
                    }
                },
                error: function() {

                    /* API Invalid Input
                    ---------------------*/

                    $("#details").hide();
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