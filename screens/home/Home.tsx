import React from "react";
import {Box, Button, Text} from "native-base";
import RootContainer from "../../components/root-container/RootContainer";
import { observer } from "mobx-react";
import { useStore } from "../../store/RootStore";

const Home = () => {
  const { authStore, rootStore } = useStore();
  const { accessToken} = authStore;
  return (
    <RootContainer safeArea>
      <Text>Home</Text>
      <Text>{accessToken}</Text>
      <Button onPress={() => { rootStore.logout()}}>Log out</Button>
    </RootContainer>
  );
};

export default observer(Home);
