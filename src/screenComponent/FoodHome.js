import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FoodHome = () => {
  return (
    <View
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
        source={require('../storages/list/pic6.png')}
        style={{ width: '100%', height: 135, position: 'absolute' }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ marginLeft: '5%', marginTop: '2%' }}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>
            Protein Diet
          </Text>
          <Text style={{ color: 'white', fontSize: 10 }}>Chế độ ăn đạm</Text>
        </View>
        <MaterialCommunityIcons
          name="bookmark-minus"
          size={28}
          color="white"
          style={{ marginRight: '5%', marginTop: '2%' }}
        />
      </View>
    </View>
  );
};

export default FoodHome;

const styles = StyleSheet.create({});
