import React from "react";
import Layout from "./components/layout/layout";
import Search from "./components/search/search";
import ShowWeather from "./components/show-weather/show-weather";

import useWeather from "./hooks/weather-hooks";

const App = () => {

  const { weatherState } = useWeather();

  return (
    <>
        <Layout>
        {/* <Search></Search>
        <ShowWeather></ShowWeather> */}
          {weatherState.loading ? (<ShowWeather />) : (<Search />)}
        </Layout>
    </>
  );
}

export default App;
