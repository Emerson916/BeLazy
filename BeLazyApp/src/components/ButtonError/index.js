import React from "react";
import { Container, Text } from "./styles";

const ButtonError = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Text>{title}</Text>
    </Container>
  );
};

export default ButtonError;
