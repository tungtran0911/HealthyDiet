import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { useState } from 'react';

const CardHome = () => {
  const data = [
    {
      id: 1,
      img: require('../storages/list/pic1.png'),
      title: 'Bữa sáng',
      cal: '300/500 kcal',
      listImg: [
        {
          id: 1,
          img: require('../storages/list/listpic1.png'),
          title: 'Trứng luộc',
          cal: '155 calo',
          weight: '100g',
        },
        {
          id: 2,
          img: require('../storages/list/listpic2.png'),
          title: 'Táo đỏ',
          cal: '50 calo',
          weight: '100g',
        },
        {
          id: 3,
          img: require('../storages/list/listpic3.png'),
          title: 'Sữa bò',
          cal: '95 calo',
          weight: '100g',
        },
      ],
    },
    {
      id: 2,
      img: require('../storages/list/pic2.png'),
      title: 'Bữa trưa',
      cal: '0/600 kcal',
      listImg: [
        {
          id: 1,
          img: require('../storages/list/listpic1.png'),
          title: 'Trứng luộc',
          cal: '155 calo',
          weight: '100g',
        },
        {
          id: 2,
          img: require('../storages/list/listpic2.png'),
          title: 'Táo đỏ',
          cal: '50 calo',
          weight: '100g',
        },
        {
          id: 3,
          img: require('../storages/list/listpic3.png'),
          title: 'Sữa bò',
          cal: '95 calo',
          weight: '100g',
        },
      ],
    },
    {
      id: 3,
      img: require('../storages/list/pic3.png'),
      title: 'Bữa tối',
      cal: '0/600 kcal',
      listImg: [
        {
          id: 1,
          img: require('../storages/list/listpic1.png'),
          title: 'Trứng luộc',
          cal: '155 calo',
          weight: '100g',
        },
        {
          id: 2,
          img: require('../storages/list/listpic2.png'),
          title: 'Táo đỏ',
          cal: '50 calo',
          weight: '100g',
        },
        {
          id: 3,
          img: require('../storages/list/listpic3.png'),
          title: 'Sữa bò',
          cal: '95 calo',
          weight: '100g',
        },
      ],
    },
    {
      id: 4,
      img: require('../storages/list/pic4.png'),
      title: 'Snack',
      cal: '0/100 kcal',
      listImg: [
        {
          id: 1,
          img: require('../storages/list/listpic1.png'),
          title: 'Trứng luộc',
          cal: '155 calo',
          weight: '100g',
        },
        {
          id: 2,
          img: require('../storages/list/listpic2.png'),
          title: 'Táo đỏ',
          cal: '50 calo',
          weight: '100g',
        },
        {
          id: 3,
          img: require('../storages/list/listpic3.png'),
          title: 'Sữa bò',
          cal: '95 calo',
          weight: '100g',
        },
      ],
    },
    {
      id: 5,
      img: require('../storages/list/pic5.png'),
      title: 'Hoạt động đốt calories',
      cal: '0 kcal',
      listImg: [
        {
          id: 1,
          img: require('../storages/list/listpic1.png'),
          title: 'Trứng luộc',
          cal: '155 calo',
          weight: '100g',
        },
        {
          id: 2,
          img: require('../storages/list/listpic2.png'),
          title: 'Táo đỏ',
          cal: '50 calo',
          weight: '100g',
        },
        {
          id: 3,
          img: require('../storages/list/listpic3.png'),
          title: 'Sữa bò',
          cal: '95 calo',
          weight: '100g',
        },
      ],
    },
  ];

  const [showCard, setShowCard] = useState(-1);

  const handleCardPress = (index) => {
    if (showCard === index) {
      setShowCard(-1);
    } else {
      setShowCard(index);
    }
  };

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
              backgroundColor: 'white',
              width: '100%',
              height: 150,
              borderWidth: 0.5,
              borderRadius: 5,
            }}
          >
            {data.listImg.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{ justifyContent: 'center', marginHorizontal: 10 }}
                >
                  <Image
                    source={item.img}
                    style={{ width: 96, height: 96, borderRadius: 5 }}
                  />
                  <Octicons
                    name="trash"
                    size={20}
                    color="#B1B1B1"
                    style={{ position: 'absolute', top: 20, right: 10 }}
                  />
                  <View>
                    <Text style={{ fontSize: 12, color: '#00113D' }}>
                      {item.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={{ fontSize: 10, color: '#B1B1B1' }}>
                      {item.cal}
                    </Text>
                    <Text style={{ fontSize: 10, color: '#B1B1B1' }}>
                      {item.weight}
                    </Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        )}
      </View>
    );
  });
};

export default CardHome;

const styles = StyleSheet.create({});
