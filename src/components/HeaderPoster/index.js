import React from "react";
import {
  ContainerBackground,
  ImageBackground,
  TextFromBackground,
} from "./styles";

const HeaderPoster = () => {
  return (
    <ImageBackground
      opacity={0.6}
      source={require("../../assets/bannerSpiderMan.jpg")}
    >
      <ContainerBackground>
        <TextFromBackground>
          Homem-Aranha - Sem Volta Para Casa
        </TextFromBackground>
        <TextFromBackground>3 estralas</TextFromBackground>
        <TextFromBackground>220 min</TextFromBackground>
      </ContainerBackground>
    </ImageBackground>
  );
};

export default HeaderPoster;
