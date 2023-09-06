import React from "react";
import { Animated, View } from "react-native";

import { ScreenContainer } from "@View/components";
import { LogoSvg } from "@Resources/svg";

import { SignInForm, SignInFormValues } from "./components";
import { LOGO_HEIGHT, styles } from "./styles";
import Props from "./types";

const SignInScreen = (props: Props) => {
  const heightValue = new Animated.Value(LOGO_HEIGHT);
  const initialValues: SignInFormValues = {
    email: "",
    password: "",
  };

  const onSignIn = (values: SignInFormValues) => {
    props.signIn({
      email: values.email,
      password: values.password,
    });
  };

  const navigateToSignUp = () => {
    props.navigation.navigate("SignUpScreen");
  };

  const onFocus = () => {
    Animated.timing(heightValue, {
      toValue: LOGO_HEIGHT / 2,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const onBlur = () => {
    Animated.timing(heightValue, {
      toValue: LOGO_HEIGHT,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <ScreenContainer withTopInset withBottomInset style={styles.container}>
      <View style={styles.root}>
        <LogoSvg height={heightValue} />

        <SignInForm
          navigateToSignUp={navigateToSignUp}
          onSignIn={onSignIn}
          initialValues={initialValues}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </View>
    </ScreenContainer>
  );
};

export default SignInScreen;
