import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <form className="searchEngine">
        <input
          type="search"
          placeholder="Enter a city..."
          required
          className="search-form-input"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
      <div className="row">
        <div className="col-6">
          <div className="weather-overview">
            <h1 className="CityOverview">México</h1>
            <p className="city-details">
              <span>Monday 14:45,</span>
              <span>Cloudy</span>
              <br />
              Humidity:
              <span className="weather-details"> 49%</span> Wind:
              <span className="weather-details"> 13 km/h</span>
            </p>
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
              22
            </span>
            <span className="temperature-degree">°C/°F</span>
          </div>
        </div>
      </div>
    </div>
  );
}
