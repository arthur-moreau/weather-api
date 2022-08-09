import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import backGround from '../../images/sky-1.png';

import MontserratWoff from "../../fonts/montserrat-regular.woff";
import MontserratWoff2 from "../../fonts/montserrat-regular.woff2";
import MontserratBoldWoff from "../../fonts/montserrat-700.woff";
import MontserratBoldWoff2 from "../../fonts/montserrat-700.woff2";


// Global fonts
export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'montserrat';
  src: url(${MontserratWoff2}) format('woff2'),
       url(${MontserratWoff}) format('woff');
}

@font-face {
  font-family: 'montserrat-bold';
  src: url(${MontserratBoldWoff2}) format('woff2'),
       url(${MontserratBoldWoff}) format('woff');
}
`;

// Global style config

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'montserrat', 'sans-serif';
  }
  
  body {
    margin: 0;
    color: #fff;
  }
`;

// Background container and adjustments

export const PageWrapper = styled.main`
  background-image: url(${backGround});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// Header

export const Header = styled.header`
  width: 1324px;
  display:flex;
  justify-content: flex-end;
  padding: 50px 50px 0;
`;

export const ButtonBack = styled.button`
  width:44px;
  height:44px;
  display:none;
`;

export const ButtonTemp = styled.button`
  width:95px;
  height:30px;
  border-radius: 50px
`;

// Footer

export const Footer = styled.footer`
  width: 170px;
  height: 35px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 84px;
  }

  p {
    font-size: 10px;
    margin: 0px;
    height:12px
  }
`;