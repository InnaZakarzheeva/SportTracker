import React from "react";
import { View } from "react-native";
import { Formik, Field } from "formik";

import { AppButton, AppInput, AppText } from "@View/components";
import { EmailSvg, PasswordIconSvg, Strings } from "@Resources";
import { useFocus } from "@Utils";

import { styles } from "./styles";
import { SignInSchema } from "./validation";
import { Props } from "./types";

export const SignInForm = (props: Props) => {
  const refs = useFocus(props.initialValues);

  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={props.onSignIn}
      validateOnMount={true}
      validationSchema={SignInSchema}>
      {({ handleSubmit, isValid }) => (
        <View style={styles.formWrapper}>
          <Field
            name="email"
            component={AppInput}
            placeholder={Strings.email}
            icon={<EmailSvg />}
            withClear
            refs={refs}
            containerStyle={styles.inputEmail}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
          />
          <Field
            name="password"
            component={AppInput}
            placeholder={Strings.password}
            icon={<PasswordIconSvg />}
            returnKeyType="done"
            withClear
            refs={refs}
            withSecureText
            onFocus={props.onFocus}
            onBlur={props.onBlur}
          />
          <AppButton
            title={Strings.sign_in}
            onPress={handleSubmit}
            style={styles.button}
            disabled={!isValid}
          />
          <View style={styles.labelWrapper}>
            <AppText fontType="paragraph_1">{Strings.create_account}</AppText>
            <AppButton
              title={Strings.sign_up}
              styleMode="text"
              titleStyle={styles.createAccountBtnTitle}
              onPress={props.navigateToSignUp}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
