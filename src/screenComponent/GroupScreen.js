import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AddNew from "../screen/AddNew";
import AddGroup from "../screen/AddGroup";
import { useState } from "react";

const GroupScreen = () => {
  const [screen, setScreen] = useState("screen1");
  return (
    <View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setScreen("screen1")}>
          <Text
            style={[styles.tabText, screen === "screen1" && styles.tabTextBold]}
          >
            Tổng hợp
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen("screen2")}>
          <Text
            style={[styles.tabText, screen === "screen2" && styles.tabTextBold]}
          >
            Gợi ý theo nhóm
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: "10%" }}>
        {screen === "screen1" && <AddNew />}
        {screen === "screen2" && <AddGroup />}
      </View>
    </View>
  );
};

export default GroupScreen;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "5%",
    backgroundColor: "#fff",
  },
  tabText: {
    fontSize: 16,
    color: "#B1B1B1",
  },
  tabTextBold: {
    fontWeight: "bold",
    color: "#00113D",
  },
});
