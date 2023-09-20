import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Navigator} from '../app/navigation/Navigator';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
      {/* <HomeScreen /> */}
    </SafeAreaView>
  );
}

export default App;
