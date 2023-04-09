import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GenderForm = () => {
  const navigation = useNavigation();
  const options = [
    { label: "Nữ", value: "option1" },
    { label: "Nam", value: "option2" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: "5%",
          marginTop: "10%",
        }}
      >
        <AntDesign name="arrowleft" size={40} color="black" />
        <AntDesign
          name="arrowright"
          size={40}
          color="black"
          onPress={() => navigation.navigate("AgeForm")}
        />
      </View>
      <View style={{ marginTop: "35%" }}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: 20,
            color: "#3E445F",
            marginBottom: 32,
          }}
        >
          Giới tính của bạn:
        </Text>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.optionButton,
              selectedOption === option.value && styles.selectedOptionButton,
            ]}
            onPress={() => handleOptionChange(option.value)}
          >
            <Text
              style={[
                styles.optionText,
                selectedOption === option.value && styles.selectedOptionText,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default GenderForm;

const styles = StyleSheet.create({
  optionButton: {
    marginVertical: 15,
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 99,
    backgroundColor: "#4B6AB9",
    opacity: 0.6,
    marginHorizontal: "8%",
  },
  selectedOptionButton: {
    backgroundColor: "#4B6AB9",
    opacity: 1,
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
  selectedOptionText: {
    color: "#fff",
  },
});
