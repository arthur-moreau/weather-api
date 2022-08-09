import React from "react";
import MainText from "../main-text/main-text";
import SecundaryText from "../secundary-text/secundary-text";
import * as S from "./styled";

const ShowWeather = () => {
  return (
    <S.Container height="250px">
      <MainText>belo horizonte</MainText>
      <SecundaryText>Nuvens Dispersas</SecundaryText>
      <S.Temp>
        <div>
          29<sup>o</sup>
        </div>
        <img
          src="http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
          alt="icone do tempo"
        />
      </S.Temp>
      <S.Container row>
        <h4>
          Max:{" "}
          <span>
            29<sup>o</sup>
          </span>
        </h4>
        <h4>
          Min:{" "}
          <span>
            14<sup>o</sup>
          </span>
        </h4>
      </S.Container>
      <a href="#se">Ver previsão para os próximos 5 dias</a>
    </S.Container>
  );
};

export default ShowWeather;
