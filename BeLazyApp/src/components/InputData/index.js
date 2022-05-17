import React from "react";
import { Container, Input } from "./styles";

const InputData = ({ IconSvg, placeholder, value, onChangeText, password }) => {
  return (
    <Container>
      <IconSvg width="24" height="24" fill="#343746" />
      <Input
        placeholder={placeholder}
        placeholderTextColor="#343746"
        //pegando o valor dos state (email e password)
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </Container>
  );
};

export default InputData;
