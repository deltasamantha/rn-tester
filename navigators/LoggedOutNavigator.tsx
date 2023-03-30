import React from "react";
import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack";
import SignIn from "../screens/sign-in/SignIn";
import SignUp from "../screens/sign-up/SignUp";

export type LoggedOutStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const LoggedOutStack = createNativeStackNavigator<LoggedOutStackParamList>();

const LoggedOutNavigator: React.FC = () => {
  return (
    <LoggedOutStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <LoggedOutStack.Screen name="SignIn" component={SignIn} />
      <LoggedOutStack.Screen name="SignUp" component={SignUp} />
    </LoggedOutStack.Navigator>
  );
};

export type LoggedOutNavProp = NativeStackNavigationProp<LoggedOutStackParamList>;

export default LoggedOutNavigator;
