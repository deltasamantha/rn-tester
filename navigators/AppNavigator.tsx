import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import Home from "../screens/home/Home";
import {useToken} from "native-base";

export type AppStackParamList = {
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
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
};

export type AppNavProp = NativeStackNavigationProp<AppStackParamList>;

export default AppNavigator;
