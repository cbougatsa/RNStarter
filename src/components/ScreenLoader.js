import {colors} from '../styles/vars';
import {ActivityIndicator} from 'react-native';
import React from 'react';

export default function ScreenLoader() {
  return (
    <ActivityIndicator
      size={'large'}
      color={colors.black}
      style={{marginTop: 70}}
    />
  );
}
