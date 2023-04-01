import { View, Text, Image } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../screen/SignIn';
import Login from '../screen/Login';
import Home from '../screen/Home';
import Content from '../screen/Content';
import Exercises from '../screen/Exercises';
import Relaxtion from '../screen/Relaxtion';
import Bookmarks from '../screen/Bookmarks';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '../screen/Explore';

const HomeStack = createNativeStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home Stack" component={Home} />
    </HomeStack.Navigator>
  );
}

const ExploreStack = createNativeStackNavigator();
function ExploreStacks() {
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Screen name="Explore Stack" component={Explore} />
    </ExploreStack.Navigator>
  );
}

const ExercisesStack = createNativeStackNavigator();
function ExercisesStacks() {
  return (
    <ExercisesStack.Navigator screenOptions={{ headerShown: false }}>
      <ExercisesStack.Screen name="Exercises Stack" component={Exercises} />
    </ExercisesStack.Navigator>
  );
}

const RelaxtionStack = createNativeStackNavigator();
function RelaxtionStacks() {
  return (
    <RelaxtionStack.Navigator screenOptions={{ headerShown: false }}>
      <RelaxtionStack.Screen name="Relaxtion Stack" component={Relaxtion} />
    </RelaxtionStack.Navigator>
  );
}

const BookmarksStack = createNativeStackNavigator();
function BookmarksStacks() {
  return (
    <BookmarksStack.Navigator screenOptions={{ headerShown: false }}>
      <BookmarksStack.Screen name="Bookmarks Stack" component={Bookmarks} />
    </BookmarksStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: '#5193E1',
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
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FFFFFF' : '#EAEAEA',
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreStacks}
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
                source={require('../storages/nav/explore.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FFFFFF' : '#EAEAEA',
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Exercises"
        component={ExercisesStacks}
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
                source={require('../storages/img/icon/exercise.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FFFFFF' : '#EAEAEA',
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Relaxtion"
        component={RelaxtionStacks}
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
                source={require('../storages/nav/news.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FFFFFF' : '#EAEAEA',
                }}
              ></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={BookmarksStacks}
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
                source={require('../storages/nav/fill.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FFFFFF' : '#EAEAEA',
                }}
              ></Image>
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
        <Stacks.Screen name="SignIn" component={SignIn} />
        <Stacks.Screen name="Login" component={Login} />
        <Stacks.Screen name="Tabs" component={Tabs} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
