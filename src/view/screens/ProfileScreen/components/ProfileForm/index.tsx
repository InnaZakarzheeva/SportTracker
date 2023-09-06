import React from "react";
import { Formik, Field } from "formik";
import { View } from "react-native";

import { AccountCircleSvg } from "@Resources";
import { Strings } from "@Resources/assets";
import { AppInput } from "@View/components";
import { useFocus } from "@Utils";

import { ProfileSchema } from "./validation";
import { styles } from "./styles";
import { Props } from "./types";

export const ProfileForm = (props: Props) => {
  const refs = useFocus(props.initialValues);

  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={props.onSave}
      validateOnMount={true}
      validationSchema={ProfileSchema}>
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
        </View>
      )}
    </Formik>
  );
};
