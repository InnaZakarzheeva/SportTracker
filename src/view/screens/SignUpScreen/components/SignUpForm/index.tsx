import React from "react";
import { Formik, Field } from "formik";
import { View } from "react-native";

import { AccountCircleSvg, EmailSvg, PasswordIconSvg } from "@Resources";
import { Strings } from "@Resources/assets";
import { AppButton, AppInput, AppText } from "@View/components";
import { useFocus } from "@Utils";

import { SignUpSchema } from "./validation";
import { styles } from "./styles";
import { Props } from "./types";

export const SignUpForm = (props: Props) => {
  const refs = useFocus(props.initialValues);

  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={props.onSignUp}
      validateOnMount={true}
      validationSchema={SignUpSchema}>
      {({ values, handleSubmit, isValid }) => (
        <View style={styles.formWrapper}>
          <Field
            name="firstName"
            component={AppInput}
            placeholder={Strings.firstName}
            icon={<AccountCircleSvg />}
            withClear
            refs={refs}
            containerStyle={styles.input}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
          />
          <Field
            name="lastName"
            component={AppInput}
            placeholder={Strings.lastName}
            icon={<AccountCircleSvg />}
            withClear
            refs={refs}
            containerStyle={styles.input}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
          />
          <Field
            name="email"
            component={AppInput}
            placeholder={Strings.email}
            icon={<EmailSvg />}
            refs={refs}
            withClear={!!values?.email?.length}
            containerStyle={styles.input}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
          />
          <Field
            name="password"
            component={AppInput}
            placeholder={Strings.password}
            icon={<PasswordIconSvg />}
            refs={refs}
            withClear={!!values?.password?.length}
            withSecureText
            onFocus={props.onFocus}
            onBlur={props.onBlur}
          />
          <AppButton
            title={Strings.register}
            onPress={handleSubmit}
            style={styles.button}
            disabled={!isValid}
          />
          <View style={styles.labelWrapper}>
            <AppText fontType="paragraph_1" style={styles.label}>
              {Strings.already_have_account}
            </AppText>
            <AppButton
              title={Strings.sign_in}
              styleMode="text"
              titleStyle={styles.loginBtnTitle}
              onPress={props.navigateToSignIn}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
