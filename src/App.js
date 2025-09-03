import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="App-container">
        <header>
          <h1>Weather App</h1>
          <Weather defaultCity="México" />
        </header>
        <main></main>
        <footer>
          Coded by Yadira DLTR, code hosted on{" "}
          <a
            href="https://github.com/Yayiyi94/weather-app-react-update"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and website hosted on{" "}
          <a
            href="https://weather-app-ydltr-updated.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
