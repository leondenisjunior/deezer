import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/Home';
import { title } from '../../utils/screenOption';

const StackNavigator = createStackNavigator();

const Home = () => (
  <StackNavigator.Navigator>
    <StackNavigator.Screen
      options={title('Principal')}
      name="HomeScreen"
      component={HomeScreen}
    />
  </StackNavigator.Navigator>
);

export default Home;
