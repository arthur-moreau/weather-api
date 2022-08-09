import React, { useState } from 'react';
import useWeather from '../../hooks/weather-hooks';
import MainText from '../main-text/main-text';
import * as S from './styled';

const Search = () => {

  const { getWeather } = useWeather();
  const [placeForSearch, setPlaceForSearch] = useState()

  const submitGetWeather = ()=> {
    if(!placeForSearch) return;
    return getWeather(placeForSearch);
  }

  return (
    <S.Container>
      <MainText>Como está o tempo hoje?</MainText>
      <S.SearchBox type="text" onChange={(event) => setPlaceForSearch(event.target.value)}/>
      <S.SearchBtn type='submit' onClick={submitGetWeather}/>
    </S.Container>
  );
};

export default Search;