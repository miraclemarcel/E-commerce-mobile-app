import React from 'react';
import 'react-native-gesture-handler';


import NavigationScreens from './navigators/NavigationScreens';
import { NavigationContainer } from '@react-navigation/native';





export default function App() {
  return (
    <NavigationContainer>
       <NavigationScreens/>
    </NavigationContainer>
   
  );
}
