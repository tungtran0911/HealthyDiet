import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NoMeal = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ alignSelf: 'center', marginTop: '10%' }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: '#00113D',
            fontWeight: '700',
          }}
        >
          Hic.
        </Text>
        <View style={{ marginTop: '5%', width: '65%', alignSelf: 'center' }}>
          <Text style={{ textAlign: 'center', marginBottom: '5%' }}>
            Bạn chưa lập kế hoạch dinh dưỡng cho ngày này rồi.
          </Text>
          <Text style={{ textAlign: 'center' }}>
            Tạo lập thực đơn của riêng mình nào!
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('AddNewDiaryMeal')}
          style={{
            marginTop: '10%',
            height: 70,
            width: 70,
            backgroundColor: '#D9E3F9',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
        >
          <Entypo name="plus" size={40} color="#9BB7F0" />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={require('../storages/nomeal.png')}
          style={{ width: '100%', height: 306, alignSelf: 'center' }}
        />
      </View>
    </View>
  );
};

export default NoMeal;

const styles = StyleSheet.create({});
