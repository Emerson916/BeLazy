import React from "react";
import {
  Container,
  ContainerDataUser,
  TextName,
  TextEmail,
  ContainerConfig,
} from "./styles";
import { StyleSheet, ScrollView, Alert, BackHandler } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Title from "../../components/Title";
import ButtonPremium from "../../components/ButtonPremium";
import PremiumIcon from "../../assets/premiumIcon.svg";
import { Avatar } from "react-native-paper";
import ButtonConfig from "../../components/ButtonConfig";
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
    <Container>
      <LinearGradient
        style={styles.linearGradient}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1.0 }}
        colors={["#343746", "#303C76"]}
      >
        <ScrollView>
          <ContainerDataUser>
            <Avatar.Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/77053593?v=4",
              }}
            />

            <TextName>Emerson Silva</TextName>
            <TextEmail>emersons.a296@gmail.com</TextEmail>
            <ButtonPremium IconSvg={PremiumIcon} title="Seja Premium" />
          </ContainerDataUser>

          <ContainerConfig>
            <Title text="CONFIGURAÇÕES" />
            <ButtonConfig title="Editar Perfil" IconSvg={ArrowRight} />
            <ButtonConfig title="Permissão de dados" IconSvg={ArrowRight} />
            <ButtonConfig
              title="Permissão de Notificação"
              IconSvg={ArrowRight}
            />
            <ButtonConfig
              title="Sair"
              IconSvg={ArrowRight}
              onPress={() => alertMessage()}
            />
          </ContainerConfig>
        </ScrollView>
      </LinearGradient>
    </Container>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
