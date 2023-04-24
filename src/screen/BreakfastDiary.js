import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import SearchBar from "../screenComponent/SearchBar";
import GroupScreen from "../screenComponent/GroupScreen";
import GroupScreen_1 from "../screenComponent/GroupScreen_1";
import { Octicons } from "@expo/vector-icons";

const BreakfastDiary = () => {
  return (
    <ScrollView style={{ height: "100%" }}>
      <View
        style={{
          height: 220,
          paddingTop: "5%",
          width: "100%",
        }}
      >
        <Text>Bữa sáng</Text>
        <View>
          <Octicons name="flame" size={24} color="black" />
          <Text>
            400 <Text>kcal</Text>
          </Text>
        </View>
        <View></View>
      </View>
    </ScrollView>
  );
};

export default BreakfastDiary;

const styles = StyleSheet.create({});
