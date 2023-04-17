import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import InputSearch from "../screenComponent/InputSearch";
import History from "../screenComponent/History";

const HistorySeach = () => {
  return (
    <View>
      <View style={{ width: "100%", alignSelf: "center", marginTop: "5%" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: "10%",
          }}
        >
          <AntDesign name="arrowleft" size={30} color="black" />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              textAlign: "center",
              marginLeft: "25%",
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
              color="black"
              style={{ marginLeft: "35%" }}
            />
            <MaterialCommunityIcons
              name="bookmark-minus"
              size={28}
              color="black"
              style={{ marginLeft: "5%" }}
            />
          </View>
        </View>
        <View style={{ marginHorizontal: "5%", alignSelf: "center" }}>
          <InputSearch />
        </View>
      </View>
      <View style={{ marginTop: "10%" }}>
        <History />
      </View>
    </View>
  );
};

export default HistorySeach;

const styles = StyleSheet.create({});
