import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';
import {TNavRoutes} from '../types/types';
import {AppStack} from './navigationStack';

export const navigationRef =
  React.createRef<NavigationContainerRef<TNavRoutes>>();

export const MainNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack />
    </NavigationContainer>
  );
};
