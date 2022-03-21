import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ScrollView } from "react-native";
import { Container } from "./styles";
import ListVideos from "../../components/ListVideos";
import ImageCarousel from "../../components/ImageCarousel";

const FAKE_DATA = {
  id: "7d20e569-b776-46d8-8178-65425ec8ecea",
  items: [
    {
      id: "622b3560b67c72f2fe45c761",
      imageBanner: "https://www.yorkvision.co.uk/wp-content/uploads/2021/12/Spider-Man_No_Way_Home_banner_001.jpg",
      video: {
        title_video: "Spider-Man - No Way Home",
        evaluation: 5,
        createdAt: 16476078,
        duration: 220,
        category: ["comedia", "Ação"],
      },
    },
    {
      id: "622b3560b67c72f2fe45c762",
      imageBanner:
        "https://legadodadc.com.br/wp-content/uploads/2021/11/FD1vP6lWQAMNHQl-1.jpg",
      video: {
        title_video: "The Batman",
        evaluation: 5,
        createdAt: 16476078,
        duration: 180,
        category: ["comedia", "Ação"],
      },
    },
    {
      id: "622b3560b67c72f2fe45c763",
      imageBanner:
        "https://i0.wp.com/critical-room.com/wp-content/uploads/2021/09/70ebdc124071947.60fc4e4924497.jpg?fit=2800%2C1890&ssl=1",
      video: {
        title_video: "Venom - Tempo de Carnificina",
        evaluation: 5,
        createdAt: 16476078,
        duration: 170,
        category: ["comedia", "Ação"],
      },
    },
    {
      id: "622b3560b67c72f2fe45c764",
      imageBanner: "https://pm1.narvii.com/7417/d62b6a9a1cab48b52502b0ea9022b8a520a46346r1-1080-1350v2_hq.jpg",
      video: {
        title_video: "Thor - Amor e Trovão",
        evaluation: 5,
        createdAt: 16476078,
        duration: 200,
        category: ["comedia", "Ação"],
      },
    },
  ],
};

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
          {/* <HeaderPoster /> */}
          <ImageCarousel data={FAKE_DATA.items} />
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
