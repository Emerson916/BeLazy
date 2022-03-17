import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../screens/Login";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeDrawer" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
