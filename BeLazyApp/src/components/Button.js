import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ onPress, text, width, height, backgroundColor }) => {
  return (
    <TouchableOpacity
      style={styles(width, height, backgroundColor).container}
      onPress={onPress}
    >
      <Text style={stylesText.text} text>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = (width, height, backgroundColor) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      flexDirection: "row",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
    },
  });

const stylesText = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },
})
