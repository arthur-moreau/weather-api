import React from 'react';
import { BigText } from './styled';

const MainText = ({ children }) => {
  return (
    <BigText>
      {children}
    </BigText>
  );
};

export default MainText;