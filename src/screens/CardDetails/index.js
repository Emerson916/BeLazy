import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import {
  Container,
  ImageBackground,
  ContainerVideoData,
  ContainerTextData,
  ContainerButtons,
  TitleText,
  LaunchText,
  ContainerTypeVideo,
  TypeVideo
} from "./styles";
import ButtonFeedback from "../../components/ButtonFeedback";

const CardDetails = () => {
  return (
    <Container>
      <LinearGradient
        style={styles.linearGradient}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1.3 }}
        colors={["#343746", "#303C76"]}
      >
        <ImageBackground
          opacity={0.6}
          source={require("../../assets/bannerSpiderMan.jpg")}
        />

        <ContainerVideoData>
          <ContainerTextData>
            <TitleText>Venom</TitleText>
            <LaunchText>lan. 2021</LaunchText>
          </ContainerTextData>

          <ContainerButtons>
            <ButtonFeedback />
            <ButtonFeedback />
            <ButtonFeedback />
          </ContainerButtons>
        </ContainerVideoData>

        <ContainerTypeVideo>
          <TypeVideo>Filme</TypeVideo>
        </ContainerTypeVideo>
      </LinearGradient>
    </Container>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
