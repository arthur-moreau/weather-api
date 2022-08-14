import { useContext } from "react";
import { WeatherContext } from "../providers/weather-provider";

const useWeather = () => {
  const { weatherState, setWeatherState, getWeather, resetApp} = useContext(WeatherContext);
  return { weatherState, setWeatherState, getWeather, resetApp};
}

export default useWeather;