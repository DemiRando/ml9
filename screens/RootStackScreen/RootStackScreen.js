import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Cup, Discover, Home, Profile } from 'iconsax-react-native';


import HomeScreen from '../HomeScreen';
import GauntletScreen from '../HomeChildScreens/GauntletScreen';
import MLNewsScreen from '../HomeChildScreens/MLNewsScreen';
import FantasyScreen from '../HomeChildScreens/FantasyScreen';
import GistScreen from '../HomeChildScreens/GistScreen';
import ContentScreen from '../HomeChildScreens/ContentScreen';



import TournieScreen from '../TournieScreen';
import GauntScreen from '../TourneyChildScreens/GauntScreen';
import PlayerScreen from '../TourneyChildScreens/PlayerScreen';

import EventsScreen from '../EventsScreen';
import FantasyLeagueScreen from '../EventChildScreens/FantasyLeagueScreen';
import TierListScreen from '../EventChildScreens/TierListScreen';
import GuideScreen from '../EventChildScreens/GuideScreen';
import ComparisonScreen from '../EventChildScreens/ComparisonScreen';

import ProfileScreen from '../ProfileScreen';
import AdminScreen from '../ProfileChildScreens/AdminScreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () =>{
return(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="MLNews" component={MLNewsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="GauntletNews" component={GauntletScreen} options={{headerShown:false}}/>
        <Stack.Screen name="FantsayNews" component={FantasyScreen} options={{headerShown:false}}/>
        <Stack.Screen name="GistNews" component={GistScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Content" component={ContentScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
    
)
}

const ProfileStackScreen = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Admin" component={AdminScreen} options={{headerShown:false}}/>
            
           
        </Stack.Navigator>
    )
    }

const TournieStackScreen = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Tournie" component={TournieScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Gaunt" component={GauntScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Player" component={PlayerScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
    }

const EventsStackScreen = () =>{
        return(
        <Stack.Navigator>
            <Stack.Screen name="Events" component={EventsScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Fantasy" component={FantasyLeagueScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Tier" component={TierListScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Guide" component={GuideScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Comparison" component={ComparisonScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
    }
        
const RootStackScreen = () => {
  

  return (
        <Tab.Navigator 
        screenOptions={{
            tabBarStyle:{
                Position:'absolute',
               
                
                height:60,
                
                backgroundColor:'#252A34'
                
        }
        }}
       >
            <Tab.Screen name="Home Tab" component={HomeStackScreen} options={{
                headerShown:false,
                tabBarIcon:({focused})=>(<Home 
                    variant="Outline" 
                    size={25}   
                    style={{
                        color:focused ? "#553EB8" : "#BABCC2",
                        borderWidth:3,
                        paddingBottom:40,
                        borderColor:"#252A34",
                        borderBottomColor: focused ? "#553EB8" : "#252A34"
                    }}
                    />),
               tabBarShowLabel:false,
                }}
                />
            <Tab.Screen name="Tournie Tab" component={TournieStackScreen} options={{
                headerShown:false,
                tabBarIcon:({focused})=>(<Cup 
                    variant="Outline" 
                    size={25}   
                    style={{
                        color:focused ? "#553EB8" : "#BABCC2",
                        borderWidth:3,
                        paddingBottom:40,
                        borderColor:"#252A34",
                        borderBottomColor: focused ? "#553EB8" : "#252A34"
                    }}
                    />),
                tabBarShowLabel:false,
                }}
                />
            <Tab.Screen name="Events Tab" component={EventsStackScreen} options={{
                headerShown:false,
                tabBarIcon:({focused})=>(<Discover 
                    variant="Outline" 
                    size={25}   
                    style={{
                        color:focused ? "#553EB8" : "#BABCC2",
                        paddingBottom:40,
                        borderWidth:3,
                        borderColor:"#252A34",
                        borderBottomColor: focused ? "#553EB8" : "#252A34"
                    }}
                    />),
                tabBarShowLabel:false,
                }}
                />

            <Tab.Screen name="Profile Tab" component={ProfileStackScreen} options={{
                headerShown:false,
                tabBarIcon:({focused})=>(<Profile 
                    variant="Outline" 
                    size={25}   
                    style={{
                        color:focused ? "#553EB8" : "#BABCC2",
                        paddingBottom:40,
                        borderWidth:3,
                        borderColor:"#252A34",
                        borderBottomColor: focused ? "#553EB8" : "#252A34",
                        
                    }}
                    />),
                tabBarShowLabel:false,
                }}
                />    
        </Tab.Navigator>
    
  )
}

export default RootStackScreen