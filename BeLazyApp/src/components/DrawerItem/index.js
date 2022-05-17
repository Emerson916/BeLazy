import React from "react";
import { Container, Text } from "./styles";

const DrawerItem = ({ IconSvg, title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <IconSvg width="16" height="16" fill="#fff" />
      <Text>{title}</Text>
    </Container>
  );
};

export default DrawerItem;
