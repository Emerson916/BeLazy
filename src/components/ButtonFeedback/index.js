import React, { useState } from "react";
import { Container, Text } from "./styles";

const ButtonFeedback = ({ IconSvg, IconFill, title, onChange, onPress }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);

    if (!checked) {
      onChange(true);
    } else {
      onChange(false);
    }
  };
  return (
    // onPress={handleChecked}
    <Container onPress={onPress}>
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
