import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';

const Recipe = () => {
  const data = [
    { title: 'Card 1', content: 'This is the content of card 1' },
    { title: 'Card 2', content: 'This is the content of card 2' },
    { title: 'Card 3', content: 'This is the content of card 3' },
  ];

  const [expandedCardIndex, setExpandedCardIndex] = useState(-1);

  const handleCardPress = (index) => {
    if (expandedCardIndex === index) {
      setExpandedCardIndex(-1);
    } else {
      setExpandedCardIndex(index);
    }
  };

  return (
    <View>
      {data.map((item, index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => handleCardPress(index)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>

          {expandedCardIndex === index && (
            <View style={{ backgroundColor: 'white', padding: 10 }}>
              <Text>{item.content}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default Recipe;

const styles = StyleSheet.create({});
