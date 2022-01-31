import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigationRef} from './RootNavigation';
import Login from 'screens/Login';
import ForgotPassword from 'screens/ForgotPassword';
import HomeScreen from 'screens/Home';
import TestScreen1 from 'screens/TestScreen1';
import TestScreen2 from 'screens/TestScreen2';

import {colors, fontFamily} from '../styles/vars';

const RootStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const DashboardStack = createNativeStackNavigator();

const LoginScreens = () => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        headerTintColor: colors.black,
        headerTitleStyle: {
          fontFamily: fontFamily.black,
        },
      }}>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </LoginStack.Navigator>
  );
};

const DashboardScreens = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Home" component={HomeScreen} />
      <DashboardStack.Screen name="TestScreen1" component={TestScreen1} />
      <DashboardStack.Screen name="TestScreen2" component={TestScreen2} />
    </DashboardStack.Navigator>
  );
};

const Navigator = () => {
  const userId = false;

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.whiteYwo,
          },
          headerTitleStyle: {
            fontSize: 18,
            fontFamily: fontFamily.bold,
          },
          headerBackTitleVisible: false,
        }}>
        <RootStack.Screen
          name="RootScreen"
          component={userId ? DashboardScreens : LoginScreens}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
