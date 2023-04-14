import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

const FoodHome = () => {
  const food = [
    {
      id: 1,
      img: require('../storages/list/pic6.png'),
      title: 'Protein Diet',
      firstContent: 'Chế độ ăn đạm',
      content:
        'Sử dụng các thức ăn có hàm lượng cao protein vào trong thành phần bữa ăn.',
      day: '7 ngày',
      aim: 'Tăng cơ, giảm cân',
    },
    {
      id: 2,
      img: require('../storages/list/pic7.png'),
      title: 'Keto',
      firstContent: 'Keep Eating The fat Off',
      content:
        'Cắt giảm lượng carb nạp vào cơ thể ở mức tối thiểu nhất. Thay vào đó, chất béo được bổ sung tăng cường để cung cấp calo cho cơ thể.',
      day: '7 ngày',
      aim: 'Giảm cân, khỏe',
    },
    {
      id: 3,
      img: require('../storages/list/pic8.png'),
      title: 'Vegetarian',
      firstContent: 'Chế độ ăn chay',
      content:
        'Loại bỏ thực phẩm có nguồn gốc từ động vật ra khỏi thực đơn hằng ngày.',
      day: '7 ngày',
      aim: 'Khỏe',
    },
  ];

  return food.map((data, index) => {
    return (
      <View
        key={index}
        style={{
          height: 135,
          borderRadius: 10,
          borderWidth: 1,
          width: '80%',
          flex: 1,
          alignSelf: 'center',
          marginBottom: '5%',
        }}
      >
        <Image
          source={data.img}
          style={{ width: '100%', height: 135, position: 'absolute' }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '11%',
          }}
        >
          <View style={{ marginLeft: '5%', marginTop: '2%' }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>
              {data.title}
            </Text>
            <Text style={{ color: 'white', fontSize: 10 }}>
              {data.firstContent}
            </Text>
          </View>
          <MaterialCommunityIcons
            name="bookmark-minus"
            size={28}
            color="white"
            style={{ marginRight: '5%', marginTop: '2%' }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '5%',
          }}
        >
          <Text
            style={{
              width: 137,
              height: 'auto',
              fontSize: 8,
              lineHeight: 9.75,
              fontStyle: 'italic',
              color: 'white',
            }}
          >
            {data.content}
          </Text>
          <View style={{ alignItems: 'flex-end' }}>
            <View
              style={{
                backgroundColor: '#CCE9F2',
                width: 'auto',
                height: 18,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                marginBottom: 6,
                paddingHorizontal: '5%',
              }}
            >
              <Text
                style={{ color: '#00113D', fontSize: 8, fontWeight: '700' }}
              >
                Thời gian: <Text style={{ fontWeight: '400' }}>{data.day}</Text>
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#AFF242',
                width: 'auto',
                height: 18,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                paddingHorizontal: '6%',
              }}
            >
              <Text
                style={{ color: '#00113D', fontSize: 8, fontWeight: '700' }}
              >
                Mục đích: <Text style={{ fontWeight: '400' }}>{data.aim}</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  });
};

export default FoodHome;

const styles = StyleSheet.create({});
