import React from "react";
import AnimatedIcons from "./AnimatedIcons";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temp = Math.round(props.data.temperature.maximum);
    return `${temp} °C`;
  }

  function minTemperature() {
    let temp = Math.round(props.data.temperature.minimum);
    return `${temp} °C`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    console.log(days[day]);

    return days[day];
  }
  return (
    <div className="col">
      <div className="Forecast-day">{day()}</div>
      <div className="Forecast-icon">
        <AnimatedIcons
          code={props.data.condition.icon}
          size={42}
          color="#f0ca4cff"
        />
      </div>
      <div className="Forecast-temperatures">
        <span className="Forecast-max">{maxTemperature()}</span>
        <span className="Forecast-min"> {minTemperature()}</span>
      </div>
    </div>
  );
}
