import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoriteScreen";
import Search from "../screens/Search";
import SupportScreen from "../screens/SupportScreen";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: "#343746" },
        headerTintColor: "#6C63FF",
        headerTransparent: false,
        title: false,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTransparent: true }}
      />
      <Drawer.Screen name="Favoritos" component={FavoritesScreen} />
      <Drawer.Screen name="Pesquisa" component={Search} />
      <Drawer.Screen name="Suporte" component={SupportScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
