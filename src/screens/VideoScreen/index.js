import React from "react";
import { Container, LoadingIcon } from "./styles";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const VideoScreen = () => {
  return (
    <LinearGradient
      style={styles.linearGradient}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1.0 }}
      colors={["#343746", "#303C76"]}
    >
      <Container>
        <LoadingIcon size="large" color="#FFF" />
      </Container>
    </LinearGradient>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
