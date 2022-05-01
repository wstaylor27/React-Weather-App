import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import React from "react";

const URL = "https://api.openweathermap.org/data/2.5/onecall";
const API_KEY = "452dc8628e72dae5457b9f213f5b4fb2";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="main">
      <Header />
      <WeatherCard />
    </div>
  );
}

export default App;
