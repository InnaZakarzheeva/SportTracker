import React from "react";
import { Animated } from "react-native";

import { AppText, ScreenContainer } from "@View/components";
import { Strings } from "@Resources/assets";

import { SignUpForm, SignUpFormValues } from "./components";
import { PADDING_TOP, styles } from "./styles";
import Props from "./types";

const SignUpScreen = (props: Props) => {
  const marginValue = new Animated.Value(PADDING_TOP);
  const opacity = new Animated.Value(1);
  const initialValues: SignUpFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const onSignUp = (values: SignUpFormValues) => {
    props.signUp({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    });
  };

  const navigateToSignIn = () => {
    props.navigation.navigate("SignInScreen");
  };

  const onFocus = () => {
    Animated.parallel([
      Animated.timing(marginValue, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const onBlur = () => {
    Animated.parallel([
      Animated.timing(marginValue, {
        toValue: PADDING_TOP,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <ScreenContainer
      withTopInset={false}
      withBottomInset
      style={styles.container}>
      <Animated.View style={[styles.root, { paddingTop: marginValue }]}>
        <Animated.View style={{ transform: [{ scale: opacity }] }}>
          <AppText fontType="header_1" style={styles.registration}>
            {Strings.sign_up}
          </AppText>
        </Animated.View>

        <SignUpForm
          navigateToSignIn={navigateToSignIn}
          onSignUp={onSignUp}
          initialValues={initialValues}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Animated.View>
    </ScreenContainer>
  );
};

export default SignUpScreen;
