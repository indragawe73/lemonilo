import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import GojekScreen from '../screens/GojekScreen';
import GrabScreen from '../screens/GrabScreen';
import TravelokaScreen from '../screens/TravelokaScreen';
import { BottomTabParamList, GojekParamList, GrabParamList, TravelokaParamList } from '../types';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = 'dark';

  return (
    <BottomTab.Navigator
      initialRouteName="Grab"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Mie Goreng"
        component={GrabScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Ayam Bawang"
        component={GojekScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-card" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Mie Kari"
        component={TravelokaScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-cash" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
}

const GojekStack = createStackNavigator<GojekParamList>();

function GojekScreenNavigator() {
  return (
    <GojekStack.Navigator>
      <GojekStack.Screen
        name="GojekScreen"
        component={GojekScreen}
        options={{ headerTitle: 'Home Title' }}
      />
    </GojekStack.Navigator>
  );
}

const GrabStack = createStackNavigator<GrabParamList>();

function GrabScreenNavigator() {
  return (
    <GrabStack.Navigator>
      <GrabStack.Screen
        name="GrabScreen"
        component={GrabScreen}
        options={{ headerTitle: 'Gojek Title' }}
      />
    </GrabStack.Navigator>
  );
}

const TravelokaStack = createStackNavigator<TravelokaParamList>();

function TravelokaScreenNavigator() {
  return (
    <TravelokaStack.Navigator>
      <TravelokaStack.Screen
        name="TravelokaScree"
        component={TravelokaScree}
        options={{ headerTitle: 'Traveloka Title' }}
      />
    </TravelokaStack.Navigator>
  );
}
