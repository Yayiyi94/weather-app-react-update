import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import AnimatedIcons from "./AnimatedIcons";
import ChangeMetrics from "./ChangeMetrics";
import Forecast from "./Forecast";

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
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      coordinates: response.data.coordinates,
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
              <span className="float-left weather-icon">
                <AnimatedIcons
                  code={weatherData.icon}
                  size={84}
                  color="#a9a2e7ff"
                />
              </span>
              <span className="changeMetrics">
                <ChangeMetrics celsius={weatherData.temperature} />
              </span>
            </div>
          </div>
        </div>
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading Weather...";
  }
}
