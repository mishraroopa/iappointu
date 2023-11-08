import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const Drawnavigator = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Feed" component={Feed} />
    <Drawer.Screen name="Article" component={Article} />
  </Drawer.Navigator>
);
  
}

export default Drawnavigator

const styles = StyleSheet.create({})