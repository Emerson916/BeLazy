import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ScrollView } from "react-native";
import {
  Container,
  ContainerBackground,
  ImageBackground,
  TextFromBackground,
} from "./styles";

const HomeScreen = () => {
  return (
    <Container>
      <LinearGradient
        style={styles.linearGradient}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1.3 }}
        colors={["#343746", "#303C76"]}
      >
        <ScrollView>
          <ImageBackground
            opacity={0.6}
            source={require("../../assets/bannerSpiderMan.jpg")}
          >
            <ContainerBackground>
              <TextFromBackground>
                Homem-Aranha - Sem Volta Para Casa
              </TextFromBackground>
              <TextFromBackground>3 estralas</TextFromBackground>
              <TextFromBackground>220 min</TextFromBackground>
            </ContainerBackground>
          </ImageBackground>
        </ScrollView>
      </LinearGradient>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
