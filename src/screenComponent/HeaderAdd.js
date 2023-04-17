import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import ButtonMeal from "./ButtonMeal";

const HeaderAdd = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  return (
    <View
      style={{
        width: "100%",
        alignSelf: "center",
        paddingTop: "5%",
        backgroundColor: "#00113D",
        height: 205,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: "10%",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderRadius: 6,
            width: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <AntDesign name="arrowleft" size={20} color="#00113D" />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            textAlign: "center",
            marginLeft: "25%",
            color: "white",
          }}
        >
          Tạo thực đơn
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="bell"
            size={24}
            color="white"
            style={{ marginLeft: "35%" }}
          />
          <MaterialCommunityIcons
            name="bookmark-minus"
            size={28}
            color="white"
            style={{ marginLeft: "5%" }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: "9%",
          marginTop: "8%",
        }}
      >
        <AntDesign name="left" size={24} color="white" />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather name="calendar" size={24} color="white" />
          <Text style={{ color: "white", marginLeft: "5%" }}>
            Hôm nay, {day} th {month}
          </Text>
        </View>
        <AntDesign name="right" size={24} color="white" />
      </View>
    </View>
  );
};

export default HeaderAdd;

const styles = StyleSheet.create({});
