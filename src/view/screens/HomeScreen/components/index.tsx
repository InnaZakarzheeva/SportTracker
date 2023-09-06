import { RightArrowSvg } from "@Resources";
import { Trainning } from "@State/trainnings/types";
import { AppText } from "@View/components";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles, { progressInner } from "./styles";

const TrainningItem = ({
  item,
  onPress,
}: {
  item: Trainning;
  onPress: (item: Trainning) => void;
}) => (
  <TouchableOpacity onPress={() => onPress(item)} style={styles.itemWrapper}>
    <View style={styles.infoWrapper}>
      <AppText fontType="paragraph_2">{item.title}</AppText>
      <AppText fontType="paragraph_3">{item.description}</AppText>
      <View style={styles.progressWrapper}>
        <View style={progressInner(item.dificulty)} />
      </View>
    </View>
    <RightArrowSvg />
  </TouchableOpacity>
);

export default TrainningItem;
