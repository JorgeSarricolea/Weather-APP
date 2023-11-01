document.addEventListener("DOMContentLoaded", function () {
    const information = document.getElementById("information");
    const url = "https://api.openweathermap.org/data/2.5/weather?q=";
    const emptyInput = "Input field cannot be empty";
    const notFound = "Not city found:(";
    const API_KEY = "33c9af543c6207cff3bfc0fdedc318b3";

    /* Search Button
    ---------------------*/

    const searchBtn = document.querySelector(".search-btn");
    searchBtn.addEventListener("click", fetchData);

    /* Enter key press
    ---------------------*/
    const searchInp = document.querySelector(".search-inp");
    searchInp.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            fetchData();
        }
    });

    function fetchData() {
        const userInp = searchInp.value;

        /* Error Message
        ---------------------*/

        if (userInp.length === 0) {
            const emptyInputMessage = document.createElement("div");
            emptyInputMessage.textContent = emptyInput;
            emptyInputMessage.classList.add("empty-input");
            information.appendChild(emptyInputMessage);
            emptyInputMessage.style.display = "block";
            setTimeout(function () {
                emptyInputMessage.style.display = "none";
                information.removeChild(emptyInputMessage);
            }, 3000);

        } else {

            /* API Fetch GET
            ---------------------*/

            const xhr = new XMLHttpRequest();
            xhr.open("GET", url + userInp + "&units=metric&appid=" + API_KEY, true);

            xhr.onload = function () {
                if (xhr.status === 200) {
                    document.getElementById("result").style.display = "block";
                    const details = JSON.parse(xhr.responseText);

                    const name = details.name;
                    const weather = details.weather[0].main;
                    const description = details.weather[0].description;
                    const temperatureC = Math.round(details.main.temp);
                    const humidity = details.main.humidity;
                    const windSpeed = (details.wind.speed * 3.6).toFixed(2);

                    switch (details.weather[0].main) {
                        case "Thunderstorm":
                            document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/11d@2x.png";
                            break;
                        case "Drizzle":
                        case "Rain":
                            document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/09d@2x.png";
                            break;
                        case "Snow":
                            document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/13d@2x.png";
                            break;
                        case "Mist":
                            document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/50d@2x.png";
                            break;
                        case "Clear":
                            document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/01d@2x.png";
                            break;
                        case "Clouds":
                            document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/02d@2x.png";
                            break;
                        default:
                            document.querySelector(".weather-icon").src = "";
                    }

                    information.innerHTML = `
                        <div class="result">
                            <h2>${name}</h2>
                            <h3 class="temperature">${temperatureC}°C</h3>
                            <h3>${weather} - ${description}</h3>
                            <div class="weather-details">
                                <div class="container">
                                    <i class="fa-solid fa-droplet"></i><h3>Humidity: ${humidity}%</h3>
                                </div>
                                <div class="container">
                                    <i class="fa-solid fa-wind"></i><h3>Wind speed: ${windSpeed} km/h</h3>
                                </div>
                            </div>
                        </div>`;
                }
            };

            xhr.onerror = function () {
                document.getElementById("result").style.display = "none";
                const invalidInputMessage = document.createElement("div");
                invalidInputMessage.textContent = notFound;
                invalidInputMessage.classList.add("invalid-input");
                information.appendChild(invalidInputMessage);
                invalidInputMessage.style.display = "block";
                setTimeout(function () {
                    invalidInputMessage.style.display = "none";
                    information.removeChild(invalidInputMessage);
                }, 3000);
            };

            xhr.send();
        }
    }
});
