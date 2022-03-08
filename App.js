import React, { Component } from 'react';

import LoginScreen from './LoginScreen';
import Screen1 from './Screen1'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './DetailScreen';
const Stack=createStackNavigator()


export default class App extends Component{
  render(){
return(
  <NavigationContainer>
 <Stack.Navigator>
   <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="DetailScreen" component={DetailScreen}/>
 </Stack.Navigator>
 </NavigationContainer>
)
}
}