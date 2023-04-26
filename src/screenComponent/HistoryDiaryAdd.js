import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

const HistoryDiaryAdd = () => {
  const list = [
    {
      id: 1,
      title: "Cá chép kho (1 phần)",
      kcal: "155",
      gam: "100",
    },
    {
      id: 2,
      title: "Cá chép kho (1 phần)",
      kcal: "155",
      gam: "100",
    },
    {
      id: 3,
      title: "Cá chép kho (1 phần)",
      kcal: "155",
      gam: "100",
    },
    {
      id: 4,
      title: "Cá chép kho (1 phần)",
      kcal: "155",
      gam: "100",
    },
  ];
  return list.map((item) => {
    return (
      <View
        style={{ borderBottomWidth: 1, marginVertical: "3%" }}
        key={item.id}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ marginBottom: "5%", fontWeight: "700" }}>
              Cá chép kho (1 phần)
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "5%",
              }}
            >
              <Text style={{ fontSize: 10, color: "#B1B1B1" }}>155 kcal</Text>
              <Entypo name="dot-single" size={10} color="#B1B1B1" />
              <Text style={{ fontSize: 10, color: "#B1B1B1" }}>100 gam</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#D9E3F9",
              borderRadius: 20,
              width: 24,
              height: 24,
            }}
          >
            <Entypo name="plus" size={24} color="black" />
          </View>
        </View>
      </View>
    );
  });
};

export default HistoryDiaryAdd;

const styles = StyleSheet.create({});
