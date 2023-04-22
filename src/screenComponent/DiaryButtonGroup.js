import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PagerView from "react-native-pager-view";
import { useState } from "react";

import MealAllDay from "../screen/MealAllDay";
import MealBreakfast from "../screen/MealBreakfast";
import AlldayDiary from "../screen/AlldayDiary";

const DiaryButtonGroup = () => {
  const buttons = [
    {
      id: 1,
      label: "Cả ngày",
      content: <AlldayDiary />,
      color: "#00113D",
      textColor: "##FFFFFF",
    },
    { id: 2, label: "B.sáng", content: <MealBreakfast /> },
    { id: 3, label: "B.trưa" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const renderButton = ({ item, index }) => (
    <Text
      style={[styles.button, activeIndex === index && styles.activeButton]}
      onPress={() => pagerRef.setPage(index)}
    >
      {item.label}
    </Text>
  );

  const renderScreen = ({ item }) => (
    <View style={styles.screen}>
      <Text>{item.label}</Text>
    </View>
  );

  const onPageSelected = (event) => {
    setActiveIndex(event.nativeEvent.position);
  };

  let pagerRef = null;

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <React.Fragment key={button.id}>
            {index > 0 && <Text style={styles.separator}></Text>}
            <Text
              style={[
                styles.button,
                activeIndex === index && styles.activeButton,
              ]}
              onPress={() => pagerRef.setPage(index)}
            >
              {button.label}
            </Text>
          </React.Fragment>
        ))}
      </View>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={onPageSelected}
        ref={(ref) => (pagerRef = ref)}
      >
        {buttons.map((button, index) => (
          <ScrollView key={button.id}>
            <View>{button.content}</View>
          </ScrollView>
        ))}
      </PagerView>
    </View>
  );
};

export default DiaryButtonGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    height: 60,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  button: {
    paddingHorizontal: 3,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#00113D",
    marginHorizontal: 5,
    borderRadius: 5,
    color: "#00113D",
  },
  activeButton: {
    backgroundColor: "#00113D",
    color: "#FFFFFF",
    borderRadius: 5,
    fontWeight: "700",
    fontSize: 12,
  },
  separator: {
    color: "white",
    marginHorizontal: 5,
    borderRadius: 5,
  },
  pagerView: {
    flex: 1,
    width: "100%",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
