import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  flex-direction: ${props => props.row ? "row" : "column"};
  align-items: center;
  justify-content: space-between;
  height: ${props => props.height};
  width: ${props => props.width};

  * {
    margin:0;
  }

  span {
    font-weight: 400;
    padding: 5px
  }

  a {
    font-size:12px;
    color:#fff;
    padding: 15px;
    text-underline-offset: 3px;
  }
`;

export const Temp = styled.p`
  font-size: 64px;
`;