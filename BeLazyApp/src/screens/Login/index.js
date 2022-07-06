import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import Logo from "../../assets/logo.svg";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import InputData from "../../components/InputData";
import { Container, Text, View, TextRegister, ViewRegister } from "./styles";
import Button from "../../components/Button";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonClick = () => {
    //mandando o usuario para a proxima tela, mas sem deixar com que ele consiga voltar
    navigation.reset({
      routes: [{ name: "Register" }],
    });
  };

  return (
    <LinearGradient
      style={styles.linearGradient}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1.0 }}
      colors={["#343746", "#303C76"]}
    >
      <Container>
        <Logo width="200" height="160" />

        <View>
          <Text>Faça seu login</Text>
        </View>
        <InputData
          IconSvg={EmailIcon}
          value={email}
          placeholder="Digite seu e-mail"
          onChangeText={(t) => setEmail(t)}
        />
        <InputData
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={(t) => setPassword(t)}
          password={true}
        />

        <Button
          backgroundColor={"#6c63ff"}
          height={60}
          width={"90%"}
          text="ENTRAR"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <ViewRegister onPress={() => handleButtonClick()}>
          <Text> Ainda não possui uma conta ? </Text>

          <TextRegister>Cadastre-se</TextRegister>
        </ViewRegister>
      </Container>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
