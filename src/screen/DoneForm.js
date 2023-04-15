import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";

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
      <View style={{}}>
        <View style={{ marginTop: "15%" }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 20,
              color: "#0047D7",
              marginBottom: 32,
              width: "70%",
              alignSelf: "center",
            }}
          >
            KẾ HOẠCH CẢI THIỆN CỦA BẠN ĐÃ ĐƯỢC KHỞI TẠO
          </Text>
        </View>
        <View>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width - 30} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#5D74CE",
              backgroundGradientFrom: "#0027C1",
              backgroundGradientTo: "#8998D3",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#5D74CE",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              alignSelf: "center",
              borderRadius: 16,
            }}
          />
        </View>
        <Text
          style={{
            marginTop: "8%",
            textAlign: "center",
            fontWeight: "700",
            fontSize: 20,
            color: "#0047D7",
            marginBottom: 32,
            width: "55%",
            alignSelf: "center",
          }}
        >
          1400 - 1800 kcal/ngày 0.5 kg/tuần
        </Text>
        <Text
          style={{
            marginTop: "8%",
            textAlign: "center",
            fontWeight: "400",
            fontSize: 14,
            color: "#0047D7",
            marginBottom: 32,
            width: "72%",
            alignSelf: "center",
          }}
        >
          Cùng (tên app) bắt đầu thực hiện kiểm soát, thực hiện mục tiêu sức
          khỏe đặt ra từ hôm nay nào!
        </Text>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate("Tabs")}
        >
          <Text style={styles.optionText}>Bắt đầu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoneForm;

const styles = StyleSheet.create({
  optionButton: {
    marginVertical: 15,
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 99,
    backgroundColor: "#4B6AB9",
    marginHorizontal: "8%",
    borderColor: "#4B6AB9",
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
});
