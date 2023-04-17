import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import SearchBar from "../screenComponent/SearchBar";
import { useNavigation } from "@react-navigation/native";
import GroupScreen from "../screenComponent/GroupScreen";
import HeaderAdd from "../screenComponent/HeaderAdd";
import ButtonMeal from "../screenComponent/ButtonMeal";

const Add = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <HeaderAdd />
      <ButtonMeal />
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({});
