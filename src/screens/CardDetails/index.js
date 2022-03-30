import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ScrollView } from "react-native";
import {
  Container,
  ImageBackground,
  ContainerCategory,
  ContainerSinopse,
  ContainerButtons,
  TitleText,
  LaunchText,
  ContainerTypeVideo,
  TypeVideo,
  ContainerTitle,
  TextSinopse,
  TitleSinopse,
  ContainerStars,
} from "./styles";
import ButtonFeedback from "../../components/ButtonFeedback";
import CamIcon from "../../assets/camIcon.svg";
import Bookmark from "../../assets/bookmark.svg";
import ErrorIcon from "../../assets/error.svg";
import CompartilharIcon from "../../assets/compartilhar.svg";
import ButtonWatch from "../../components/ButtonWatch";
import Stars from "../../components/Stars";

const CardDetails = (props) => {
  const { video, imageBanner } = props.route.params;

  return (
    <Container>
      <LinearGradient
        style={styles.linearGradient}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1.0 }}
        colors={["#343746", "#303C76"]}
      >
        <ScrollView>
          <ImageBackground opacity={0.6} source={{ uri: imageBanner }} />

          <ContainerTypeVideo>
            <CamIcon width="20" height="20" />
            <TypeVideo>{video.type.replace("FILM", "Filme")}</TypeVideo>
          </ContainerTypeVideo>

          <ContainerTitle>
            <TitleText>{video.title_video}</TitleText>
          </ContainerTitle>

          <ContainerStars>
            <Stars evaluation={video.evaluation} />
          </ContainerStars>

          <ContainerCategory>
            <LaunchText>{video.releaseYear}</LaunchText>
            <LaunchText>{video.category}</LaunchText>
          </ContainerCategory>

          <ContainerButtons>
            <ButtonWatch text="Assistir" />
          </ContainerButtons>

          <ContainerSinopse>
            <TitleSinopse>Sinopse</TitleSinopse>
            <TextSinopse>{video.sinopse}</TextSinopse>
          </ContainerSinopse>

          <ContainerButtons>
            <ButtonFeedback IconSvg={Bookmark} title="Favoritar" />
            <ButtonFeedback IconSvg={ErrorIcon} title="Relatar Erro" />
            <ButtonFeedback IconSvg={CompartilharIcon} title="Compartilhar" />
          </ContainerButtons>
        </ScrollView>
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
