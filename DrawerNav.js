import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
<Drawer.Navigator>
    <Drawer.Screen name="Feed" component={HomeScreen} />
  
</Drawer.Navigator>
  )
}

export default DrawerNav