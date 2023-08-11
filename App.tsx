import {StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import InvoiceScreen from './src/screens/InvoiceScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={'#1C85E8'} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Invoice" component={InvoiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
