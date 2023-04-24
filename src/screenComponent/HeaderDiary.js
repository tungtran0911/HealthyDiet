import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import ButtonMeal from "./ButtonMeal";
import SearchBar from "./SearchBar";
import DiaryButtonGroup from "./DiaryButtonGroup";

const HeaderDiary = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  return (
    <View style={{ height: "100%" }}>
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            alignSelf: "center",
            paddingTop: "5%",
            height: 170,
            backgroundColor: "#CCE9F2",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: "7%",
            }}
          >
            <View
              style={{
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
                marginLeft: "20%",
                color: "black",
              }}
            >
              Nhật ký dinh dưỡng
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
                color="#00113D"
                style={{ marginLeft: "30%" }}
              />
              <MaterialCommunityIcons
                name="bookmark-minus"
                size={28}
                color="#00113D"
                style={{ marginLeft: "5%" }}
              />
            </View>
          </View>
          <View style={{ alignSelf: "center" }}>
            <SearchBar />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: "9%",
              marginTop: "3%",
            }}
          >
            <View
              style={{
                borderRadius: 20,
                width: 20,
                height: 20,
                backgroundColor: "#00113D",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="left" size={13} color="white" />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="calendar" size={24} color="#00113D" />
              <Text style={{ color: "#00113D", marginLeft: "5%" }}>
                Hôm nay, {day} th {month}
              </Text>
            </View>
            <View
              style={{
                borderRadius: 20,
                width: 20,
                height: 20,
                backgroundColor: "#00113D",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="right" size={13} color="white" />
            </View>
          </View>
        </View>
        <DiaryButtonGroup />
      </View>
    </View>
  );
};

export default HeaderDiary;

const styles = StyleSheet.create({});
