import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Navigator} from './navigation/Navigator';
import {ApplicationStyles} from './theme';

function App() {
  return (
    <SafeAreaView style={ApplicationStyles.screen}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
