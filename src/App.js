import React from "react";
import Layout from "./components/layout/layout";
import * as S from "./components/layout/styled"


const App = () => {
  return (
    <>
      <S.FontStyles />  
      <S.GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
