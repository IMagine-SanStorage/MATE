import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Login from "./Login";
import Iformation from "./Iformation";
import Ticket from "./Ticket";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Iformation" component={Iformation} />
        <Stack.Screen name="Ticket" component={Ticket} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}