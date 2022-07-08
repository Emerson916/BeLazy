import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Modal,
  ToastAndroid,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Share,
} from "react-native";

import ButtonFeedback from "../components/ButtonFeedback";
import CameraIcon from "../assets/camIcon.svg";
import Bookmark from "../assets/bookmark.svg";
import BookmarkFill from "../assets/bookmarkFill.svg";
import ErrorIcon from "../assets/error.svg";
import CompartilharIcon from "../assets/compartilhar.svg";
import ExitError from "../assets/exitError.svg";
import FileIcon from  "../assets/file.svg"
import HeartIcon from  "../assets/heart.svg"
// import InputData from "../../components/InputData";
import Button from "../components/Button";
import Stars from "../components/Stars";

const CardDetails = (props) => {
  const { imagecard, title_video, releaseyear, sinopse, evaluation, duration } =
    props.route.params;
  const [visible, setVisible] = useState(false);
  const [errorText, setErrorText] = useState("");

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `https://github.com/Emerson916`,
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
    <LinearGradient
      style={styles.linearGradient}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1.0 }}
      colors={["#343746", "#303C76"]}
    >
      <ScrollView>
        <Text style={styles.title}>{title_video || "Titulo indisponível"}</Text>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.imageCard}
              opacity={0.6}
              source={{ uri: imagecard }}
            />
          </View>
          <View style={styles.containerData}>
            <View style={styles.data}>
              <CameraIcon width={18} height={18} />
              <Text style={styles.textData}>Tipo</Text>
            </View>
            <Text style={styles.text}>Filme</Text>
            <View style={styles.data}>
              <HeartIcon width={18} height={18} />
              <Text style={styles.textData}>Avaliação geral</Text>
            </View>
            <View style={styles.stars}>
              <Stars evaluation={evaluation} />
            </View>
            <View style={styles.data}>
              <FileIcon width={18} height={18} />
              <Text style={styles.textData}>Lançado em</Text>
            </View>
            <Text style={styles.text}>{releaseyear || "Indisponível"}</Text>
            <View style={styles.data}>
              <FileIcon width={18} height={18} />
              <Text style={styles.textData}>Duração</Text>
            </View>
            <Text style={styles.text}>{duration || "Indisponível"} min</Text>
          </View>
        </View>

        <View style={styles.containerWatch}>
          <Button
            backgroundColor={"#6c63ff"}
            height={50}
            width={"90%"}
            text="Assistir"
          />
        </View>

        <View style={styles.containerSinopse}>
          <Text style={styles.titleSinopse}>Sinopse</Text>
          <Text style={styles.textSinopse}>
            {sinopse || "Sinopse indisponível"}
          </Text>
        </View>

        <View style={styles.containerFeedback}>
          <ButtonFeedback
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
        </View>

        <Modal animationType="fade" transparent={true} visible={visible}>
          <View style={styles.containerTextArea}>
            <View style={styles.containerTitleModal}>
              <Text style={styles.textErro}>Relate o erro</Text>
              <ExitError
                width={30}
                height={30}
                onPress={() => setVisible(false)}
              ></ExitError>
            </View>

            <TextInput
              style={styles.textArea}
              multiline
              placeholder="Conte com detalhes o que está acontecendo..."
              placeholderTextColor={"#fff"}
              autoCorrect={false}
            />
            <Button
              backgroundColor={"#6c63ff"}
              height={60}
              width={"90%"}
              text="Enviar"
              onPress={() => {
                onChange();
              }}
            />
          </View>
        </Modal>
      </ScrollView>
    </LinearGradient>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  container: {
    flexDirection: "row",
    margin: 15,
  },

  imageCard: {
    height: 230,
    width: 160,
  },

  containerData: {
    marginStart: 20,
    height: 220,
  },

  data: {
    flexDirection: "row",
    marginBottom: 5,
  },

  textData: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    paddingStart: 10,
  },

  text: {
    color: "#fff",
    marginBottom: 10,
  },

  containerWatch: {
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 5,
    fontWeight: "bold",
  },

  stars: {
    flexDirection: "row",
    marginBottom: 15,
    paddingTop: 5,
  },

  containerSinopse: {
    margin: 20,
  },

  titleSinopse: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  textSinopse: {
    color: "#fff",
    fontSize: 16,
  },

  containerFeedback: {
    flexDirection: "row",
    justifyContent: "center",
  },

  containerTextArea: {
    width: "100%",
    height: 350,
    marginTop: 150,
    alignItems: "center",
    backgroundColor: "#303c76",
    color: "#fff",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#fff",
  },

  containerTitleModal: {
    color: "#fff",
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textArea: {
    height: 180,
    width: "100%",
    marginTop: 5,
    padding: 10,
    color: "#fff",
  },

  textErro: {
    fontSize: 18,
    color: "#fff",
  },
});
