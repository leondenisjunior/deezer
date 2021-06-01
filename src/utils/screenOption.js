import React from 'react';
import Text from '../components/atoms/Text';

import { colors } from '../styles';

export const transparent = { headerShown: false };

export const title = (props) => ({
  title: (
    <Text style={{ fontSize: 23 }} type="SemiBold">
      {props}
    </Text>
  ),
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.primary,
  },
  headerTintColor: '#FFFF',
});
