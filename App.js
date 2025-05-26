import * as React from 'react';
import {StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackHomeNavigator from "./source/stacks/StackHomeNavigator.js"
import StackPlantasNavigator from "./source/stacks/StackPlantasNavigator.js"
import StackInfoNavigator from "./source/stacks/StackInfoNavigator.js"
import StackProfileNavigator from "./source/stacks/StackProfileNavigator.js"

import { Ionicons } from '@expo/vector-icons';

//
// Screens del Primer Stack
//

const StackHome = createNativeStackNavigator();
const StackPlantas = createNativeStackNavigator();
const StackInfo = createNativeStackNavigator();
const StackProfile = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIconStyle: { width: 20, height: 20 },
        tabBarBackgroundStyle: {
          backgroundColor: route.name === 'Home' ? 'blue' : route.name === 'Plantas' ? 'green' : route.name === 'Información' ? 'yellow' : 'pink',
        },
        tabBarActiveBackgroundColor: route.name === 'Home' ? 'lightblue' : route.name === 'Plantas' ? 'lightgreen' : route.name === 'Información' ? 'lightyellow' : 'lightpink',
      })}>
        <Tab.Screen name="Home"     component={StackHomeNavigator} />
        <Tab.Screen name="Plantas" component={StackPlantasNavigator} />
        <Tab.Screen name="Información" component={StackInfoNavigator}  />
        <Tab.Screen name="Perfil"   component={StackProfileNavigator}  />
      </Tab.Navigator>

    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
