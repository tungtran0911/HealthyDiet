import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import CardSearch from "../screenComponent/CardSearch";

const AddNew = () => {
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
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#B1B1B1" }}>
            Xem thêm
          </Text>
          <AntDesign name="right" size={12} color="#B1B1B1" />
        </View>
      </View>
      <View style={{ marginHorizontal: "7%" }}>
        <CardSearch />
      </View>
    </View>
  );
};

export default AddNew;

const styles = StyleSheet.create({});
