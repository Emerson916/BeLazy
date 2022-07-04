import React from 'react';
import {ContainerButtonVoid, ButtonTextVoid} from './styles';

const Button = ({onPress, text}) => {
  return (
    <ContainerButtonVoid onPress={onPress}>
      <ButtonTextVoid text>{text}</ButtonTextVoid>
    </ContainerButtonVoid>
  );
};

export default Button;