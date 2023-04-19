import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SigninScreen from '../screens/SignIn';
import Header from '../components/Header';
import InviteFriendsScreen from '../screens/InviteFriends';
const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  Signin: undefined;
  InviteFriends: undefined;
};

export default function RootNav() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen 
            name="Signin" 
            component={SigninScreen}
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              header: () => <Header />,
              headerShown: true,
            }}
          />
          <Stack.Screen 
            name="InviteFriends" 
            component={InviteFriendsScreen}
            options={{
              headerShown: true,
              headerBackTitle: 'Back',
              headerTitle: '',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }