import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Water = () => {
  return (
    <View>
      <View
        style={{
          width: '80%',
          height: 79,
          backgroundColor: '#AFF242',
          position: 'relative',
          marginHorizontal: '10%',
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '5%',
            marginTop: '2%',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              color: '#00113D',
            }}
          >
            Uống Nước
          </Text>
          <Text>Mục tiêu: 0.25/2l</Text>
        </View>
      </View>
    </View>
  );
};

export default Water;

const styles = StyleSheet.create({});
