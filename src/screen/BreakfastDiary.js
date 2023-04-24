import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import SearchBar from '../screenComponent/SearchBar';
import GroupScreen from '../screenComponent/GroupScreen';
import GroupScreen_1 from '../screenComponent/GroupScreen_1';
import { Feather, Octicons } from '@expo/vector-icons';
import CardBreakfast from '../screenComponent/CardBreakfast';
import CardBreakfastDetail from '../screenComponent/CardBreakfastDetail';

const BreakfastDiary = () => {
  return (
    <ScrollView style={{ height: '100%', paddingBottom: '20%' }}>
      <View
        style={{
          paddingTop: '5%',
          width: '100%',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '700',
            color: '#00113D',
          }}
        >
          Bữa sáng
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '5%',
            marginHorizontal: '20%',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Octicons name="flame" size={15} color="#AFF242" />
            <Text style={{ fontSize: 20, fontWeight: '700', marginLeft: '5%' }}>
              400 <Text style={{ fontWeight: '400', fontSize: 14 }}>kcal</Text>
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="edit" size={15} color="#AFF242" />
            <Text style={{ marginLeft: '5%' }}>2 món</Text>
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
        <View
          style={{
            alignItems: 'center',
            marginTop: '5%',
          }}
        >
          <CardBreakfastDetail />
        </View>
        <View
          style={{
            backgroundColor: '#AFF242',
            marginTop: '5%',
            marginHorizontal: '10%',
            height: 50,
            borderRadius: 18,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontWeight: '700', color: '#00113D' }}>
            Lưu thực đơn
          </Text>
        </View>
        <View
          style={{
            borderColor: '#AFF242',
            borderWidth: 2,
            marginTop: '5%',
            marginHorizontal: '10%',
            height: 50,
            borderRadius: 18,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontWeight: '700', color: '#00113D' }}>
            Trở lại lập kế hoạch cho ngày
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BreakfastDiary;

const styles = StyleSheet.create({});
