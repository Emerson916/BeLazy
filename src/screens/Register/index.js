import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import Logo from "../../assets/logo.svg";
import EmailIcon from "../../assets/email.svg";
import PersonIcon from "../../assets/person.svg";
import LockIcon from "../../assets/lock.svg";
import InputData from "../../components/InputData";
import { Container, Text, View, TextLogin, ViewLogin } from "./styles";
import Button from "../../components/Button";

const Register = ({ navigation }) => {
  const handleButtonClick = () => {
    //mandando o usuario para a proxima tela, mas sem deixar com que ele consiga voltar
    navigation.reset({
      routes: [{ name: "Login" }],
    });
  };

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient
      style={styles.linearGradient}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1.3 }}
      colors={["#343746", "#303C76"]}
    >
      <Container>
        <Logo width="200" height="160" />

        <View>
          <Text>Criar uma conta</Text>
        </View>
        <InputData
          IconSvg={PersonIcon}
          value={user}
          placeholder="Digite seu nome"
          onChangeText={(t) => setUser(t)}
        />
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
          text="REGISTRAR-SE"
          onPress={() => handleButtonClick()}
        />
        <ViewLogin onPress={() => handleButtonClick()}>
          <Text> Já tem uma conta ?</Text>

          <TextLogin> Fazer Login</TextLogin>
        </ViewLogin>
      </Container>
    </LinearGradient>
  );
};

export default Register;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
