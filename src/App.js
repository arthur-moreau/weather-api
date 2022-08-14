import React from "react";
import Layout from "./components/layout/layout";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import useWeather from "./hooks/weather-hooks";

const App = () => {
  const { weatherState } = useWeather();

  return (
    <>
      <Layout>
        {weatherState.searching ? <CurrentWeather /> : <Search />}
      </Layout>
    </>
  );
};

export default App;
