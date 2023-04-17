import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Entypo,
  Feather,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import * as Progress from "react-native-progress";

const CardSearch = () => {
  return (
    <View>
      <View
        style={{
          width: "80%",
          borderWidth: 1,
          height: 109,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            marginLeft: "6%",
            marginTop: "2%",
          }}
        >
          <Image
            source={require("../storages/list/listpic1.png")}
            style={{ width: 57, height: 57, borderRadius: 6 }}
          />
          <View style={{ justifyContent: "space-around", marginLeft: "3%" }}>
            <Text style={{ fontSize: 14, fontWeight: "700" }}>Trứng luộc</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Octicons name="flame" size={10} color="#AFF242" />
              <Text style={{ fontSize: 10, marginLeft: 6 }}>155 kcal</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Feather name="edit" size={10} color="#AFF242" />
              <Text style={{ fontSize: 10, marginLeft: 6 }}>1 quả - 100g</Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: "34%",
              borderRadius: 5,
              borderWidth: 1,
              height: 23,
              width: 23,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Entypo name="plus" size={22} color="black" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "2%",
          }}
        >
          <View>
            <Text style={{ color: "#00113D", fontSize: 8 }}>Carbs</Text>
            <Progress.Bar
              progress={0.4}
              width={52}
              color="#6BD2A7"
              height={4}
              style={{ marginVertical: "6%" }}
            />
            <Text style={{ color: "#B1B1B1", fontSize: 8 }}>20g</Text>
          </View>
          <View>
            <Text style={{ color: "#00113D", fontSize: 8 }}>30/200g</Text>
            <Progress.Bar
              progress={0.4}
              width={52}
              color="#93CAFC"
              height={4}
              style={{ marginVertical: "6%" }}
            />
            <Text style={{ color: "#B1B1B1", fontSize: 8 }}>Carbs</Text>
          </View>
          <View>
            <Text style={{ color: "#00113D", fontSize: 8 }}>30/200g</Text>
            <Progress.Bar
              progress={0.4}
              width={52}
              color="#F9BBF9"
              height={4}
              style={{ marginVertical: "6%" }}
            />
            <Text style={{ color: "#B1B1B1", fontSize: 8 }}>Carbs</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardSearch;

const styles = StyleSheet.create({});
