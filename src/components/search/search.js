import React from 'react';
import MainText from '../main-text/main-text';
import * as S from './styled'

const Search = () => {
  return (
    <S.Container>
      <MainText>Como está o tempo hoje?</MainText>
      <S.SearchBox />
    </S.Container>
  );
};

export default Search;