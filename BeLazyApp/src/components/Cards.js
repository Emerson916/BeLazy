import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const Cards = (props) => {
  const { imagecard, title_video } = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("CardDetails", props)}
    >
      <Image style={styles.image} source={{ uri: imagecard }} />
      <Text style={styles.text}>{title_video}</Text>
    </TouchableOpacity>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 130,
    marginHorizontal: 10,
  },

  image: {
    height: 180,
    width: "100%",
    borderRadius: 15,
  },

  text: {
    fontSize: 14,
    color: "#fff",
  },
});
