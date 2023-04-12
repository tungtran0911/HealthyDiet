import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const MonthForm = () => {
  const navigation = useNavigation();
  const options = [
    { label: '1 tháng', value: 'option1' },
    { label: '3 tháng', value: 'option2' },
    { label: '6 tháng', value: 'option3' },
    { label: '1 năm', value: 'option4' },
    { label: '2 năm', value: 'option5' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '5%',
          marginTop: '10%',
        }}
      >
        <AntDesign
          name="arrowleft"
          size={40}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <AntDesign
          name="arrowright"
          size={40}
          color="black"
          onPress={() => navigation.navigate('DoneForm')}
        />
      </View>
      <View style={{ marginTop: '20%' }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 20,
            color: '#3E445F',
            marginBottom: 32,
          }}
        >
          Thời gian đạt được mục tiêu:
        </Text>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.optionButton,
              selectedOption === option.value && styles.selectedOptionButton,
            ]}
            onPress={() => handleOptionChange(option.value)}
          >
            <Text
              style={[
                styles.optionText,
                selectedOption === option.value && styles.selectedOptionText,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MonthForm;

const styles = StyleSheet.create({
  optionButton: {
    marginVertical: 15,
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 99,
    backgroundColor: '#4B6AB9',
    opacity: 0.6,
    marginHorizontal: '8%',
    borderColor: '#4B6AB9',
  },
  selectedOptionButton: {
    backgroundColor: '#4B6AB9',
    opacity: 1,
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
  selectedOptionText: {
    color: '#fff',
  },
});
