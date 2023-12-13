# [Weather APP](https://wtrapp.netlify.app)

Do you need to see the weather in your city? Try my weather app.

## Table of Contents

- [Weather APP](#weather-app)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
  - [Features](#features)
  - [Contribution](#contribution)
  - [Copyright](#copyright)

## Introduction

When working with REST APIs, the ideal project to practice is to make a weather app. I have used the free OpenWeatherMap API.

## Getting Started

To get started with "Weather-APP", follow these simple steps:

> [!NOTE]
> Unlike the project with MealDB, where an API key was not necessary, for this project, it is necessary to generate an API key. I recommend that you register on [OpenWeatherMap](https://openweathermap.org/api) and generate your key, so you only need to change the variables in case you want to run it locally. The variable is called "API_KEY" and you only need to declare that variable and assign it your API Key.

> Example:
> **let API_KEY = "your_api_key"**

```
xhr.open("GET", url + userInp + "&units=metric&appid=" + API_KEY, true);
```

### Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/JorgeSarricolea/Weather-APP
```

2. Navigate to the project directory:

```
cd Weather-APP
```

3. Open the index.html file with Live Server (In VSCode) or with your favorite browser.

## Features

Some of the key features of this project include:

- **Responsiveness:** The UI works for mobile devices and desktop.
- **Data fetching**: Gets the data needed to display from the API.
- **Keypress:** It works by pressing the search button or the "enter" key.

## Contribution

While contributions to this project are welcome. If you would like to contribute, feel free to fork this repository and submit a pull request.

## Copyright

This project was created by [Jorge Sarricolea](https://jorgesarricolea.com). if you have any specific code questions or would like to chat about programming, feel free to contact me on [WhatsApp](https://wa.me/529381095593).
