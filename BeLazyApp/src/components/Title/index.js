import React from "react";
import { Container, Text } from "./styles";

const Title = (props) => {
  return (
    <Container>
      <Text>{props.text}</Text>
    </Container>
  );
};

export default Title;
