import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styles";

const ButtonFeedback = ({text}) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default ButtonFeedback;
