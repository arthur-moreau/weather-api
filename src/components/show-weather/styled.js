import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  flex-direction: ${props => props.row ? "row" : "column"};
  align-items: center;
  justify-content: space-between;
  height: ${props => props.height};

  * {
    margin:0;
  }

  a {
    color:#fff;
  }
`;

export const Temp = styled.p`
  font-size: 64px;
  display: flex;
  align-items: center;
`;