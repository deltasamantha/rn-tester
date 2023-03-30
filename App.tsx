import {NativeBaseProvider} from "native-base";
import React, {useEffect, useState} from "react";
import {StatusBar, useColorScheme} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import AuthNavigator from "./navigators/AuthNavigator";
import {useStore} from "./store/RootStore";
import {testerTheme} from "./theme/tester-theme";

const App = () => {
  const {rootStore} = useStore();
  const isDarkMode = useColorScheme() === "dark";
  const [isInitialized, setInitialized] = useState(false);

  useEffect(() => {
    async function init() {
      await rootStore.onBeforeStart();
      setInitialized(true);
    }

    init();
  }, [rootStore]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NativeBaseProvider theme={testerTheme}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {isInitialized && <AuthNavigator />}
    </NativeBaseProvider>
  );
};

export default App;
