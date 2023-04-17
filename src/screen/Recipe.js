import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  FlatList,
} from "react-native";
import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const Recipe = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { searchHistory } = route.params;

  const handlePressKeyword = (keyword) => {
    // Điều hướng trở lại màn hình tìm kiếm với từ khóa được chọn
    navigation.navigate("Follow Stack", { searchText: keyword });
  };

  return (
    <View>
      <FlatList
        data={route.params.searchHistory}
        renderItem={({ item }) => (
          <Text onPress={() => handlePressKeyword(item)}>{item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Recipe;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 45,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    width: "80%",
  },
  searchIcon: {
    marginHorizontal: 14,
  },
  textInput: {
    flex: 1,
    height: "100%",
  },
});
