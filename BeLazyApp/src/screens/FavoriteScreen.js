import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const FavoritesScreen = () => {
  return (
    <LinearGradient
      style={styles.linearGradient}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1.0 }}
      colors={["#343746", "#303C76"]}
    ></LinearGradient>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
