import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
    // Perform search operation
  };

  return (
    <View style={styles.searchBar}>
      <Ionicons
        name="ios-search-outline"
        size={30}
        color="#B1B1B1"
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={handleSearch}
        value={searchText}
        placeholder="Tìm kiếm món ăn"
        placeholderTextColor="#B1B1B1"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 45,
    borderRadius: 15,
    marginVertical: 10,
    width: "90%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  searchIcon: {
    marginHorizontal: 14,
  },
  textInput: {
    flex: 1,
    height: "100%",
  },
});
