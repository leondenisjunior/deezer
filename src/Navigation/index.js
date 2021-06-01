import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import App from './App'
import Auth from './Auth'

const StackNavigator = createStackNavigator();

const Navigation = () => {
  const user = true

  const Component = user ? App : Auth

  return (
    <StackNavigator.Navigator headerMode="none">
      <StackNavigator.Screen name="ComponentNaviagtion" component={Component} />
    </StackNavigator.Navigator>
  );
};

export default Navigation;
