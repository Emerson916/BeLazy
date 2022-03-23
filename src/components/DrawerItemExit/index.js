import React from "react";
import { Container, Text } from "./styles";

const DrawerItemExit = ({ IconSvg, title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <IconSvg width="16" height="16" fill="#fff" />
      <Text>{title}</Text>
    </Container>
  );
};

export default DrawerItemExit;
