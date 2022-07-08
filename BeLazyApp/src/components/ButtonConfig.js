import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonConfig = ({ IconSvg, onPress, title }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <IconSvg size={10} color="#5c5a5a" />
    </TouchableOpacity>
  );
};

export default ButtonConfig;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "#6c63ff",
    flexDirection: "row",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },

  text: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },
});
