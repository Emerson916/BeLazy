import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ButtonFeedback = ({ IconSvg, IconFill, title, onPress }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    // onPress={handleChecked}
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {!checked ? (
        <IconSvg width="20" height="20" fill="#303C76" />
      ) : (
        <IconFill width="20" height="20" fill="#303C76" />
      )}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonFeedback;

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#6c63ff",
    alignItems: "center",
    marginTop: 5,
    marginRight: 5,
    marginBottom: 25,
    padding: 5,
  },

  text: {
    color: "#fff",
    fontSize: 12,
  },
});
