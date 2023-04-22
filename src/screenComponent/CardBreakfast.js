import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Entypo,
  Feather,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import * as Progress from "react-native-progress";

const CardBreakfast = () => {
  return (
    <View>
      <View
        style={{
          width: "65%",
          borderWidth: 1,
          height: 114,
          borderRadius: 10,
          backgroundColor: "#FFD4E4",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginLeft: "6%",
            marginTop: "4%",
          }}
        >
          <Image
            source={require("../storages/list/listpic4.png")}
            style={{ width: 57, height: 57, borderRadius: 6 }}
          />
          <View
            style={{
              justifyContent: "space-around",
              marginLeft: "3%",
              width: "50%",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "700" }}>Cơm gạo lứt</Text>
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
          <View style={{}}>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Feather name="edit" size={24} color="#C4C4C4" />
              <MaterialCommunityIcons
                name="bookmark-minus"
                size={28}
                color="#AFF242"
                style={{
                  marginRight: "5%",
                  marginTop: "2%",
                  marginLeft: "20%",
                }}
              />
            </View>
            <Text style={{ fontSize: 8 }}>200 kcal/100 gam</Text>
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
          <View
            style={{
              borderRadius: 20,
              borderWidth: 1,
              height: 23,
              width: 23,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Entypo name="plus" size={22} color="#00113D" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardBreakfast;

const styles = StyleSheet.create({});
