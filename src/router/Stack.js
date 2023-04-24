import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LogIn from '../screen/Login';
import Home from '../screen/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Add from '../screen/Add';
import Signin from '../screen/SignIn';
import Recipe from '../screen/Recipe';
import Follow from '../screen/Follow';
import Hello from '../screen/Hello';
import AimForm from '../screen/AimForm';
import GenderForm from '../screen/GenderForm';
import AgeForm from '../screen/AgeForm';
import WeightForm from '../screen/WeightForm';
import WeightWantForm from '../screen/WeightWantForm';
import MonthForm from '../screen/MonthForm';
import DoneForm from '../screen/DoneForm';
import HistorySeach from '../screen/HistorySeach';
import DiaryMeal from '../screen/DiaryMeal';
import AddNewDiaryMeal from '../screen/AddNewDiaryMeal';

const HomeStack = createNativeStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home Stack" component={Home} />
    </HomeStack.Navigator>
  );
}

const AddStack = createNativeStackNavigator();
function AddStacks() {
  return (
    <AddStack.Navigator screenOptions={{ headerShown: false }}>
      <AddStack.Screen name="Add Stack" component={Add} />
      <AddStack.Screen name="HistorySeach" component={HistorySeach} />
      <AddStack.Screen name="DiaryMeal" component={DiaryMeal} />
      <AddStack.Screen name="AddNewDiaryMeal" component={AddNewDiaryMeal} />
    </AddStack.Navigator>
  );
}

const RecipeStack = createNativeStackNavigator();
function RecipeStacks() {
  return (
    <RecipeStack.Navigator screenOptions={{ headerShown: false }}>
      <RecipeStack.Screen name="Recipe Stack" component={Recipe} />
    </RecipeStack.Navigator>
  );
}

const FollowStack = createNativeStackNavigator();
function FollowStacks() {
  return (
    <FollowStack.Navigator screenOptions={{ headerShown: false }}>
      <FollowStack.Screen name="Follow Stack" component={Follow} />
    </FollowStack.Navigator>
  );
}

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{ top: -30, justifyContent: 'center', alignItems: 'center' }}
    onPress={onPress}
  >
    <View style={{ width: 70, height: 70, borderRadius: 35 }}>{children}</View>
  </TouchableOpacity>
);

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: '#FFFFFF',
          width: '100%',
          height: '9%',
          shadowColor: '#FFF9EC',
          shadowOffset: {
            width: 5,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          borderRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '-5%',
              }}
            >
              <Image
                source={require('../storages/nav/home.png')}
                resizeMode="contain"
                style={{
                  width: 18.72,
                  height: 18.72,
                  tintColor: focused ? '#0047D7' : '#9BB7F0',
                }}
              ></Image>
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? '#0047D7' : '#9BB7F0',
                  marginTop: 6,
                }}
              >
                Trang chủ
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Recipe"
        component={RecipeStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '5%',
              }}
            >
              <Image
                source={require('../storages/nav/recipe.png')}
                resizeMode="contain"
                style={{
                  width: 18.72,
                  height: 18.72,
                  tintColor: focused ? '#0047D7' : '#9BB7F0',
                }}
              ></Image>
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 6,
                  color: focused ? '#0047D7' : '#9BB7F0',
                  textAlign: 'center',
                  width: 100,
                }}
              >
                Chế độ ăn theo kế hoạch
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Follow"
        component={FollowStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '-5%',
              }}
            >
              <Image
                source={require('../storages/nav/follow.png')}
                resizeMode="contain"
                style={{
                  width: 18.72,
                  height: 18.72,
                  tintColor: focused ? '#0047D7' : '#9BB7F0',
                }}
              ></Image>
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 6,
                  color: focused ? '#0047D7' : '#9BB7F0',
                }}
              >
                Theo Dõi
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: focused ? '#0047D7' : '#D9E3F9',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../storages/nav/add.png')}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? '#9BB7F0' : '#9BB7F0',
                  }}
                ></Image>
              </View>
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? '#0047D7' : '#9BB7F0',
                  marginTop: 6,
                }}
              >
                Tạo thực đơn
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stacks = createNativeStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator screenOptions={{ headerShown: false }}>
        <Stacks.Screen name="Signin" component={Signin} />
        <Stacks.Screen name="Login" component={LogIn} />
        <Stacks.Screen name="Hello" component={Hello} />
        <Stacks.Screen name="AimForm" component={AimForm} />
        <Stacks.Screen name="GenderForm" component={GenderForm} />
        <Stacks.Screen name="AgeForm" component={AgeForm} />
        <Stacks.Screen name="WeightForm" component={WeightForm} />
        <Stacks.Screen name="WeightWantForm" component={WeightWantForm} />
        <Stacks.Screen name="MonthForm" component={MonthForm} />
        <Stacks.Screen name="DoneForm" component={DoneForm} />
        <Stacks.Screen name="Tabs" component={Tabs} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
