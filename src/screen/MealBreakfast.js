import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import SearchBar from "../screenComponent/SearchBar";
import GroupScreen from "../screenComponent/GroupScreen";
import GroupScreen_1 from "../screenComponent/GroupScreen_1";

const MealBreakfast = () => {
  return (
    <ScrollView style={{ height: "100%" }}>
      <View
        style={{
          height: 220,
          borderWidth: 1,
          paddingTop: "10%",
          width: "100%",
          borderBottomWidth: 0,
        }}
      >
        <View style={{ alignSelf: "center" }}>
          <Text style={{ marginBottom: "3%", fontSize: 16, color: "#00113D" }}>
            Lượng calo đã nạp
          </Text>
          <Text>
            500 kcal<Text>/1400 kcal</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "5%",
          }}
        >
          <View>
            <Text style={{ color: "#00113D", fontSize: 12 }}>Carbs</Text>
            <Progress.Bar
              progress={0.4}
              width={41}
              color="#6BD2A7"
              height={5}
              style={{ marginVertical: "6%" }}
            />
            <Text style={{ color: "#B1B1B1", fontSize: 12 }}>20g</Text>
          </View>
          <View>
            <Text style={{ color: "#00113D", fontSize: 12 }}>30/200g</Text>
            <Progress.Bar
              progress={0.4}
              width={41}
              color="#93CAFC"
              height={4}
              style={{ marginVertical: "6%" }}
            />
            <Text style={{ color: "#B1B1B1", fontSize: 12 }}>Carbs</Text>
          </View>
          <View>
            <Text style={{ color: "#00113D", fontSize: 12 }}>30/200g</Text>
            <Progress.Bar
              progress={0.4}
              width={41}
              color="#F9BBF9"
              height={4}
              style={{ marginVertical: "6%" }}
            />
            <Text style={{ color: "#B1B1B1", fontSize: 12 }}>Carbs</Text>
          </View>
        </View>
        <View style={{ alignSelf: "center" }}>
          <SearchBar />
        </View>
      </View>
      <GroupScreen_1 />
    </ScrollView>
  );
};

export default MealBreakfast;

const styles = StyleSheet.create({});
