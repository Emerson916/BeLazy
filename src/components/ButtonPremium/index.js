import React from "react";
import { Container, Text } from "./styles";

const ButtonPremium = ({ IconSvg, title }) => {
  return (
    <Container>
      <IconSvg width="16" height="16" fill="#fff" />
      <Text>{title}</Text>
    </Container>
  );
};

export default ButtonPremium;
