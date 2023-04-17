import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PagerView from "react-native-pager-view";
import { useState } from "react";
import CardHome from "./CardHome";
import HistorySeach from "../screen/HistorySeach";
import MealAllDay from "../screen/MealAllDay";

const ButtonMeal = () => {
  const buttons = [
    { id: 1, label: "Cả ngày", content: <MealAllDay /> },
    { id: 2, label: "B.sáng" },
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
          <View key={button.id} style={styles.screen}>
            <View>{button.content}</View>
          </View>
        ))}
      </PagerView>
    </View>
  );
};

export default ButtonMeal;

const styles = StyleSheet.create({
  container: {
    marginTop: "-15%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  button: {
    paddingHorizontal: 3,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "white",
    marginHorizontal: 5,
    borderRadius: 5,
    color: "white",
  },
  activeButton: {
    backgroundColor: "white",
    color: "#00113D",
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
  },
});
