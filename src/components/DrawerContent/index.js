import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PremiumIcon from "../../assets/premiumIcon.svg";
import StarIcon from "../../assets/starIcon.svg";
import Logo from "../../assets/logo.svg";
import HomeIcon from "../../assets/homeIcon.svg";
import SearchIcon from "../../assets/searchIcon.svg";
import ConfigIcon from "../../assets/configIcon.svg";
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

const DrawerContent = (props) => {
  return (
    <Container>
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
        <DrawerItem IconSvg={HomeIcon} title="Home" />
        <DrawerItem IconSvg={StarIcon} title="Favoritos" />
        <DrawerItem IconSvg={SearchIcon} title="Pesquise" />
        <DrawerItem IconSvg={ConfigIcon} title="Suporte" />
      </ContainerDrawerNavigation>

      <ContainerExit>
        <DrawerItem IconSvg={HomeIcon} title="Sair" />
      </ContainerExit>
    </Container>
  );
};

export default DrawerContent;
