import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AddNew from "../screen/AddNew";
import AddGroup from "../screen/AddGroup";
import { useState } from "react";
import General from "../screen/General";

const GroupScreen_1 = () => {
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
        {screen === "screen1" && <General />}
        {screen === "screen2" && <AddGroup />}
      </View>
    </View>
  );
};

export default GroupScreen_1;

const styles = StyleSheet.create({
  tabContainer: {
    borderWidth: 1,
    height: 50,
    paddingTop: "5%",
    borderTopWidth: 0,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
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
