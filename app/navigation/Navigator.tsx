import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ROUTES} from '../constants';
import {HomeScreen, ImageDetailsScreen} from '../modules';

type RootStackParamList = {
  [ROUTES.Home]: undefined;
  [ROUTES.ImageDetails]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'black',
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.Home} component={HomeScreen} />
      <Stack.Screen name={ROUTES.ImageDetails} component={ImageDetailsScreen} />
    </Stack.Navigator>
  );
};
