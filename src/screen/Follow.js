import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PagerView from "react-native-pager-view";
import Carousel from "react-native-snap-carousel";
import Water from "../screenComponent/Water";
import CardHome from "../screenComponent/CardHome";

const Follow = () => {
  const buttons = [
    { id: 1, label: "Button 1" },
    { id: 2, label: "Button 2" },
    { id: 3, label: "Button 3" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

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
            <CardHome />
          </View>
        ))}
      </PagerView>
    </View>
  );
};

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
    marginBottom: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "gray",
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: "gray",
    color: "white",
  },
  separator: {
    color: "gray",
    marginHorizontal: 5,
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

export default Follow;
