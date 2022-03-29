import React, { useEffect, BackHandler } from "react";
import { Container, LoadingIcon, Text, View } from "./styles";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../../assets/logo.svg";
import { useNavigation } from "@react-navigation/native";

const Preload = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setInterval(() => {
      // isso vai executar a cada 5 segundos
      if (timer < 1000) {
        navigation.reset({
          routes: [{ name: "Login" }],
        });
        console.log("Ainda estou rodando!!!");
      } else {
        alert("Algo deu errado!");
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <LinearGradient
      style={styles.linearGradient}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1.0 }}
      colors={["#343746", "#303C76"]}
    >
      <Container>
        <Logo width="200" height="160" />
        {/* <View>
          <Text>Olá, Bem-vindo</Text>
          <Text>Estamos carregando seus dados...</Text>
        </View> */}
        <LoadingIcon size="large" color="#FFF" />
      </Container>
    </LinearGradient>
  );
};

export default Preload;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
