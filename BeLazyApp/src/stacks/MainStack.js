import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Preload from "../screens/Preload";
import Login from "../screens/Login";
import Register from "../screens/Register";
import DrawerNavigation from "./DrawerNavigation";
import CardDetails from "../screens/CardDetails";
import VideoScreen from "../screens/VideoScreen";

const Stack = createStackNavigator();

const Navigate = () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
      headerStyle: { backgroundColor: "#343746" },
      headerTransparent: true,
      headerTintColor: "#fff",
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
    <Stack.Screen name="VideoScreen" component={VideoScreen} />
  </Stack.Navigator>
);

export default Navigate;