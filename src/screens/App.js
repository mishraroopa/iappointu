
import StackNavigator from '../components/pages/StackNavigator';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Swipebutton from './Swipebutton';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {


  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>
    
     <StackNavigator />
     </GestureHandlerRootView>
  );
};

export default App;
