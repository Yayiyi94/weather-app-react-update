import React, { useState } from "react";
import AnimatedIcons from "./AnimatedIcons";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function maxTemperature() {
    let temp = Math.round(forecastData[0].temperature.maximum);
    return `${temp} °C`;
  }

  function minTemperature() {
    let temp = Math.round(forecastData[0].temperature.minimum);
    return `${temp} °C`;
  }

  function day() {
    let date = new Date(forecastData[0].temperature.day * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function displayForecast(response) {
    console.log(response.data);
    setForecastData(response.data.daily);

    setLoaded(true);
  }

  if (!loaded) {
    const apiKey = "10fa90a2o832483bf734tfe8a27fcdad";
    let units = "metric";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;

    axios
      .get(apiUrl)
      .then(displayForecast)
      .catch((error) => {
        console.error("Error fetching current forecast", error);
      });

    return "Loading Forecast...";
  } else {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div className="Forecast-day">{day()}</div>
            <div className="Forecast-icon">
              <AnimatedIcons
                code={forecastData[0].condition.icon}
                size={42}
                color="#f0ca4cff"
              />
            </div>

            <div className="Forecast-temperatures">
              <span className="Forecast-max">{maxTemperature()}</span>
              <span className="Forecast-min"> {minTemperature()}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
