import React from "react";
import { ContainerButtonVoid, ButtonTextVoid } from "./styles";
import PlayIcon from "../../assets/playIcon.svg";

const ButtonWatch = (props) => {
  return (
    <ContainerButtonVoid onPress={props.onPress}>
      <PlayIcon width="30" height="30" />
      <ButtonTextVoid>{props.text} </ButtonTextVoid>
    </ContainerButtonVoid>
  );
};

export default ButtonWatch;
