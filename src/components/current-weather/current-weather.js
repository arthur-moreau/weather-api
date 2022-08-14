import React from "react";
import "./current-weather.css";
import useWeather from "../../hooks/weather-hooks";

// Component made to show the current weather

const CurrentWeather = () => {

  // State with current weather data

  const { weatherState } = useWeather();

  return (
    <div className="main-container">
      <h1 className="city-name">{weatherState.city}</h1>
      <h2 className="weather-description">{weatherState.description}</h2>
      <div className="temp-container">
        <p className="temp">{weatherState.temp}º</p>
        <img src={weatherState.icon} alt="icone do tempo" />
      </div>
      <div className="max-min-container">
        <h4>
          Max:<span>{weatherState.max}º</span>
        </h4>
        <h4>
          Min:<span>{weatherState.min}º</span>
        </h4>
      </div>
      <p className="link">Ver previsão para os próximos 5 dias</p>
    </div>
  );
};

export default CurrentWeather;
