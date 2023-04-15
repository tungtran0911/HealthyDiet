import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useState } from "react";
const Screen1 = () => {
  return (
    <View>
      <Text>Screen 1</Text>
    </View>
  );
};

const Screen2 = () => {
  return (
    <View>
      <Text>Screen 2</Text>
    </View>
  );
};
const Follow = () => {
  const [screen, setScreen] = useState("screen1");

  return (
    <View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setScreen("screen1")}>
          <Text
            style={[styles.tabText, screen === "screen1" && styles.tabTextBold]}
          >
            Screen 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen("screen2")}>
          <Text
            style={[styles.tabText, screen === "screen2" && styles.tabTextBold]}
          >
            Screen 2
          </Text>
        </TouchableOpacity>
      </View>
      {screen === "screen1" && <Screen1 />}
      {screen === "screen2" && <Screen2 />}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  tabText: {
    fontSize: 16,
    color: "black",
  },
  tabTextBold: {
    fontWeight: "bold",
  },
});

export default Follow;
