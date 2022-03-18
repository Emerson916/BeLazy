import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Preload from "../screens/Preload";
import Login from "../screens/Login";
import Register from "../screens/Register";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createStackNavigator();

const Navigate = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="HomeScreen" component={DrawerNavigation} />
  </Stack.Navigator>
);

export default Navigate;
