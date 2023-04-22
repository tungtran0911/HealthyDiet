import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const CardMeal = () => {
  return (
    <View>
      <View
        style={{
          width: "80%",
          height: 79,
          backgroundColor: "#F9BBF9",
          marginHorizontal: "10%",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: "3%",
            marginLeft: "3%",
          }}
        >
          <Image source={require("../storages/list/pic1.png")} />
          <View style={{ marginLeft: "3%", marginRight: "35%" }}>
            <Text style={{ color: "white", fontWeight: "700" }}>Bữa sáng</Text>
            <Text style={{ color: "white", fontWeight: "700" }}>
              300 kcal
              <Text style={{ fontSize: 12, fontWeight: "400" }}>/500 kcal</Text>
            </Text>
          </View>
          <AntDesign name="rightcircleo" size={18} color="white" />
        </View>
      </View>
    </View>
  );
};

export default CardMeal;

const styles = StyleSheet.create({});
