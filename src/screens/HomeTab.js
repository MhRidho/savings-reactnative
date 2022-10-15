import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../styles/constant';

import Home from './Home';
import History from './History';
import Profile from './Profile';
import TopUp from './TopUp';

const BottomTab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="dashboard" color={color} size={size} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="arrow-up" color={color} size={size} />
          ),
          header: ({ navigation }) => (
            <View style={styles.header}>
              <View style={styles.root}>
                <Text style={styles.headerTitle}>Search Receiver</Text>
              </View>
              <TouchableOpacity
                style={styles.searchWrapper}
                onPress={() => navigation.navigate('SearchReceiver')}>
                <Icon name="search" color="white" size={20} />
              </TouchableOpacity>
            </View>
          ),
        }}
        name="Transaction"
        component={History}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="plus" color={color} size={size} />
          ),
        }}
        name="Top Up"
        component={TopUp}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 60,
    backgroundColor: PRIMARY_COLOR,
    flexDirection: 'row',
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  searchWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default HomeTab;
