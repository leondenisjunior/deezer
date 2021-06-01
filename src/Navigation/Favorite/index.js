import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FavoriteScreen from '../../screens/Favorite';

import { title } from '../../utils/screenOption';

const StackNavigator = createStackNavigator();

const Favorite = () => (
  <StackNavigator.Navigator>
    <StackNavigator.Screen
      options={title('Favoritas')}
      name="favoriteScreen"
      component={FavoriteScreen}
    />
  </StackNavigator.Navigator>
);

export default Favorite;
