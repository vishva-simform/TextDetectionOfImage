import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import * as routes from './routes';
import {SelectImageScreen} from '../screens/SelectImageScreen';
import {ProcessImageScreen} from '../screens/ProcessImageScreen';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  [routes.SELECT_SCREEN]: undefined;
  [routes.PROCESS_IMAGE_SCREEN]: {
    uri: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export type SelectScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  typeof routes.SELECT_SCREEN
>;

export type ProcessImageNavigationProps = StackNavigationProp<
  RootStackParamList,
  typeof routes.PROCESS_IMAGE_SCREEN
>;

export type ProcessImageRouteProps = RouteProp<
  RootStackParamList,
  typeof routes.PROCESS_IMAGE_SCREEN
>;

export const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.SELECT_SCREEN}
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: 'black',
      }}>
      <Stack.Screen name={routes.SELECT_SCREEN} component={SelectImageScreen} />
      <Stack.Screen
        name={routes.PROCESS_IMAGE_SCREEN}
        component={ProcessImageScreen}
      />
    </Stack.Navigator>
  );
};
