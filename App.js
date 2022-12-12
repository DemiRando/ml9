import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './screens/RootStackScreen'
import AuthenticationStack from './screens/AuthenticationScreen/AuthenticationStack';
import { store } from './Store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthenticationStack/>
      </NavigationContainer>
    </Provider>
  
    );
}



