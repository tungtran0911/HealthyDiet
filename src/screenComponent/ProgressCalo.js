import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import ProgressCircleCalories from "./ProgressCircleCalories";

const ProgressCalo = () => {
  const calories = 300;
  return (
    <View
      style={{
        backgroundColor: "#00113D",
        height: 582,
        position: "absolute",
        width: "100%",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderRadius: 50,
      }}
    >
      <View style={{ marginTop: "65%", alignSelf: "center" }}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            marginBottom: "5%",
            textAlign: "center",
          }}
        >
          Hôm nay
        </Text>
        <View>
          <ProgressCircleCalories calories={calories} />
        </View>
      </View>
    </View>
  );
};

export default ProgressCalo;

const styles = StyleSheet.create({});
