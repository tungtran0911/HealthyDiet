import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const CardHome = () => {
  return (
    <View style={{ width: '80%', flex: 1, alignSelf: 'center' }}>
      <View style={{ borderWidth: 0.5, height: 70, borderRadius: 10 }}>
        <View>
          <Image
            style={{ width: 57, height: 57, borderRadius: 6 }}
            source={require('../storages/list/pic1.png')}
          />
          <View>
            <Text>Bữa sáng</Text>
            <Text>300/500 kcal</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardHome;

const styles = StyleSheet.create({});
