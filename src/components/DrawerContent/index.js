import { StyleSheet, BackHandler } from "react-native";
import React from "react";
import PremiumIcon from "../../assets/premiumIcon.svg";
import StarIcon from "../../assets/starIcon.svg";
import Logo from "../../assets/logo.svg";
import HomeIcon from "../../assets/homeIcon.svg";
import SearchIcon from "../../assets/searchIcon.svg";
import ConfigIcon from "../../assets/configIcon.svg";
import ExitIcon from "../../assets/ExitIcon.svg";
import { Avatar } from "react-native-paper";
import {
  Container,
  HeaderDrawerLogo,
  ContainerDataUser,
  ContainerAvatar,
  NameUser,
  EmailUser,
  ContainerName,
  ContainerDrawerNavigation,
  ContainerExit,
} from "./styles";
import ButtonPremium from "../../components/ButtonPremium";
import DrawerItem from "../../components/DrawerItem";
import DrawerItemExit from "../../components/DrawerItemExit";
import { LinearGradient } from "expo-linear-gradient";

const DrawerContent = ({ navigation }) => {
  const handleBackApp = () => {
    BackHandler.exitApp();
    return true;
  };

  return (
    <Container>
      <LinearGradient
        style={styles.linearGradient}
        start={{ x: 1, y: 0 }}
        end={{ x: 3, y: 2 }}
        colors={["#303C76", "#6C63FF"]}
      >
        <HeaderDrawerLogo>
          <Logo width="100" height="100" />
        </HeaderDrawerLogo>

        <ContainerDataUser>
          <ContainerAvatar>
            <Avatar.Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/77053593?v=4",
              }}
            />
            <ButtonPremium IconSvg={PremiumIcon} title="Seja Premium" />
          </ContainerAvatar>

          <ContainerName>
            <NameUser>Emerson Silva de Almeida</NameUser>
            <EmailUser>@MrBaguela</EmailUser>
          </ContainerName>
        </ContainerDataUser>

        <ContainerDrawerNavigation>
          <DrawerItem
            IconSvg={HomeIcon}
            title="Home"
            onPress={() => navigation.navigate("Home")}
          />
          <DrawerItem
            IconSvg={StarIcon}
            title="Favoritos"
            onPress={() => navigation.navigate("Favoritos")}
          />
          <DrawerItem
            IconSvg={SearchIcon}
            title="Pesquise"
            onPress={() => navigation.navigate("Pesquisa")}
          />
          <DrawerItem
            IconSvg={ConfigIcon}
            title="Configurações"
            onPress={() => navigation.navigate("Suporte")}
          />
        </ContainerDrawerNavigation>
        <ContainerExit>
          <DrawerItemExit
            IconSvg={ExitIcon}
            title="Sair"
            onPress={() => handleBackApp()}
          />
        </ContainerExit>
      </LinearGradient>
    </Container>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
