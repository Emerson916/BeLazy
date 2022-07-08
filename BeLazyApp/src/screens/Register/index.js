import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Logo from "../../assets/logo.svg";
import EmailIcon from "../../assets/email.svg";
import PersonIcon from "../../assets/person.svg";
import LockIcon from "../../assets/lock.svg";
import InputData from "../../components/InputData";
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
      end={{ x: 1, y: 1.0 }}
      colors={["#343746", "#303C76"]}
    >
      <Logo width="200" height="150" />

      <View style={styles.containerText}>
        <Text style={styles.text}>Criar uma conta</Text>
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
        backgroundColor={"#6c63ff"}
        height={60}
        width={"90%"}
        text="REGISTRAR-SE"
        onPress={() => handleButtonClick()}
      />
      <TouchableOpacity style={styles.containerLogin} onPress={() => handleButtonClick()}>
        <Text style={styles.text}> Já tem uma conta ?</Text>

        <Text style={styles.textLogin}> Fazer Login </Text>
      </TouchableOpacity>
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

  containerText: {
    width: "90%",
    marginBottom: 10,
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginVertical: 10,
  },

  containerLogin: {
    width: "85%",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  textLogin: {
    color: "#6c63ff",
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 20,
  },
});
