import React from 'react'
import { AntDesign } from '@expo/vector-icons';

import { colors, fontSize } from "../styles";

export const tabBarStyle = {
  keyboardHidesTabBar: true,
  activeTintColor: colors.primary,
  inactiveTintColor: colors.inactive,
  labelStyle: {
    fontSize: fontSize.medium,
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
    home: 'home',
    favorite: 'pushpino'
  }
  return <AntDesign name={icons[route.name]} {...props} />;
};

export const screenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ color, size }) => renderTabIcon({ color, size, route })
  }
}