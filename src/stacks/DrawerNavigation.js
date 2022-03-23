import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../screens/Login";
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoriteScreen";
import Search from "../screens/Search";
import SupportScreen from "../screens/SupportScreen";
import DrawerContent from "../components/DrawerContent";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Favoritos" component={FavoritesScreen} />
      <Drawer.Screen name="Pesquisa" component={Search} />
      <Drawer.Screen name="Suporte" component={SupportScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
