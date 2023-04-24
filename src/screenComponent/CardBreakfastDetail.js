import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  Entypo,
  Feather,
  MaterialCommunityIcons,
  Octicons,
} from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

const CardBreakfastDetail = () => {
  return (
    <View
      style={{
        height: 'auto',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#FFD4E4',
      }}
    >
      <View
        style={{
          width: '65%',
          height: 114,
          borderRadius: 10,
          backgroundColor: '#FFD4E4',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            marginLeft: '6%',
            marginTop: '4%',
          }}
        >
          <Image
            source={require('../storages/list/listpic4.png')}
            style={{ width: 57, height: 57, borderRadius: 6 }}
          />
          <View
            style={{
              justifyContent: 'space-around',
              marginLeft: '3%',
              width: '50%',
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: '700' }}>Cơm gạo lứt</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Octicons name="flame" size={10} color="#AFF242" />
              <Text style={{ fontSize: 10, marginLeft: 6 }}>155 kcal</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Feather name="edit" size={10} color="#AFF242" />
              <Text style={{ fontSize: 10, marginLeft: 6 }}>1 quả - 100g</Text>
            </View>
          </View>
          <View style={{}}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <Feather name="edit" size={24} color="#C4C4C4" />
              <MaterialCommunityIcons
                name="bookmark-minus"
                size={28}
                color="#AFF242"
                style={{
                  marginRight: '5%',
                  marginTop: '2%',
                  marginLeft: '20%',
                }}
              />
            </View>
            <Text style={{ fontSize: 8 }}>200 kcal/100 gam</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '2%',
          }}
        >
          <View>
            <Text style={{ color: '#00113D', fontSize: 8 }}>Carbs</Text>
            <Progress.Bar
              progress={0.4}
              width={52}
              color="#6BD2A7"
              height={4}
              style={{ marginVertical: '6%' }}
            />
            <Text style={{ color: '#B1B1B1', fontSize: 8 }}>20g</Text>
          </View>
          <View>
            <Text style={{ color: '#00113D', fontSize: 8 }}>Proteins</Text>
            <Progress.Bar
              progress={0.4}
              width={52}
              color="#93CAFC"
              height={4}
              style={{ marginVertical: '6%' }}
            />
            <Text style={{ color: '#B1B1B1', fontSize: 8 }}>20g</Text>
          </View>
          <View>
            <Text style={{ color: '#00113D', fontSize: 8 }}>Fats</Text>
            <Progress.Bar
              progress={0.4}
              width={52}
              color="#F9BBF9"
              height={4}
              style={{ marginVertical: '6%' }}
            />
            <Text style={{ color: '#B1B1B1', fontSize: 8 }}>20g</Text>
          </View>
          <View
            style={{
              borderRadius: 20,
              borderWidth: 1,
              height: 23,
              width: 23,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Entypo name="plus" size={22} color="#00113D" />
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '5%',
            marginLeft: '5%',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Octicons name="flame" size={12} color="#B1B1B1" />
            <Text style={{ fontSize: 12, fontWeight: '700', marginLeft: '5%' }}>
              200{' '}
              <Text
                style={{ fontWeight: '400', fontSize: 12, color: '#B1B1B1' }}
              >
                kcal
              </Text>
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="edit" size={12} color="#B1B1B1" />
            <Text style={{ marginLeft: '5%', fontSize: 12, color: '#B1B1B1' }}>
              1 bát
            </Text>
            <Text style={{ marginLeft: '5%', fontSize: 12, color: '#B1B1B1' }}>
              100g
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: '5%',
            marginLeft: '5%',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Octicons name="flame" size={15} color="#AFF242" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                marginLeft: '5%',
                color: '#00113D',
              }}
            >
              400 <Text style={{ fontWeight: '400', fontSize: 14 }}>kcal</Text>
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="edit" size={15} color="#AFF242" />
            <Text style={{ marginLeft: '5%', fontSize: 14, color: '#00113D' }}>
              1 bát
            </Text>
            <Text style={{ marginLeft: '5%', fontSize: 14, color: '#00113D' }}>
              100g
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '5%',
          }}
        >
          <View>
            <Text style={{ color: '#00113D', fontSize: 12 }}>Carbs</Text>
            <Progress.Bar
              progress={0.4}
              width={50}
              color="#6BD2A7"
              height={5}
              style={{ marginVertical: '6%' }}
            />
            <Text style={{ color: '#B1B1B1', fontSize: 12 }}>20g</Text>
          </View>
          <View>
            <Text style={{ color: '#00113D', fontSize: 12 }}>Proteins</Text>
            <Progress.Bar
              progress={0.4}
              width={50}
              color="#93CAFC"
              height={6}
              style={{ marginVertical: '6%' }}
            />
            <Text style={{ color: '#B1B1B1', fontSize: 12 }}>20g</Text>
          </View>
          <View>
            <Text style={{ color: '#00113D', fontSize: 12 }}>Fats</Text>
            <Progress.Bar
              progress={0.4}
              width={50}
              color="#F9BBF9"
              height={5}
              style={{ marginVertical: '6%' }}
            />
            <Text style={{ color: '#B1B1B1', fontSize: 12 }}>20g</Text>
          </View>
        </View>
        <View style={{ marginTop: '5%', marginHorizontal: '3%' }}>
          <Text>4 Nguyên liệu</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '2%',
            }}
          >
            <Text>1. Cá chép</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 12 }}>100 gam</Text>
              <Text style={{ paddingLeft: '1%', fontSize: 12 }}>200 kcal</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '2%',
            }}
          >
            <Text>2. Giềng</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 12 }}>100 ml</Text>
              <Text style={{ paddingLeft: '5%', fontSize: 12 }}>0 kcal</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '2%',
            }}
          >
            <Text>3. Gia vị</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 12 }}>100 ml</Text>
              <Text style={{ paddingLeft: '5%', fontSize: 12 }}>0 kcal</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardBreakfastDetail;

const styles = StyleSheet.create({});
