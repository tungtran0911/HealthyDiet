import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import HistoryDiaryAdd from "../screenComponent/HistoryDiaryAdd";

const HistoryDiary = () => {
  const list = [
    {
      id: 1,
      title: "Trứng luộc (1 quả)",
      kcal: "155",
      gam: "100",
    },
    {
      id: 2,
      title: "Trứng luộc (1 quả)",
      kcal: "155",
      gam: "100",
    },
    {
      id: 3,
      title: "Trứng luộc (1 quả)",
      kcal: "155",
      gam: "100",
    },
  ];
  return (
    <View style={{ marginHorizontal: "8%" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "5%",
        }}
      >
        <Feather name="edit-3" size={24} color="black" />
        <Text>Giống như hôm qua?</Text>
      </View>
      <View style={{ borderWidth: 1, borderColor: "#C4C4C4" }}>
        {list.map((item) => {
          return (
            <View
              key={item.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                marginVertical: "2%",
              }}
            >
              <Text style={{ color: "#00113D", fontWeight: "700" }}>
                {item.title}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 10, color: "#B1B1B1" }}>
                  {item.kcal} kcal
                </Text>
                <Entypo name="dot-single" size={10} color="#B1B1B1" />
                <Text style={{ fontSize: 10, color: "#B1B1B1" }}>
                  {item.gam} gam
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "5%",
          marginTop: "10%",
        }}
      >
        <Text>Lịch sử tìm kiếm</Text>
      </View>
      <View>
        <HistoryDiaryAdd />
      </View>
      <View>
        <Text style={{ textAlign: "center" }}>Xem Thêm</Text>
      </View>
    </View>
  );
};

export default HistoryDiary;

const styles = StyleSheet.create({});
