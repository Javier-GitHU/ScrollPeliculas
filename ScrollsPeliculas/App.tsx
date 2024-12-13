
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          
          switch(route.name) {
            case "Home":
              if (focused) return  ( <Ionicons name="film" size={size} color={color} /> )
                else return ( <Ionicons name="film-outline" size={size} color={color} /> )
            case "Films2":
              if (focused) return ( <Ionicons name="film" size={size} color={color} /> )
                else return ( <Ionicons name="film-outline" size={size} color={color} /> )
          }

          return ( <Ionicons name="bulb-outline" size={size} color={color} /> )
        },
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#444444',
      })}
      
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Películas' }}/>
        <Tab.Screen name="Settings" component={SecondScreen} options={{ title: 'Segunda pantalla' }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
