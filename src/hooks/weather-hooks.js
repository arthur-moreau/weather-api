import { useContext } from "react";
import { WeatherContext } from "../providers/weather-provider";

const useWeather = () => {
  const { weatherState, getWeather } = useContext(WeatherContext);

  return { weatherState, getWeather };
}

export default useWeather;