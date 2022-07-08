import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const DrawerItemExit = ({ IconSvg, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <IconSvg width="16" height="16" fill="#fff" />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DrawerItemExit;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "#303c76",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
  },

  text: {
    color: "#fff",
    fontSize: 14,
    paddingLeft: 20,
  },
});
