import React from 'react';
import {ContainerButtonVoid, ButtonTextVoid} from './styles';

const Button = props => {
  return (
    <ContainerButtonVoid onPress={props.onPress}>
      <ButtonTextVoid>{props.text} </ButtonTextVoid>
    </ContainerButtonVoid>
  );
};

export default Button;