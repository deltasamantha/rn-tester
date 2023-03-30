import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useStore} from "../store/RootStore";
import AppNavigator from "./AppNavigator";
import LoggedOutNavigator from "./LoggedOutNavigator";

type AuthNavParamList = {
  LoggedIn: undefined;
  LoggedOut: undefined;
};

const AuthStack = createNativeStackNavigator<AuthNavParamList>();

const AuthNavigator = () => {
  const {authStore} = useStore();

  function renderNavigator() {
    if (authStore.isLoggedIn) {
      return (
        <AuthStack.Screen
          name="LoggedIn"
          component={AppNavigator}
          options={{headerShown: false, gestureEnabled: false}}
        />
      );
    } else {
      return (
        <AuthStack.Screen
          name="LoggedOut"
          component={LoggedOutNavigator}
          options={{gestureEnabled: false, headerShown: false}}
        />
      );
    }
  }

  return (
    <NavigationContainer>
      <AuthStack.Navigator>{renderNavigator()}</AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default observer(AuthNavigator);
