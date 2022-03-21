import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ScrollView } from "react-native";
import {
  Container
} from "./styles";
import ListVideos from "../../components/ListVideos";
import HeaderPoster from "../../components/HeaderPoster";

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
          <HeaderPoster />

          <ListVideos />
          <ListVideos />
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
