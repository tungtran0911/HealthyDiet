import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Infor from "../screenComponent/Infor";
import Aim from "../screenComponent/Aim";
import ProgressCalo from "../screenComponent/ProgressCalo";

const Home = () => {
  return (
    <View>
      <ProgressCalo />
      <View
        style={{
          paddingTop: "5%",
          height: 216,
          backgroundColor: "white",
          position: "absolute",
          width: "100%",
        }}
      >
        <Infor />
      </View>
      <View
        style={{
          position: "absolute",
          marginTop: "35%",
          width: "100%",
        }}
      >
        <Aim />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
