import React from "react";
import { Modal, View } from "react-native";

import { AppButton, AppText } from "@View/components";
import { Strings } from "@Resources";

import { styles } from "./styles";
import { Props } from "./types";

const ModalProvider = (props: Props) => {
  const { isVisible, children, text, hideModal } = props;

  return (
    <>
      {children}
      <Modal
        visible={isVisible}
        animationType="fade"
        presentationStyle="overFullScreen"
        transparent={true}
        statusBarTranslucent={true}>
        <View style={styles.modalWrapper}>
          <View style={styles.modal}>
            <AppText fontType="button_title" style={styles.message}>
              {text}
            </AppText>
            <AppButton
              title={Strings.understand}
              style={styles.button}
              onPress={hideModal}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalProvider;
