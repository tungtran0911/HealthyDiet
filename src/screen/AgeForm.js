import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Platform, Text } from "react-native";
import { StyleSheet } from "react-native";
import { View, TextInput, Button, Alert } from "react-native";

function AgeForm() {
  const navigation = useNavigation();
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
        <AntDesign
          name="arrowleft"
          size={40}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <AntDesign
          name="arrowright"
          size={40}
          color="black"
          onPress={() => navigation.navigate("WeightForm")}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 20,
          color: "#3E445F",
          marginBottom: 32,
          marginTop: "40%",
        }}
      >
        Chiều cao:
      </Text>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          width: 288,
          alignSelf: "center",
          height: 30,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Nhập tuổi của bạn"
          keyboardType="numeric"
          value={age}
          onChangeText={handleAgeChange}
          style={{ width: 288 }}
        />
        <Text>cm</Text>
      </View>
      <Button title="Xác nhận" onPress={handleSubmit} />
    </View>
  );
}

export default AgeForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderWidth: 1,
    padding: 10,
    ...(Platform.OS === "ios" && {
      // kiểm tra nền tảng để thêm phần style cho iOS
      paddingBottom: 8, // giảm khoảng cách giữa TextInput và gạch dưới trên iOS
    }),
  },
});
