import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const DoneForm = () => {
  const navigation = useNavigation();
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
          onPress={() => navigation.navigate("Tabs")}
        />
      </View>
      <View style={{ marginTop: "35%" }}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: 20,
            color: "#0047D7",
            marginBottom: 32,
          }}
        >
          KẾ HOẠCH CẢI THIỆN CỦA BẠN ĐÃ ĐƯỢC KHỞI TẠO
        </Text>
      </View>
    </View>
  );
};

export default DoneForm;

const styles = StyleSheet.create({});
