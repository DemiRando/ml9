import { View, Text,TextInput,TouchableOpacity,ScrollView,ImageBackground } from 'react-native'
import React ,{useState} from 'react'

import { useNavigation } from '@react-navigation/native'

import { useForm, Controller } from 'react-hook-form'
import CustomInput from '../../components/CustomInput/CustomInput'
//import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";


import { auth,db } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc,doc, setDoc } from "firebase/firestore"; 
//import { collection, getDocs } from 'firebase/firestore/lite';






const SignupScreen = () => {
  const navigation = useNavigation();
  const {control,handleSubmit,watch} = useForm();
  const pwd = watch('password');
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [isSignedIn,setIsSignedIn] = useState(false);
  
  const onSignUpPressed = (data) => {
    const emailProp = data.email;
    const passwordProp = data.password;
   
    
    
    createUserWithEmailAndPassword(auth,emailProp, passwordProp)
      .then(async userCredentials => {
        const user = userCredentials.user;
        const uid = user.uid;
        
        setDoc(doc(db, "users", uid), {     
          username:data.username ,
          email:data.email ,
          phonenumber:data.phoneNumber ,
          admin:false,
        })

   
      })
      .catch(error => alert(error.message))
  
 
  }
  
  return (
    <View style={{flex:1,backgroundColor:'#181920'}}>
      <ImageBackground
        source={require('../../Assets/images/darkdorapaper.jpg')}
        resizeMode="cover"
        style={{flex:1}}
        >
          <ScrollView>
          <View style={{paddingTop:50,alignItems:'center'}}>
            <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Create new account</Text>
          </View>

          <View style={{padding:10,alignItems:'center'}}>
            <Text style={{color:'#71758e'}}>Fill the form below to register</Text>
          </View>

          <View style={{paddingTop:20,marginHorizontal:10}}>
          <CustomInput 
                name ={'username'}
                placeholder={'Username'}
                control={control}
                rules={{required: 'Username required'}}  
                style={{paddingLeft:40}}
            />
          </View>

          <View style={{paddingTop:10,marginHorizontal:10,}}>
          <CustomInput 
                name ={'email'}
                placeholder={'Email'}
                control={control}
                rules={{required: 'Email required',
                        pattern: {value: validRegex,message:'Invalid Email'}          
              }}  
                style={{paddingLeft:40}}
            /> 
          </View>

          <View style={{paddingTop:10,marginHorizontal:10,}}>
          <CustomInput 
                name ={'phoneNumber'}
                placeholder={'Phone Number'}
                control={control}
                rules={{required: 'Phonenumber required'}}  
                style={{paddingLeft:40}}
            /> 
          </View>

          <View style={{paddingTop:10,marginHorizontal:10,}}>
          <CustomInput 
                    name ={'password'}
                    placeholder={'Password'}
                    control={control}
                    style={{paddingLeft:40}}
                    rules={{required: 'Password required',minLength:{value:6,message:'Password should be 6 characters minimum'}}}
                    pass={true}
                />  
          </View>

          <View style={{paddingTop:10,marginHorizontal:10,}}>
          <CustomInput 
                    name ={'confirmPassword'}
                    placeholder={'Confirm Password'}
                    control={control}
                    style={{paddingLeft:40}}
                    rules={{required: 'Password required',
                            validate: value=> value === pwd || 'Password Mismatch'
                    }}    
                    pass={true}
                />
                </View>
          
          <View style={{paddingTop:50}}>
            <TouchableOpacity onPress={handleSubmit(onSignUpPressed)}>
                  <View style={{borderWidth:1,backgroundColor:'#5568FE',alignItems:'center',
                borderRadius:20, paddingVertical:20,marginHorizontal:10}}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Sign Up</Text>
                  </View>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',paddingTop:10,justifyContent:'center'}}>
          
            <View>
              <Text style={{color:'white'}}>Have an Account?</Text>
            </View>

            <View style={{paddingLeft:5,paddingBottom:20}}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{color:'#5568FE'}}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      
      
      
    </View>
  )
}

export default SignupScreen