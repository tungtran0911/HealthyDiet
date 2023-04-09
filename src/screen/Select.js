import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const Select = () => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <View>
      <Text>Please select an option:</Text>
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
  );
};

const styles = StyleSheet.create({
  optionButton: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000",
    backgroundColor: "#4B6AB9",
    opacity: 0.6,
  },
  selectedOptionButton: {
    backgroundColor: "#4B6AB9",
    opacity: 1,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  selectedOptionText: {
    color: "#fff",
  },
});

export default Select;
