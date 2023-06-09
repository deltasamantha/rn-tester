import {action, makeObservable, observable} from "mobx";
import React from "react";
import AuthStore from "./AuthStore";
import BaseStore from "./BaseStore";
import {AppState} from "react-native";

export class RootStore {
  stores = {
    authStore: new AuthStore(this),
    // 👊 Add more stores here
  };

  @observable
  initialized?: boolean;

  constructor() {
    console.log("Constructing root store...");

    AppState.addEventListener("change", e => {
      if (e === "active") {
        this.onAppActive();
      } else if (e === "background") {
        this.onAppBackground();
      }
    });

    this.makeObservable();
  }

  /**
   * Iterates thru all stores and makes them observable
   * https://mobx.js.org/observable-state.html#makeobservable
   */
  private makeObservable() {
    makeObservable(this);
    this.getSortedStores().map(s => makeObservable(s));
  }

  @action
  async onBeforeStart() {
    for (const store of this.getSortedStores()) {
      try {
        await store.onBeforeStart();
      } catch (err) {
        console.log("Failed to invoke onBeforeStart", store, err);
      }
    }
    console.log("[RootStore]", "Finished onBeforeStart");

    this.initialized = true;
  }

  @action
  private async onLogout() {
    for (const store of this.getSortedStores()) {
      try {
        await store.onLogout();
      } catch (err) {
        console.log("Failed to invoke onLogout", store, err);
      }
    }
    console.log("[RootStore]", "Finished onLogout");
  }

  private async onAppActive() {
    for (const store of this.getSortedStores()) {
      try {
        await store.onAppActive();
      } catch (err) {
        console.log("Failed to invoke onAppActive", store, err);
      }
    }
    console.log("[RootStore]", "Finished onAppActive");
  }

  private async onAppBackground() {
    for (const store of this.getSortedStores()) {
      try {
        await store.onAppBackground();
      } catch (err) {
        console.log("Failed to invoke onAppBackground", store, err);
      }
    }
    console.log("[RootStore]", "Finished onAppBackground");
  }

  async logout() {
    return this.onLogout();
  }

  private getSortedStores(): BaseStore[] {
    return Object.values(this.stores).sort((a, b) => a.priority - b.priority);
  }
}

export const rootStore = new RootStore();

const StoreContext = React.createContext({...rootStore.stores, rootStore});

/**
 * Access any store from any react component using
 * this `useStore` hook
 */
export const useStore = () => React.useContext(StoreContext);
