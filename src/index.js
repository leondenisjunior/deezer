import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AlbumProvider } from './context';
import { SoundProvider } from './context/sound';

import Navigation from './Navigation';

import { colors } from './styles';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="light" backgroundColor={colors.primary} />
    <AlbumProvider>
      <SoundProvider>
        <Navigation />
      </SoundProvider>
    </AlbumProvider>
  </NavigationContainer>
);

export default App;
