import React, { createContext, useState, useCallback} from 'react';
import api from '../services/api';
import { Globals } from '../components/header/header';

// Context creation

export const WeatherContext = createContext({
  searching: false,
  city: '',
  description: '',
  temp: '',
  max: '',
  min: '',
  icon: '',
})


// Provider

const WeatherProvider = ({ children }) => {
  const [weatherState, setWeatherState] = useState({
    searching: false,
    city: '',
    description: '',
    temp: '',
    max: '',
    min: '',
    icon: '',
  });
  
  const apiKey = '15e4fc3930ee7d0cc5a48e8472313d03'
  
  // Function to get the current weather from API

  const getWeather = (city) => {

    // Variable to define the temperature type
    let units = ''
    Globals.typeOfTemp === false ? units = 'metric' : units = 'imperial'

    // Requisition to open weather map

    api.get(`/weather?q=${city}&lang=pt_br&appid=${apiKey}&units=${units}`)
    
    .then(({ data: weatherData }) => {
      setWeatherState((prevState) => ({
        ...prevState,
        city: weatherData.name.toUpperCase(),
        description: weatherData.weather[0].description,
        temp: Math.round(weatherData.main.temp),
        max: Math.round(weatherData.main.temp_max),
        min: Math.round(weatherData.main.temp_min),
        icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
      }))
    })

    .catch((err) => {
      if (err.request.status === 404) {
        alert('Local não encontrado')
        (setWeatherState((prevState) => ({
          ...prevState,
          searching: !prevState.searching
        })))
      }
    })

    // function that permits React to render the results or get back if contain error
    .finally (setWeatherState((prevState) => ({
      ...prevState,
      searching: !prevState.searching
    })))

  };

  // function to restart the app

  const resetApp = () => {
    setWeatherState((prevState) => ({
      ...prevState,
      searching: false,
      city: '',
      description: '',
      temp: '',
      max: '',
      min: '',
      icon: '',
    }))
  }
  
  const contextValue = {
    weatherState,
    getWeather: useCallback((city) => getWeather(city),[]),
    resetApp,
  };

  return (
  <WeatherContext.Provider value={contextValue}>
    {children}
  </WeatherContext.Provider>
  );
};

export default WeatherProvider;