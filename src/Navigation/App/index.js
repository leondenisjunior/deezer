import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Home'
import Favorite from '../Favorite'

import { screenOptions, tabBarStyle } from '../../utils/tabBarOptions';

const BottomTab = createBottomTabNavigator();

const App = () => (
  <BottomTab.Navigator
    initialRouteName="Home"
    keyboardHidesTabBar
    screenOptions={screenOptions}
    tabBarOptions={tabBarStyle}
  >
    <BottomTab.Screen
      name="home"
      component={Home}
    />
    <BottomTab.Screen
      name="favorite"
      component={Favorite}
    />
  </BottomTab.Navigator>
);

export default App