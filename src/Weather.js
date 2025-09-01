import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
    });
  }

  function search() {
    const apiKey = "10fa90a2o832483bf734tfe8a27fcdad";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios
      .get(apiUrl)
      .then(displayWeather)
      .catch((error) => {
        console.error("Error fetching current weather", error);
        alert("City not found, please type it again.");
      });
  }

  function handleSumbit(event) {
    event.preventDefault();
    search();
  }

  function handleUpdatedCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSumbit} className="searchEngine">
          <input
            type="search"
            placeholder="Enter a city..."
            className="search-form-input"
            onChange={handleUpdatedCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>

        <div className="row weather-overview">
          <div className="col-6">
            <h1 className="CityOverview">{city}</h1>
            <div className="city-details">
              <span>
                <FormattedDate date={weatherData.date} />,
              </span>
              <span className="text-capitalize">
                {" "}
                {weatherData.description}
              </span>
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
    search();
    return "Loading Weather...";
  }
}
