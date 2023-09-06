import React, { useEffect } from "react";
import { View } from "react-native";

import { LogoSvg } from "@Resources";
import { ApiManager } from "@Api";
import { LocalStorage } from "@Utils";

import { styles } from "./styles";
import Props from "./types";

const SplashScreen = (props: Props) => {
  useEffect(() => {
    LocalStorage.get("auth_token").then(value => {
      if (value) {
        ApiManager.getInstance().setToken(value);
        props.navigateToMain();
      }
    });
    setTimeout(() => {
      props.hideSplashScreen();
    }, 500);
  }, []);

  return (
    <View style={styles.root}>
      <LogoSvg />
    </View>
  );
};

export default SplashScreen;
