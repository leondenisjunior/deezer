import React from 'react';
import { useFonts } from '@use-expo/font';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';

const TextComponent = ({ children, type, style, ...props }) => {
  const [fontsLoaded] = useFonts({
    Light: require('../../../../assets/fonts/Montserrat-Light.ttf'),
    Regular: require('../../../../assets/fonts/Montserrat-Regular.ttf'),
    Medium: require('../../../../assets/fonts/Montserrat-Medium.ttf'),
    SemiBold: require('../../../../assets/fonts/Montserrat-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const font = type || 'Regular';
  const styles = [{ fontFamily: font }, style || {}];
  const allProps = { ...props, style: styles };

  return (
    <Text {...allProps} maxFontSizeMultiplier={1}>
      {children}
    </Text>
  );
};

export default TextComponent;
