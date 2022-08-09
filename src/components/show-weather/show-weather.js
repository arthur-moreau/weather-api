import React from "react";
import MainText from "../main-text/main-text";
import SecundaryText from "../secundary-text/secundary-text";
import * as S from "./styled";
import useWeather from '../../hooks/weather-hooks'



const ShowWeather = () => {
  
  const { weatherState } = useWeather()
  
  return (

    <S.Container height="250px">
      <MainText>{weatherState.city}</MainText>
      <SecundaryText>{weatherState.description}</SecundaryText>
      <S.Container row width="190px">
        <S.Temp>
          {weatherState.temp}º
        </S.Temp>
        <img
          src={weatherState.icon}
          alt="icone do tempo"
        />
      </S.Container>
      <S.Container row >
        <h4>
          Max:<span>{weatherState.max}º</span>
        </h4>
        <h4>
          Min:<span>{weatherState.min}º</span>
        </h4>
      </S.Container>
      <a href="#se">Ver previsão para os próximos 5 dias</a>
    </S.Container>
  );
};

export default ShowWeather;
