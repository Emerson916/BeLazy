import React from "react";
import { StyleSheet, BackHandler, Alert, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StarIcon from "../../assets/starIcon.svg";
import Logo from "../../assets/logo.svg";
import HomeIcon from "../../assets/homeIcon.svg";
import SearchIcon from "../../assets/searchIcon.svg";
import ConfigIcon from "../../assets/configIcon.svg";
import ExitIcon from "../../assets/ExitIcon.svg";
import { Avatar } from "react-native-paper";
import Button from "../../components/Button";
import DrawerItem from "../DrawerContent/DrawerItem";
import DrawerItemExit from "../DrawerContent/DrawerItemExit";

const DrawerContent = ({ navigation }) => {
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
      end={{ x: 3, y: 2 }}
      colors={["#303C76", "#6C63FF"]}
    >
      <View style={styles.headerDrawerLogo}>
        <Logo width="100" height="100" />
      </View>

      <View style={styles.containerDataUser}>
        <View style={styles.containerAvatar}>
          <Avatar.Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/77053593?v=4",
            }}
          />
          <Button
            width={150}
            height={30}
            backgroundColor={"#303c76"}
            text="Ser Premium"
          />
        </View>

        <View style={styles.containerName}>
          <Text style={styles.userName}>Emerson Silva de Almeida</Text>
          <Text style={styles.userEmail}>@MrBaguela</Text>
        </View>
      </View>

      <View style={styles.containerDrawerNavigation}>
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
          onPress={() => navigation.navigate("Configuracao")}
        />
      </View>
      <View style={styles.containerExit}>
        <DrawerItemExit
          IconSvg={ExitIcon}
          title="Sair"
          onPress={() => alertMessage()}
        />
      </View>
    </LinearGradient>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  headerDrawerLogo: {
    width: "100%",
    height: 100,
    paddingLeft: 10,
  },

  containerDataUser: {
    width: "100%",
    height: 150,
    marginTop: 1,
    backgroundColor: "#6c63ff",
    borderTopColor: "#f4f4f4",
    borderBottomColor: "#f4f4f4",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },

  containerAvatar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  containerName: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  userName: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "#fff",
  },

  userEmail: {
    fontSize: 14,
    color: "#fff",
  },

  containerDrawerNavigation: {
    width: "100%",
  },

  containerExit: {
    width: "100%",
    position: "absolute",
    bottom: "0",
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});
