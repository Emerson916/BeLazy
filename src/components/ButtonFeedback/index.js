import React, { useState } from "react";
import { Container, Text } from "./styles";

const ButtonFeedback = ({ IconSvg, IconFill, title, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    const newState = !checked;
    setChecked(newState);

    if (!checked) {
      onChange(true);
      console.log("OnChange :", onChange(true));
    } else {
      onChange(false);
      console.log("OnChange2 :", onChange(false));
    }
  };
  return (
    <Container onPress={handleChecked}>
      {!checked ? (
        <IconSvg width="20" height="20" fill="#303C76" />
      ) : (
        <IconFill width="20" height="20" fill="#303C76" />
      )}
      <Text>{title}</Text>
    </Container>
  );
};

export default ButtonFeedback;
