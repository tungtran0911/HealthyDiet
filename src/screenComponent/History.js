import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardSearch from "./CardSearch";
import { AntDesign } from "@expo/vector-icons";

const History = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: "7%",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "700" }}>
          Lịch sử tìm kiếm
        </Text>
      </View>
      <View style={{ marginHorizontal: "7%", marginTop: "5%" }}>
        <CardSearch />
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});
