import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import SearchBar from "../screenComponent/SearchBar";
import { useNavigation } from "@react-navigation/native";

const Add = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ width: "100%", alignSelf: "center" }}>
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
          <SearchBar />
        </View>
      </View>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({});
