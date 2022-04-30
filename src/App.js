import "./App.css";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import React from "react";

function App() {
  return (
    <div className="main">
      <Header />
      <WeatherCard />
    </div>
  );
}

export default App;
