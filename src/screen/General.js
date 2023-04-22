import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import CardSearch from "../screenComponent/CardSearch";
import SaveCard from "../screenComponent/SaveCard";
import CardSuggest from "../screenComponent/CardSuggest";
import CardBreakfast from "../screenComponent/CardBreakfast";

const General = () => {
  return (
    <View style={{ flex: 1, height: "100%" }}>
      <View style={{ alignItems: "center" }}>
        <CardBreakfast />
      </View>
      <View
        style={{
          width: "80%",
          height: 41,
          borderWidth: 1,
          borderRadius: 18,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "#4B6AB9",
          alignSelf: "center",
          marginTop: "6%",
        }}
      >
        <Text style={{ color: "#4B6AB9", fontWeight: "700" }}>
          Lập chi tiết
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: "7%",
          marginTop: "10%",
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
      <View style={{ marginHorizontal: "7%", marginTop: "5%" }}>
        <CardSearch />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: "7%",
          marginTop: "10%",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "700" }}>Món ăn đã lưu</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#B1B1B1" }}>
            Xem thêm
          </Text>
          <AntDesign name="right" size={12} color="#B1B1B1" />
        </View>
      </View>
      <View style={{ marginHorizontal: "7%", marginTop: "5%" }}>
        <SaveCard />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: "10%",
          marginHorizontal: "7%",
          alignItems: "center",
        }}
      >
        <Feather name="edit-3" size={24} color="#00113D" />
        <Text style={{ fontWeight: "700", color: "#00113D" }}>
          Gợi ý cho bạn
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: "5%",
          marginHorizontal: "7%",
          alignItems: "center",
        }}
      >
        <CardSuggest />
      </View>
    </View>
  );
};

export default General;

const styles = StyleSheet.create({});
