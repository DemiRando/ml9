import { View, Text } from 'react-native'
import React,{useEffect,useState}from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartingScreen from './StartingScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import RootStackScreen from '../RootStackScreen/RootStackScreen';
import { auth } from '../../firebase';
import getValueFor from '../../components/SecureStore/getValueFor';
import { useSelector, useDispatch } from 'react-redux';
import {setLogOut,setLogged,getLog} from '../../components/Slices/LogSlice';
import {  onAuthStateChanged } from "firebase/auth";

const AuthenticationStack = () => {
    const dispatch = useDispatch();
    const log =  useSelector(getLog);
   
    let user = false;
    const [isLogged,setIsLogged] = useState(false);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        dispatch(setLogged());
        // ...
      } else {
        dispatch(setLogOut());
        // User is signed out
        // ...
      }
    });
   
   /* useEffect(() => {
      getValueFor('loggedIn').then((result)=>{
        
        setIsLogged(result);
      
      })
   
    }, []);
*/
    
    const Stack = createNativeStackNavigator();
    
    

  return (
    <Stack.Navigator>
        {log ? <>
        <Stack.Screen name="Root" component={RootStackScreen} options={{headerShown:false}}/></>
        :
          <>
        <Stack.Screen name="Start" component={StartingScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}}/>
          </>
          }
    </Stack.Navigator>      
  )
}

export default AuthenticationStack