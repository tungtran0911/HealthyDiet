import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Infor = () => {
  return (
    <View
      style={{
        marginHorizontal: '11%',
        borderWidth: 1,
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Image
          source={require('../storages/avt.jpg')}
          style={{ width: 49, height: 49 }}
        />
        <View style={{ width: '90%' }}>
          <Text>Chào Nam</Text>
          <Text style={{ fontSize: 10 }}>
            Hãy xây dựng kế hoạch dinh dưỡng cho hôm nay nào!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Infor;

const styles = StyleSheet.create({});
