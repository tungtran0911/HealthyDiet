import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Entypo, Feather, Octicons } from "@expo/vector-icons";

const CardSuggest = () => {
  return (
    <View
      style={{
        width: "45%",
        height: 197,
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
          height: 130,
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
          marginHorizontal: "5%",
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "700", width: "80%" }}>
          Phở bò tái chín trứng chần
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
          justifyContent: "space-around",
          marginLeft: "3%",
          flexDirection: "row",
          marginTop: "5%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Octicons name="flame" size={10} color="#AFF242" />
          <Text style={{ fontSize: 10, marginLeft: 6 }}>155 kcal</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Feather name="edit" size={10} color="#AFF242" />
          <Text style={{ fontSize: 10, marginLeft: 6 }}>1 quả - 100g</Text>
        </View>
      </View>
    </View>
  );
};

export default CardSuggest;

const styles = StyleSheet.create({});
