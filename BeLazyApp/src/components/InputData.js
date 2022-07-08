import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

const InputData = ({
  IconSvg,
  placeholder,
  value,
  onChangeText,
  password,
  width,
  height,
}) => {
  return (
    <View style={styles(width, height).container}>
      <IconSvg width="24" height="24" fill="#343746" />
      <TextInput
        style={stylesInput.input}
        placeholder={placeholder}
        placeholderTextColor="#343746"
        //pegando o valor dos state (email e password)
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </View>
  );
};

export default InputData;

const styles = (width, height) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      backgroundColor: "#fff",
      flexDirection: "row",
      borderRadius: 15,
      paddingLeft: 15,
      alignItems: "center",
      marginVertical: 10,
    },
  });

const stylesInput = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 16,
    color: "#343746",
    marginLeft: 10,
  },
});
