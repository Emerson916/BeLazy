import React from 'react';
import {ContainerButtonVoid, ButtonTextVoid} from './styles';

const Button = ({onPress, text, width, height, backgroundColor}) => {
  return (
    <ContainerButtonVoid style={{width, height, backgroundColor}} onPress={onPress}>
      <ButtonTextVoid text>{text}</ButtonTextVoid>
    </ContainerButtonVoid>
  );
};

export default Button;