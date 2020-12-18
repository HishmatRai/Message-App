import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './../screens/welcome'
import Otp from './../screens/otp'
import Message from './../screens/message'
import Search from './../screens/search'
import AllChat from './../screens/allchat'
import History from './../screens/history'
import Profile from './../screens/profile'
import SwipeToPlay from './../screens/swipeToPlay'
import Request from './../screens/request'
import Setting from './../screens/setting'
import Back from './../screens/back'
function Navigation() {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} /> */}
        <Stack.Screen name="AllChat" component={AllChat} options={{ headerShown: false }} />
        {/* <Stack.Screen name="History" component={History} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="SwipeToPlay" component={SwipeToPlay} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Request" component={Request} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Back" component={Back} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;