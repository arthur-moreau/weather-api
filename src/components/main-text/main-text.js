import React from 'react';
import { BigText } from './styled';

const MainText = ({ uppercase, children }) => {
  return (
    <BigText props = {uppercase}>
      {children}
    </BigText>
  );
};

export default MainText;