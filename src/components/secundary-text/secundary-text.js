import React from 'react';
import * as S from './styled'

const SecundaryText = ({ children }) => {
  return (
    <S.MinorText>
      {children}
    </S.MinorText>
  );
};

export default SecundaryText;