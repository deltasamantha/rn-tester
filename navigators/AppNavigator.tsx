import {View, Text} from "react-native";
import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import SignIn from "../screens/sign-in/SignIn";
import SignUp from "../screens/sign-up/SignUp";
import Home from "../screens/home/Home";
import {useToken} from "native-base";

export type AppStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  const [bgLight, textDark, white] = useToken("colors", [
    "tester.400",
    "tester.900",
    "white",
  ]);
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen name="SignIn" component={SignIn} />
        <AppStack.Screen name="SignUp" component={SignUp} />
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export type AppNavProp = NativeStackNavigationProp<AppStackParamList>;

export default AppNavigator;
