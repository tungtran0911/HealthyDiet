import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { AntDesign, Entypo, Octicons } from "@expo/vector-icons";

const SaveCard = () => {
  return (
    <View
      style={{
        width: "30%",
        height: 145,
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
      }}
    >
      <Image
        source={require("../storages/list/savepic1.png")}
        style={{
          height: 95,
          width: "100%",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginLeft: "5%",
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "700", width: "60%" }}>
          Phở bò tái chín
        </Text>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "#D9E3F9",
          }}
        >
          <Entypo name="plus" size={24} color="#00113D" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "9%",
          marginTop: "2%",
        }}
      >
        <Octicons name="flame" size={10} color="#AFF242" />
        <Text style={{ fontSize: 10 }}>155 kcal</Text>
      </View>
    </View>
  );
};

export default SaveCard;

const styles = StyleSheet.create({});
