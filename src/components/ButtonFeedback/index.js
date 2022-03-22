import React from "react";
import { Container, Text } from "./styles";

const ButtonFeedback = ({IconSvg, title}) => {
  return (
    <Container>
      <IconSvg width="16" height="16" fill="#303C76"/>
      <Text>{title}</Text>
    </Container>
  );
};

export default ButtonFeedback;
