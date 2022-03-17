import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";
import { Container, ImageBackground } from "./styles";

const Home = () => {
  return (
    <Container>
      <LinearGradient
        style={styles.linearGradient}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1.3 }}
        colors={["#343746", "#303C76"]}
      >
        <ImageBackground>
          
        </ImageBackground>
      </LinearGradient>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
