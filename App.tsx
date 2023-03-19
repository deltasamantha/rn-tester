import {NativeBaseProvider} from "native-base";
import React from "react";
import {StatusBar, useColorScheme} from "react-native";

import {Colors} from "react-native/Libraries/NewAppScreen";
import AppNavigator from "./navigators/AppNavigator";
import {testerTheme} from "./theme/tester-theme";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NativeBaseProvider theme={testerTheme}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AppNavigator />
    </NativeBaseProvider>
  );
};

export default App;
