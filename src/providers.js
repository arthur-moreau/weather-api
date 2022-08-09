import React from 'react';
import WeatherProvider from './providers/weather-provider';
import App from './App';


const Providers = () => {
  return (
    <>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </>
  );
};

export default Providers;