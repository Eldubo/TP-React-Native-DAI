import * as React from 'react';
import {StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ScreenHome1,
  ScreenHome2,
  ScreenInfo1,
  ScreenInfo2,
  ScreenPlantas1,
  ScreenPlantas2,
  ScreenProfile1,
  ScreenProfile2
} from "./source/screens";



import { Ionicons } from '@expo/vector-icons';

//
// Screens del Primer Stack
//

const StackHome = createNativeStackNavigator();
const StackPlantas = createNativeStackNavigator();
const StackInfo = createNativeStackNavigator();
const StackProfile = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function StackHomeNavigator() {
  return (
    <StackHome.Navigator>
      <StackHome.Screen name="ScreenHome1" component={ScreenHome1} />
      <StackHome.Screen name="ScreenHome2" component={ScreenHome2} />
    </StackHome.Navigator>
  );
}

function StackInfoNavigator() {
    return (
      <StackInfo.Navigator>
        <StackInfo.Screen name="ScreenInfo1" component={ScreenInfo1} />
        <StackInfo.Screen name="ScreenInfo2" component={ScreenInfo2} />
      </StackInfo.Navigator>
    );
  }

  function StackPlantasNavigator() {
    return (
      <StackPlantas.Navigator>
        <StackPlantas.Screen name="ScreenPlantas1" component={ScreenPlantas1} />
        <StackPlantas.Screen name="ScreenPlantas2" component={ScreenPlantas2} />
      </StackPlantas.Navigator>
    );
  }
  
  function StackProfileNavigator() {
      return (
        <StackProfile.Navigator>
          <StackProfile.Screen name="ScreenProfile1" component={ScreenProfile1} />
          <StackProfile.Screen name="ScreenProfile2" component={ScreenProfile2} />
        </StackProfile.Navigator>
      );
    }



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

/*
Se importa el estilo dese la hoja de estilos gral

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
*/
