import React from "react";
import * as S from "./styled";

import brasil from "../../images/brasil-1.png";
import eua from "../../images/estados-unidos-1.png";
import spain from "../../images/spain-1.png";


const Layout = ({ children }) => {
  return (
    <S.PageWrapper>
      <S.FontStyles />  
      <S.GlobalStyle />
      <S.Header>
        <S.ButtonBack> seta esquerda </S.ButtonBack>
        <S.ButtonTemp>ºC ou ºF</S.ButtonTemp>
      </S.Header>

      {children}

      <S.Footer>
        <div>
          <img src={brasil} alt="bandeira do brasil" />
          <img src={eua} alt="bandeira dos estados unidos" />
          <img src={spain} alt="bandeira da espanha" />
        </div>
        <p>Idioma selecionado: Português</p>
      </S.Footer>
    </S.PageWrapper>
  );
}

export default Layout;
