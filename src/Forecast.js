import React from "react";
import AnimatedIcons from "./AnimatedIcons";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function displayForecast(response) {
    console.log(response.data);
  }

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

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Monday</div>
          <div className="Forecast-icon">
            <AnimatedIcons code="clear-sky-day" size={42} color="#f0ca4cff" />
          </div>

          <div className="Forecast-temperatures">
            <span className="Forecast-max">30°</span>
            <span className="Forecast-min">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
