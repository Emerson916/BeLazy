import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Modal, ToastAndroid } from "react-native";

import { StyleSheet, ScrollView, Share } from "react-native";
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
  ContainerModel,
  Text,
  TextExit,
  ContainerText,
} from "./styles";
import ButtonFeedback from "../../components/ButtonFeedback";
import CamIcon from "../../assets/camIcon.svg";
import Bookmark from "../../assets/bookmark.svg";
import BookmarkFill from "../../assets/bookmarkFill.svg";
import ErrorIcon from "../../assets/error.svg";
import CompartilharIcon from "../../assets/compartilhar.svg";
import ButtonWatch from "../../components/ButtonWatch";
import InputData from "../../components/InputData";
import ButtonError from "../../components/ButtonError";

const CardDetails = (props) => {
  const { video, imageBanner } = props.route.params;
  // const [favorited, setFavorited] = useState(video.favorite);
  const [favorited, setFavorited] = useState(video.favorite);
  const [visible, setVisible] = useState(false);
  const [errorText, setErrorText] = useState("");

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `https://${video.link}.com.br`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  function onChange() {
    setVisible(false);
    ToastAndroid.show(
      "Pedimos desculpa pelo incoveniente, vamos resolver o problema o mais rápido o possível.",
      ToastAndroid.LONG
    );
    setErrorText("");
  }

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

          <ContainerCategory>
            <LaunchText>{video.releaseYear}</LaunchText>
            <LaunchText>{video.category}</LaunchText>
          </ContainerCategory>

          <ContainerButtons>
            <ButtonWatch
              text="Assistir"
              onPress={() => props.navigation.navigate("VideoScreen")}
            />
          </ContainerButtons>

          <ContainerSinopse>
            <TitleSinopse>Sinopse</TitleSinopse>
            <TextSinopse>{video.sinopse}</TextSinopse>
          </ContainerSinopse>

          <ContainerButtons>
            {/* <Text>favorited : {String(favorited)}</Text> */}
            <ButtonFeedback
              onChange={(favorited) => setFavorited(favorited)}
              // onChange={favorited}
              IconSvg={Bookmark}
              IconFill={BookmarkFill}
              title="Favoritar"
            />
            <ButtonFeedback
              IconSvg={ErrorIcon}
              title="Relatar Erro"
              onPress={() => setVisible(true)}
            />
            <ButtonFeedback
              IconSvg={CompartilharIcon}
              title="Compartilhar"
              onPress={() => onShare()}
            />
          </ContainerButtons>

          <Modal animationType="fade" transparent={true} visible={visible}>
            <ContainerModel>
              <ContainerText>
                <Text>Relate o problema que esta ocorrendo</Text>
                <TextExit onPress={() => setVisible(false)}>X</TextExit>
              </ContainerText>

              <InputData
                IconSvg={ErrorIcon}
                value={errorText}
                placeholder="Escreva aqui"
                onChangeText={(t) => setErrorText(t)}
              />
              <ButtonError
                title="Enviar"
                onPress={() => {
                  onChange();
                }}
              />
            </ContainerModel>
          </Modal>
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
