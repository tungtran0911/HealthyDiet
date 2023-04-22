import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import SearchBar from "../screenComponent/SearchBar";
import GroupScreen from "../screenComponent/GroupScreen";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import Water from "../screenComponent/Water";
import CardBreakfast from "../screenComponent/CardBreakfast";
import CardMeal from "../screenComponent/CardMeal";

const AlldayDiary = () => {
  return (
    <ScrollView style={{ height: "100%", paddingBottom: "10%" }}>
      <View
        style={{
          width: "100%",
        }}
      >
        <View
          style={{
            width: "80%",
            borderWidth: 1,
            height: 150,
            borderRadius: 20,
            alignSelf: "center",
            marginTop: "8%",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../storages/list/diarypic1.png")}
            style={{
              height: 150,
              width: 82,
              borderBottomLeftRadius: 20,
              borderTopLeftRadius: 20,
            }}
          />
          <View style={{ marginVertical: "4%", marginLeft: "5%" }}>
            <Text style={{ fontSize: 14, fontWeight: "700" }}>Cả ngày</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: "5%",
              }}
            >
              <Octicons name="flame" size={18} color="#AFF242" />
              <Text style={{ fontSize: 16, fontWeight: "700" }}>
                500 kcal<Text style={{ fontWeight: "400" }}>/1400 kcal</Text>
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: "2%",
              }}
            >
              <FontAwesome5 name="edit" size={18} color="#AFF242" />
              <Text style={{ fontSize: 10, marginRight: "15%" }}>
                10 món, nguyên liệu
              </Text>
              <Text style={{ fontSize: 10, marginRight: "2%" }}>05</Text>
              <Text style={{ fontSize: 10 }}>bữa</Text>
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
                  width={52}
                  color="#6BD2A7"
                  height={5}
                  style={{ marginVertical: "6%" }}
                />
                <Text style={{ color: "#B1B1B1", fontSize: 12 }}>20g</Text>
              </View>
              <View>
                <Text style={{ color: "#00113D", fontSize: 12 }}>Proteins</Text>
                <Progress.Bar
                  progress={0.4}
                  width={52}
                  color="#93CAFC"
                  height={4}
                  style={{ marginVertical: "6%" }}
                />
                <Text style={{ color: "#B1B1B1", fontSize: 12 }}>20g</Text>
              </View>
              <View>
                <Text style={{ color: "#00113D", fontSize: 12 }}>Fats</Text>
                <Progress.Bar
                  progress={0.4}
                  width={52}
                  color="#F9BBF9"
                  height={4}
                  style={{ marginVertical: "6%" }}
                />
                <Text style={{ color: "#B1B1B1", fontSize: 12 }}>20g</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: "7%" }}>
          <Water />
        </View>
        <View
          style={{
            marginTop: "7%",
            flexDirection: "row",
            marginHorizontal: "11%",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome name="play-circle" size={24} color="#00113D" />
            <Text
              style={{ fontWeight: "700", marginLeft: 8, color: "#00113D" }}
            >
              Bữa sáng
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "30%",
              marginRight: "8%",
            }}
          >
            <Ionicons name="flame" size={24} color="#00113D" />
            <Text
              style={{ fontWeight: "700", marginLeft: 8, color: "#00113D" }}
            >
              400 kcal
            </Text>
          </View>
          <MaterialCommunityIcons
            name="bookmark-minus"
            size={24}
            color="#9BB7F0"
          />
        </View>
        <View style={{ alignItems: "center", marginTop: "5%" }}>
          <CardBreakfast />
        </View>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            marginTop: "5%",
          }}
        >
          <View
            style={{
              borderWidth: 2,
              height: 41,
              width: 125,
              marginRight: "5%",
              borderRadius: 20,
              borderColor: "#8FCCE8",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "700", color: "#00113D" }}>
              Xóa thực đơn
            </Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              height: 41,
              width: 179,
              borderRadius: 20,
              backgroundColor: "#CCE9F2",
              borderColor: "#8FCCE8",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "700", color: "#00113D" }}>
              Xem chi tiết
            </Text>
          </View>
        </View>
        <View style={{ marginTop: "10%" }}>
          <CardMeal />
        </View>
        <View
          style={{
            marginTop: "7%",
            flexDirection: "row",
            marginHorizontal: "11%",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome name="play-circle" size={24} color="#00113D" />
            <Text
              style={{ fontWeight: "700", marginLeft: 8, color: "#00113D" }}
            >
              Đốt Claories
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "22%",
              marginRight: "8%",
            }}
          >
            <Ionicons name="flame" size={24} color="#00113D" />
            <Text
              style={{ fontWeight: "700", marginLeft: 8, color: "#00113D" }}
            >
              400 kcal
            </Text>
          </View>
          <MaterialCommunityIcons
            name="bookmark-minus"
            size={24}
            color="#9BB7F0"
          />
        </View>
        <View style={{ alignItems: "center", marginTop: "5%" }}>
          <CardBreakfast />
        </View>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            marginTop: "5%",
          }}
        >
          <View
            style={{
              borderWidth: 2,
              height: 41,
              width: 125,
              marginRight: "5%",
              borderRadius: 20,
              borderColor: "#8FCCE8",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "700", color: "#00113D" }}>
              Xóa thực đơn
            </Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              height: 41,
              width: 179,
              borderRadius: 20,
              backgroundColor: "#CCE9F2",
              borderColor: "#8FCCE8",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "700", color: "#00113D" }}>
              Xem chi tiết
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AlldayDiary;

const styles = StyleSheet.create({});
