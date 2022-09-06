import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeTab from './HomeTab';
import Search from './SearchReceiver';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeTab"
        component={HomeTab}
      />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default HomeStack;
