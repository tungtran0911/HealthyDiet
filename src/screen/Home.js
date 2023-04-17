import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Infor from '../screenComponent/Infor';
import Aim from '../screenComponent/Aim';
import ProgressCalo from '../screenComponent/ProgressCalo';
import Water from '../screenComponent/Water';
import CardHome from '../screenComponent/CardHome';
import FoodHome from '../screenComponent/FoodHome';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const Home = () => {
  return (
    <ScrollView style={{ height: '100%', backgroundColor: 'white' }}>
      <View>
        <View>
          <ProgressCalo />
          <View style={{ marginTop: '145%' }}>
            <Water />
          </View>
        </View>

        <View
          style={{
            paddingTop: '5%',
            height: 216,
            backgroundColor: 'white',
            position: 'absolute',
            width: '100%',
          }}
        >
          <Infor />
        </View>
        <View
          style={{
            position: 'absolute',
            marginTop: '35%',
            width: '100%',
          }}
        >
          <Aim />
        </View>
        <View style={{ marginTop: '20%' }}>
          <CardHome />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '10%',
            marginBottom: '5%',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Ionicons
              name="ios-heart-outline"
              size={24}
              color="#00113D"
              style={{ marginRight: 8 }}
            />
            <Text style={{ color: '#00113D', fontWeight: '700', fontSize: 14 }}>
              Gợi ý chế độ ăn cho bạn
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: 7, color: '#B1B1B1' }}>Xem thêm</Text>
            <FontAwesome name="angle-right" size={24} color="#B1B1B1" />
          </View>
        </View>
        <View
          style={{
            width: '100%',
          }}
        >
          <FoodHome />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
