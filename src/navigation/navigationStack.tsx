import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from '../screens';
import {theme} from '../theme';
import {ROUTES} from '../types/enums';
import {navigationParams} from '../types/types';

const Stack = createNativeStackNavigator<navigationParams>();

export const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.home}
      screenOptions={{animation: 'slide_from_left'}}>
      <Stack.Screen
        name={ROUTES.home}
        component={Home}
        options={{
          headerStyle: {backgroundColor: theme.palette.dark.medium},
          headerTitleStyle: {color: theme.palette.white.main},
          headerTitleAlign: 'center',
          title: 'GIPHY',
        }}
      />
    </Stack.Navigator>
  );
};
