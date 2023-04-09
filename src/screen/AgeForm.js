import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

function AgeForm() {
  const [age, setAge] = useState("");

  const handleAgeChange = (value) => {
    // Kiểm tra giá trị đầu vào có phải là số nguyên không
    if (/^\d+$/.test(value)) {
      setAge(value);
    }
  };

  const handleSubmit = () => {
    if (age) {
      Alert.alert(`Tuổi của bạn là ${age}`);
    } else {
      Alert.alert("Vui lòng nhập tuổi của bạn");
    }
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
        <AntDesign name="arrowright" size={40} color="black" />
      </View>
      <TextInput
        placeholder="Nhập tuổi của bạn"
        keyboardType="numeric"
        value={age}
        onChangeText={handleAgeChange}
      />
      <Button title="Xác nhận" onPress={handleSubmit} />
    </View>
  );
}

export default AgeForm;
