import React from "react";
import {
  ContainerBackground,
  ImageBackground,
  TextFromBackground,
} from "./styles";
import ImageCarousel from "../ImageCarousel";

const HeaderPoster = () => {
  return (
    // <ImageBackground
    //   opacity={0.6}
    //   source={require("../../assets/bannerSpiderMan.jpg")}
    // >

    <>
      {/* <ImageCarousel data={FAKE_DATA.items} /> */}

      <ContainerBackground>
        <TextFromBackground>
          Homem-Aranha - Sem Volta Para Casa
        </TextFromBackground>
        <TextFromBackground>3 estralas</TextFromBackground>
        <TextFromBackground>220 min</TextFromBackground>
      </ContainerBackground>
    </>
  );
};

export default HeaderPoster;
