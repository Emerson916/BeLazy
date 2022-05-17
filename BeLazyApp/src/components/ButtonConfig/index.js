import React from 'react'
import {ContainerButtonVoid, ButtonTextVoid} from './styles';

const ButtonConfig = ({IconSvg, onPress, title}) => {
  return (
    <ContainerButtonVoid onPress={onPress}>
      <ButtonTextVoid>{title} </ButtonTextVoid>
      <IconSvg size={10} color="#5c5a5a" />
    </ContainerButtonVoid>
  )
}

export default ButtonConfig