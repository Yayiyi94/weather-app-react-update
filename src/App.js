import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="App-container">
        <header>
          <h1>Weather App</h1>
          <Weather defaultCity="Lisbon" />
        </header>
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
