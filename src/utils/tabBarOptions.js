import React from 'react'
import { AntDesign } from '@expo/vector-icons';

import { colors } from "../styles";

export const tabBarStyle = {
  keyboardHidesTabBar: true,
  activeTintColor: colors.primary,
  inactiveTintColor: colors.inactive,
  labelStyle: {
    marginBottom: 2
  },
  style: {
    backgroundColor: colors.neutral,
    borderTopColor: 'transparent',
    elevation: 0,
  },
};

const renderTabIcon = ({ route, ...props }) => {
  const icons = {
    Principal: 'home',
    Favoritas: 'pushpino'
  }
  return <AntDesign name={icons[route.name]} {...props} />;
};

export const screenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ color, size }) => renderTabIcon({ color, size, route })
  }
}