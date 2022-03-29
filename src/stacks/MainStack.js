import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Preload from "../screens/Preload";
import Login from "../screens/Login";
import Register from "../screens/Register";
import DrawerNavigation from "./DrawerNavigation";
import CardDetails from "../screens/CardDetails";

const Stack = createStackNavigator();

const Navigate = () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
      headerStyle: { backgroundColor: "#343746" },
      headerTintColor: "#6C63FF",
    }}
  >
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="HomeScreen" component={DrawerNavigation} />
    <Stack.Screen
      name="CardDetails"
      component={CardDetails}
      options={{
        headerShown: true,
        title: false,
      }}
    />
  </Stack.Navigator>
);

export default Navigate;
