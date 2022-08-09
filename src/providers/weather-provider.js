import React, { createContext, useState } from 'react';
import { useCallback } from 'react';
import api from '../services/api';

export const WeatherContext = createContext({
  loading: false,
  city: '',
  description: '',
  temp: '',
  max: '',
  min: '',
  icon: '',
})

const WeatherProvider = ({ children }) => {
  const [weatherState, setWeatherState] = useState({
    loading: false,
    city: '',
    description: '',
    temp: '',
    max: '',
    min: '',
    icon: '',
  });
  
  const key = '15e4fc3930ee7d0cc5a48e8472313d03'

  const getWeather = (city) => {

    api.get(`/weather?q=${city}&lang=pt_br&appid=${key}&units=metric`)
    
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
    
    .finally(setWeatherState((prevState) => ({
      ...prevState,
      loading: !prevState.loading
    })))

  };

  const contextValue = {
    weatherState,
    getWeather: useCallback((city) => getWeather(city), []),
  };

  return (
  <WeatherContext.Provider value={contextValue}>
    {children}
  </WeatherContext.Provider>
  );
};

export default WeatherProvider;