import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScanScreen from './screens/ScanScreen';
import EditScreen from './screens/EditScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Scan"
          component={ScanScreen}
        />
        <Stack.Screen 
          name="Edit" 
          component={EditScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack;