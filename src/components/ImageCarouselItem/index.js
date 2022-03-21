import React from "react";
import { Dimensions } from "react-native";
import {
  Container,
  ContainerBackground,
  ImageBackground,
  TextFromBackground,
} from "./styles";

const ImageCarouselItem = ({ imageBanner, video }) => {
  //   const plot = id.substring(id.length - 2, id.length);
  const { height, width } = Dimensions.get("window");
  return (
    <Container style={{ width: width, height: height / 2.8 }}>
      {/* <Text style={{ fontSize: 72 }}>{plot}</Text> */}
      <ImageBackground opacity={0.6} source={{ uri: imageBanner }}>
        <ContainerBackground>
          <TextFromBackground>
            {video.title_video}
          </TextFromBackground>
          <TextFromBackground>{video.evaluation} estralas</TextFromBackground>
          <TextFromBackground>{video.duration} min</TextFromBackground>
        </ContainerBackground>
      </ImageBackground>
    </Container>
  );
};

export default ImageCarouselItem;
