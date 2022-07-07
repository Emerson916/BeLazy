import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Alert,
  BackHandler,
  Text,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PremiumIcon from "../../assets/premiumIcon.svg";
import ButtonConfig from "../../components/ButtonConfig";
import Button from "../../components/Button";
import ArrowRight from "../../assets/arrowRight.svg";

const SupportScreen = () => {
  const handleBackApp = () => {
    BackHandler.exitApp();
    return true;
  };

  const alertMessage = () => {
    Alert.alert("Quer mesmo sair do app ?", "😭😭", [
      {
        text: "Não",
      },
      { text: "Sim", onPress: () => handleBackApp() },
    ]);
  };

  return (
    <LinearGradient
      style={styles.linearGradient}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1.0 }}
      colors={["#343746", "#303C76"]}
    >
      <ScrollView>
        <View style={styles.containerDataUser}>
          <Image
            style={styles.avatarUser}
            source={{
              uri: "https://avatars.githubusercontent.com/u/77053593?v=4",
            }}
          />

          <Text style={styles.Text}>Emerson Silva</Text>
          <Text style={styles.Text}>emersons.a296@gmail.com</Text>
          <Button
            width={150}
            height={30}
            backgroundColor={"#303c76"}
            IconSvg={PremiumIcon}
            text="Ser Premium"
          />
        </View>

        <View style={styles.containerConfig}>
          <Text style={styles.Text}>CONFIGURAÇÕES</Text>
          <ButtonConfig title="Editar Perfil" IconSvg={ArrowRight} />
          <ButtonConfig title="Permissão de dados" IconSvg={ArrowRight} />
          <ButtonConfig title="Permissão de Notificação" IconSvg={ArrowRight} />
          <ButtonConfig
            title="Sair"
            IconSvg={ArrowRight}
            onPress={() => alertMessage()}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  containerDataUser: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },

  avatarUser: {
    width: 80,
    height: 80,
    borderRadius: 90,
  },

  Text: {
    color: "#fff",
    margin: 10,
    fontSize: 18,
  },

  containerConfig: {
    width: "100%",
    height: "100%",
    backgroundColor: "#303c76",
    borderRadius: 40,
    padding: 20,
  },
});
