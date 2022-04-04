import React from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ContainerBackground,
  ImageBackground,
  TextFromBackground,
} from "./styles";
import Stars from "../Stars";

const ImageCarouselItem = (props) => {
  const { imageBanner, video } = props;
  //   const plot = id.substring(id.length - 2, id.length);
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");
  return (
    <Container
      style={{ width: width, height: height / 2 }}
      onPress={() => navigation.navigate("CardDetails", props)}
    >
      {/* <Text style={{ fontSize: 72 }}>{plot}</Text> */}
      <ImageBackground opacity={0.5} source={{ uri: imageBanner }}>
        <ContainerBackground>
          <TextFromBackground>{video.title_video}</TextFromBackground>
          <TextFromBackground>
            <Stars evaluation={video.evaluation} />
          </TextFromBackground>
          <TextFromBackground>{video.duration} min</TextFromBackground>
        </ContainerBackground>
      </ImageBackground>
    </Container>
  );
};

export default ImageCarouselItem;
