import AsyncStorage from "@react-native-async-storage/async-storage";
import {action, computed, IObservable, observable} from "mobx";
import BaseStore from "./BaseStore";

const ACCESS_TOKEN_KEY = "@accessToken";
const AUTH_USER_KEY = "@authUser";

class AuthStore extends BaseStore {
  @observable
  accessToken?: string;
  
  @observable
  accessToken2?: IObservable;

  @action
  async onBeforeStart() {
    this.accessToken =
      (await AsyncStorage.getItem(ACCESS_TOKEN_KEY)) || undefined;
  }

  @action
  async onLogout() {
    this.accessToken = undefined;
    await AsyncStorage.multiRemove([
      ACCESS_TOKEN_KEY,
      AUTH_USER_KEY /*, REFRESH_TOKEN_KEY*/,
    ]);
  }

  @computed
  get isLoggedIn() {
    return !!this.accessToken;
  }

  @action
  login(accessToken: string) {
    this.accessToken = accessToken;
    this.persistLoginDetails();
  }

  async persistLoginDetails() {
    if (this.accessToken) {
      return AsyncStorage.multiSet([[ACCESS_TOKEN_KEY, this.accessToken]]);
    }
  }
}

export default AuthStore;
