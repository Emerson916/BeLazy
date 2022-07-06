import React from "react";
import { Container, Image, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Cards = (props) => {
  const { imagecard, title_video } = props;
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate("CardDetails", props)}>
      <Image source={{ uri: imagecard }} />
      <Text>{title_video}</Text>
    </Container>
  );
};

export default Cards;
