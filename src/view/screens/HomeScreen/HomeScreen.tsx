import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";

import { AppButton, AppText } from "@View/components";

import { styles } from "./styles";
import Props from "./types";
import { ArchiveSvg, Strings } from "@Resources";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TrainningItem from "./components";
import { Trainning } from "@State/trainnings/types";

const HomeScreen = (props: Props) => {
  const insets = useSafeAreaInsets();
  const data: Trainning[] = [
    {
      title: "Тренування перше",
      description: "Руки, ноги",
      dificulty: 0,
    },
    {
      title: "Тренування друге",
      description: "Руки, ноги",
      dificulty: 1,
    },
    {
      title: "Тренування третє",
      description: "Руки, ноги",
      dificulty: 2,
    },
  ];

  const onArchive = () => {};

  const addTrainning = () => {};

  const onPressItem = (item: Trainning) => {};

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <View style={styles.headerWrapper}>
        <AppText fontType="header_2">{Strings.home_label}</AppText>
        <TouchableOpacity onPress={onArchive} style={styles.iconWrapper}>
          <ArchiveSvg />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TrainningItem item={item} onPress={onPressItem} />
        )}
        ListFooterComponent={() => (
          <AppButton
            styleMode="outlined"
            title={Strings.home.add_trainning}
            style={styles.addTrainningBtn}
            titleStyle={styles.addTrainningBtnText}
            onPress={addTrainning}
          />
        )}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

export default HomeScreen;
