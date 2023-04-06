import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Infor = () => {
  return (
    <View
      style={{
        marginHorizontal: "8%",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "4%",
        }}
      >
        <Image
          source={require("../storages/avt.jpg")}
          style={{ width: 49, height: 49 }}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: "bold", color: "#0047D7", fontSize: 14 }}>
            Chào Nam!
          </Text>
          <Text style={{ fontSize: 10, color: "#0047D7", fontWeight: "300" }}>
            Hãy xây dựng kế hoạch dinh dưỡng cho hôm nay nào!
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ borderBottomWidth: 4, borderColor: "black", width: 50 }}>
          <View>
            <Text style={styles.titletext}>BMI</Text>
          </View>
          <Text style={styles.number}>24.9</Text>
        </View>
        <View style={{ borderBottomWidth: 4, borderColor: "black", width: 50 }}>
          <Text style={styles.titletext}>Tuổi</Text>
          <Text style={styles.number}>32</Text>
        </View>
        <View style={{ borderBottomWidth: 4, borderColor: "black", width: 50 }}>
          <Text style={styles.titletext}>Cân nặng</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.number}>72</Text>
            <Text style={{ fontSize: 10 }}>kg</Text>
          </View>
        </View>
        <View style={{ borderBottomWidth: 4, borderColor: "black", width: 50 }}>
          <Text style={styles.titletext}>Chiều cao</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.number}>170</Text>
            <Text style={{ fontSize: 10 }}>cm</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Infor;

const styles = StyleSheet.create({
  titletext: {
    fontSize: 10,
    lineHeight: 12.19,
  },
  number: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
