import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Infor from '../screenComponent/Infor';
import Aim from '../screenComponent/Aim';
import ProgressCalo from '../screenComponent/ProgressCalo';
import Water from '../screenComponent/Water';
import CardHome from '../screenComponent/CardHome';

const Home = () => {
  return (
    <ScrollView style={{ height: '100%', backgroundColor: 'white' }}>
      <View>
        <View>
          <ProgressCalo />
          <Water />
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
        <View style={{ marginTop: '10%' }}>
          <CardHome />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
