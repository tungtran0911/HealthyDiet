import React from "react";
import { View, Text } from "react-native";
import ProgressCircle from "react-native-progress-circle";

const ProgressCircleCalories = ({ calories }) => {
  const caloriess = 1400 - calories;
  return (
    <View>
      <ProgressCircle
        percent={(calories / 1400) * 100} //tính phần trăm calo so với mục tiêu hàng ngày
        radius={90}
        borderWidth={6}
        color="#3399FF"
        shadowColor="#fff"
        bgColor="#00113D"
      >
        <Text style={{ color: "white", fontSize: 14 }}>{calories}/1400cal</Text>
        <Text style={{ color: "white", fontSize: 36 }}>
          {caloriess}
          <Text style={{ fontSize: 24 }}>Cal</Text>
        </Text>
        <Text style={{ color: "white", fontSize: 13 }}>left</Text>
      </ProgressCircle>
    </View>
  );
};

export default ProgressCircleCalories;
