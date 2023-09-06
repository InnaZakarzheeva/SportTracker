import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";
import Props from "./types";
import { EditSvg, LogOutSvg } from "@Resources";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ProfileForm, ProfileFormValues } from "./components";

const ProfileScreen = (props: Props) => {
  const insents = useSafeAreaInsets();
  const initialValues: ProfileFormValues = {
    firstName: "",
    lastName: "",
  };

  const onSave = () => {};

  return (
    <View style={[styles.root, { paddingTop: insents.top }]}>
      <View style={styles.headerWrapper}>
        <LogOutSvg />
        <Image
          source={require("@Resources/assets/images/profile.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <EditSvg />
      </View>
      <ProfileForm
        onSave={onSave}
        initialValues={initialValues}
        onFocus={() => {}}
        onBlur={() => {}}
      />
    </View>
  );
};

export default ProfileScreen;
