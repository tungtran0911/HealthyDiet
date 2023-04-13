import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const CardHome = () => {
  const data = [
    {
      id: 1,
      img: require('../storages/list/pic1.png'),
      title: 'Bữa sáng',
      cal: '300/500 kcal',
    },
    {
      id: 2,
      img: require('../storages/list/pic2.png'),
      title: 'Bữa trưa',
      cal: '0/600 kcal',
    },
    {
      id: 3,
      img: require('../storages/list/pic3.png'),
      title: 'Bữa tối',
      cal: '0/600 kcal',
    },
    {
      id: 4,
      img: require('../storages/list/pic4.png'),
      title: 'Snack',
      cal: '0/100 kcal',
    },
    {
      id: 5,
      img: require('../storages/list/pic5.png'),
      title: 'Hoạt động đốt calories',
      cal: '0 kcal',
    },
  ];
  return data.map((data, index) => {
    return (
      <View
        key={data.id}
        style={{
          width: '80%',
          flex: 1,
          alignSelf: 'center',
          marginBottom: '5%',
        }}
      >
        <View
          style={{
            borderWidth: 0.5,
            height: 70,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{
                width: 57,
                height: 57,
                borderRadius: 6,
                marginLeft: 7,
                marginRight: '3%',
              }}
              source={data.img}
            />
            <View>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#00113D' }}
              >
                {data.title}
              </Text>
              <Text style={{ fontSize: 14, color: '#00113D' }}>{data.cal}</Text>
            </View>
          </View>
          <View style={{ marginRight: 8 }}>
            <AntDesign
              name="plussquareo"
              size={24}
              color="#C4C4C4"
              style={{ marginBottom: 5 }}
            />
            <AntDesign name="down" size={24} color="#C4C4C4" />
          </View>
        </View>
      </View>
    );
  });
};

export default CardHome;

const styles = StyleSheet.create({});
