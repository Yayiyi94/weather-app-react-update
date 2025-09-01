import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
      date: "Monday, 15:00",
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="searchEngine">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="search-form-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>

        <div className="row weather-overview">
          <div className="col-6">
            <h1 className="CityOverview">{weatherData.city}</h1>
            <div className="city-details">
              <span>{weatherData.date},</span>
              <span>{weatherData.description}</span>
              <br />
              Humidity:
              <span className="weather-details">
                {" "}
                {weatherData.humidity}%
              </span>{" "}
              Wind:
              <span className="weather-details"> {weatherData.wind} km/h</span>
            </div>
          </div>
          <div className="col-6">
            <div className="city-temperature">
              <span id="weather-icon">
                <img
                  src="https://www.gstatic.com/weather/conditions2023/2023.2/svg/drizzle_light.svg"
                  alt="Cloudy"
                  className="temperature-icon"
                />
              </span>
              <span className="temperature-element" id="temperature-element">
                {weatherData.temperature}
              </span>
              <span className="temperature-degree">°C °F</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "10fa90a2o832483bf734tfe8a27fcdad";
    let units = "metric";
    let city = "México";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayWeather);

    return "Loading Weather...";
  }
}
