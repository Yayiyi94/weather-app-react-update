import React, { useState } from "react";

export default function ChangeMetrics(props) {
  let units = props.unit;

  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function calculateFahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="ChangeMetrics">
        <span className="temperature-element">{props.celsius}</span>
        <span className="temperature-degree">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="ChangeMetrics">
        <span className="temperature-element">
          {Math.round(calculateFahrenheit())}
        </span>
        <span className="temperature-degree">
          {" "}
          °F |
          <a href="/" onClick={showCelsius}>
            {" "}
            °C{" "}
          </a>
        </span>
      </div>
    );
  }
}
