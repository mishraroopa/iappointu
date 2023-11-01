 import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
 import Login from '../../screens/Login';
 import { createStackNavigator } from '@react-navigation/stack';
import Forgotpassword from '../../screens/forgotpassword';
import newpassword from '../../screens/Newpassword';
import Signup from '../../screens/Signup';

import Splash from '../../screens/Splash';
import Splash2 from '../../screens/Splash2';
import splash3 from '../../screens/splash3';
import Profile from '../../screens/Profile';
import Vitals from '../../screens/Vitals';
 const Stack = createStackNavigator();

 const StackNavigator = () => {
  return (

   <NavigationContainer>
       <Stack.Navigator initialRouteName='Splash'>
    <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
    <Stack.Screen name='ForgotPassword' component={Forgotpassword} options={{headerShown:false}} />
    <Stack.Screen name='Newpassword' component={newpassword} options={{headerShown:false}}/>
    <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
    <Stack.Screen name='Splash'  component={Splash} options={{headerShown:false}} />
    <Stack.Screen name='Splash2' component={Splash2} options={{headerShown:false}}/>
    <Stack.Screen name='Splash3'  component={splash3} options={{headerShown:false}}/>
    <Stack.Screen name='Profile' component={Profile}  options={{headerShown:false}}/>
    <Stack.Screen name='Vitals' component={Vitals}   options={{headerShown:false}}/>
   
    </Stack.Navigator>
   </NavigationContainer>
   );
 };

export default StackNavigator;

const styles = StyleSheet.create({
})