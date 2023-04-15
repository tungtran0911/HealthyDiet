import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React from "react";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { useState } from "react";
import foodlist from "../data/foodlist";

const CardHome = () => {
  const [food, setFood] = useState(foodlist);
  const [showCard, setShowCard] = useState(-1);

  const handleCardPress = (index) => {
    if (showCard === index) {
      setShowCard(-1);
    } else {
      setShowCard(index);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);
  const [imglistToDelete, setImglistToDelete] = useState(null);

  const handleDeleteItem = (id) => {
    setImglistToDelete(id);
    setModalVisible(true);
  };

  const handleConfirmDelete = () => {
    if (itemIdToDelete && imglistToDelete !== null) {
      const updatedFoods = food.map((item) => {
        if (item.id === itemIdToDelete) {
          const updatedSubItems = item.listImg.filter(
            (listImg) => listImg.id !== imglistToDelete
          );
          return { ...item, listImg: updatedSubItems };
        } else {
          return item;
        }
      });
      setFood(updatedFoods);
      setModalVisible(false);
    } else if (itemIdToDelete) {
      const updatedItems = food.filter((item) => item.id !== itemIdToDelete);
      setFood(updatedItems);
      setModalVisible(false);
    }
  };

  const handleCancelDelete = () => {
    setItemIdToDelete(null);
    setModalVisible(false);
  };

  return food.map((data, index) => {
    return (
      <View
        key={data.id}
        style={{
          width: "80%",
          flex: 1,
          alignSelf: "center",
          marginBottom: "5%",
        }}
      >
        <View
          style={{
            borderWidth: 0.1,
            height: 70,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 1,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{
                width: 57,
                height: 57,
                borderRadius: 6,
                marginLeft: 7,
                marginRight: "3%",
              }}
              source={data.img}
            />
            <View>
              <Text
                style={{ fontWeight: "700", fontSize: 14, color: "#00113D" }}
              >
                {data.title}
              </Text>
              <Text style={{ fontSize: 14, color: "#00113D" }}>{data.cal}</Text>
            </View>
          </View>
          <View style={{ marginRight: 8 }}>
            <AntDesign
              name="plussquareo"
              size={24}
              color="#C4C4C4"
              style={{ marginBottom: 5 }}
            />
            <TouchableOpacity onPress={() => handleCardPress(index)}>
              <AntDesign name="down" size={24} color="#C4C4C4" />
            </TouchableOpacity>
          </View>
        </View>
        {showCard === index && (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{
              backgroundColor: "white",
              width: "100%",
              height: 150,
              borderWidth: 0.5,
              borderRadius: 5,
            }}
          >
            {data.listImg.map((listImg, index) => {
              return (
                <View
                  key={index}
                  style={{ justifyContent: "center", marginHorizontal: 10 }}
                >
                  <Image
                    source={listImg.img}
                    style={{ width: 96, height: 96, borderRadius: 5 }}
                  />
                  <TouchableOpacity
                    onPress={() => handleDeleteItem(listImg.id)}
                    style={{ position: "absolute", top: 20, right: 10 }}
                  >
                    <Octicons name="trash" size={20} color="#B1B1B1" />
                  </TouchableOpacity>

                  <View>
                    <Text style={{ fontSize: 12, color: "#00113D" }}>
                      {listImg.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontSize: 10, color: "#B1B1B1" }}>
                      {listImg.cal}
                    </Text>
                    <Text style={{ fontSize: 10, color: "#B1B1B1" }}>
                      {listImg.weight}
                    </Text>
                  </View>
                </View>
              );
            })}
            <Modal
              visible={modalVisible}
              animationType="slide"
              transparent={true}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#fff",
                    padding: 16,
                    width: 315,
                    height: 158,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      color: "#4B6AB9",
                      fontWeight: "700",
                    }}
                  >
                    Xác nhận
                  </Text>
                  <Text style={{ textAlign: "center", marginTop: "6%" }}>
                    Bạn muốn xóa món này khỏi bữa ăn?
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "8%",
                    }}
                  >
                    <TouchableOpacity
                      onPress={handleConfirmDelete}
                      style={{
                        width: 137.5,
                        borderWidth: 1,
                        borderColor: "#4B6AB9",
                        height: 40,
                        justifyContent: "center",
                        borderRadius: 20,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 16,
                          color: "#4B6AB9",
                        }}
                      >
                        Có
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={handleCancelDelete}
                      style={{
                        width: 137.5,
                        height: 40,
                        justifyContent: "center",
                        borderRadius: 20,
                        backgroundColor: "#4B6AB9",
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 16,
                          color: "white",
                        }}
                      >
                        Không
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </ScrollView>
        )}
      </View>
    );
  });
};

export default CardHome;

const styles = StyleSheet.create({});
