import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Text from '../Text';

import { colors, fontSize, margin } from '../../../styles';

const Button = ({
  preset = 'solid',
  onPress,
  iconColor,
  icon,
  children,
  style,
  loader,
  disabled,
}) => {
  const buttonStyle = Button.preset[preset];
  const loaderColor = Button.loaderColor[preset];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={Object.assign(buttonStyle.button, style)}
      disabled={disabled || loader}
    >
      <View style={styles.wrapper}>
        {loader ? (
          <ActivityIndicator size="small" color={loaderColor} />
        ) : (
          <>
            {icon && (
              <AntDesign
                name={icon}
                style={styles.icon}
                size={24}
                color={iconColor}
              />
            )}
            <Text type="SemiBold" style={buttonStyle.text}>
              {children}
            </Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    borderRadius: 8,
  },
  wrapper: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: margin.small,
  },
});

Button.loaderColor = {
  solid: colors.white,
  outline: colors.primary,
  text: colors.primary,
};

Button.preset = {
  solid: {
    button: {
      ...styles.button,
      backgroundColor: colors.primary,
    },
    text: {
      color: colors.white,
      fontSize: fontSize.medium,
    },
  },
  outline: {
    button: {
      ...styles.button,
      backgroundColor: colors.white,
    },
    text: {
      color: colors.primary,
      fontSize: fontSize.medium,
    },
  },
  text: {
    button: {
      ...styles.button,
    },
    text: {
      color: colors.primary,
      fontSize: fontSize.medium,
    },
  },
};

export default Button;
