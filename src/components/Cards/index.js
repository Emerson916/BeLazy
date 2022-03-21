import React from "react";
import { Container, Image, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Cards = ({ title, imageUrl}) => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('CardDetails')}>
      <Image source={{ uri: imageUrl[0] }} />
      <Text>{title}</Text>
    </Container>
  );
};

export default Cards;
