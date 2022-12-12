import { View, Text,TextInput,TouchableOpacity,Image,ScrollView,ImageBackground} from 'react-native'
import React,{useState,useEffect} from 'react'

import { useNavigation } from '@react-navigation/native'
import {Eye,EyeSlash} from 'iconsax-react-native'
import { useForm, Controller } from 'react-hook-form'
import CustomInput from '../../components/CustomInput/CustomInput'
//import {auth} from '../../firebase';
//import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import {  signInWithPopup,GoogleAuthProvider,
  signInWithEmailAndPassword,signOut,setPersistence,
  browserLocalPersistence ,
} from "firebase/auth";
import * as SecureStore from 'expo-secure-store';
import save from '../../components/SecureStore/save';
import getValueFor from '../../components/SecureStore/getValueFor';
import { useDispatch } from 'react-redux';
import {setLogOut,setLogged} from '../../components/Slices/LogSlice';



const LoginScreen = () => {
  const dispatch = useDispatch();

  const provider = new GoogleAuthProvider()
  const navigation = useNavigation();
  const {control,handleSubmit,formState:{errors}} = useForm();
  const [isSignedIn,setIsSignedIn] = useState(false);
 
  /*useEffect(() => {
    if(isSignedIn){
      navigation.navigate('Root');
    }
    //code to check if signedIN
    //if true, SetSign in state to true
    //repeat if signed in navigate
    
  }, []);*/ 

  

  const onSignInPressed = async(data) => {
    
    
    const email = data.email;
    const password = data.password;
    let signIn = false ;
    console.log('attempting to sign in ...');

    
  await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    signIn = true;
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });    

    if(signIn){
      save('loggedIn','true');
      dispatch(setLogged());
     
    }
    
 

  }

  const onGoogleSignInPressed = (data) => {
    console.log(data)
    signInWithPopup(auth,provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setIsSignedIn(true);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  
  }

  

  return (
    <ImageBackground
        source={require('../../Assets/images/grangerpaper2.jpg')}
        resizeMode="cover"
        style={{flex:1}}
        >
      <ScrollView style={{flex:1,backgroundColor:'transparent'}}>
        
        {isSignedIn ? navigation.navigate('Root') : 
        <>
        <View style={{paddingTop:80,alignItems:'center'}}>
          <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Welcome to ML9!</Text>
        </View>

        <View style={{padding:10,alignItems:'center'}}>
          <Text style={{color:'#71758e'}}>Sign in to your account or Join us</Text>
        </View>

        <View style={{paddingTop:50,marginHorizontal:10}}>
    
              <CustomInput 
                name ={'email'}
                placeholder={'e-mail'}
                control={control}
                rules={{required: 'email required'}}  
                style={{paddingLeft:40}}
            />   
        
        
        </View>

        <View style={{paddingTop:10,marginHorizontal:10,}}>
                  <CustomInput 
                    name ={'password'}
                    placeholder={'Password'}
                    control={control}
                    style={{paddingLeft:40}}
                    rules={{required: 'Password required'}}
                    pass={true}
                />
        </View>

        <View style={{paddingTop:20,flexDirection:'row'}}>
          <View style={{flex:1}}>
          
          </View>
          <View style={{}}>
            <TouchableOpacity onPress={() => navigation.navigate('Root')}>
              <Text style={{color:'#8A8E96',}}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          
          
        </View>

        <View style={{paddingTop:80}}>
          <TouchableOpacity onPress={handleSubmit(onSignInPressed)}>
                <View style={{borderWidth:1,backgroundColor:'#5568FE',alignItems:'center',
              borderRadius:20, paddingVertical:20,marginHorizontal:10}}>
                  <Text style={{fontWeight:'bold',color:'white'}}>Sign In</Text>
                </View>
          </TouchableOpacity>
        </View>

        <View style={{paddingTop:10,}}>
        <TouchableOpacity onPress={() => navigation.navigate('Root')} >
          <View style={{borderWidth:1,backgroundColor:'white',alignItems:'center',
                borderRadius:20, paddingVertical:20,marginHorizontal:10}}>
              <View style={{flexDirection:'row',}}>
                  <View style={{}}>
                  <Image source={require('../../Assets/images/google.png')} 
                              style={{
                                  height: 26,
                                  width: 26,
                                  borderRadius:100,
                                
                              }}/>
                  </View>
                  <View style={{paddingLeft:10}}>
                    
                        <View >
                          <Text style={{fontWeight:'bold',color:'#000000'}}>Sign In With Google</Text>
                        </View>
                  
                  </View>

              </View>
                            
          </View>
        </TouchableOpacity>
        </View>
        
        <View style={{flexDirection:'row',paddingTop:20,paddingBottom:20,justifyContent:'center'}}>
        
        <View>
          <Text style={{color:'white'}}>Don't have an Account?</Text>
        </View>

        <View style={{paddingLeft:5}}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color:'#5568FE'}}>Sign Up</Text>
          </TouchableOpacity>
        </View> 
        
          
        </View>
        </>}


        
      </ScrollView>
    </ImageBackground>
  )
}

export default LoginScreen