import React from "react";
import { Container } from "./styles";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SupportScreen = () => {
  return (
    <Container>
      <LinearGradient
        style={styles.linearGradient}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1.0 }}
        colors={["#343746", "#303C76"]}
      ></LinearGradient>
    </Container>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
