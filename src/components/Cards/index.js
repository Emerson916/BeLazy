import React from "react";
import { Container, Image, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Cards = (props) => {
  const { video, imageCard } = props;
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate("CardDetails", props)}>
      <Image source={{ uri: imageCard }} />
      <Text>{video.title_video}</Text>
    </Container>
  );
};

export default Cards;
