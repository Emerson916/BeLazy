import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const DrawerItem = ({ IconSvg, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <IconSvg width="16" height="16" fill="#fff" />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    marginBottom: 2,
  },

  text: {
    color: "#fff",
    fontSize: 14,
    paddingLeft: 20,
  },
});
