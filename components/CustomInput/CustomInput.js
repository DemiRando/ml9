import { View, Text ,TextInput} from 'react-native'
import React,{useState} from 'react'
import { Controller } from 'react-hook-form'
import {Eye,EyeSlash} from 'iconsax-react-native'

const CustomInput = ({placeholder,control,name,rules,secureTextEntry=false,style,pass=false}) => {
  const [passBool,setPassBool] = useState(true);
  
  const eyePress = () =>{
    if (passBool == true){
      setPassBool(false)
    }
    if (passBool == false){
      setPassBool(true)
    }
  }
 
 
  return (
    <View>
        <Controller 
            defaultValue = {''}
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur},fieldState:{error}}) => (
              <>
              <View style={{flexDirection:'row',backgroundColor:'#252A34',borderRadius:20,paddingVertical:20,borderWidth:1,borderColor:error ? '#5568FE':null}}>
                <View style={{flex:1}}>
                    <TextInput 
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        placeholderTextColor={'#8A8E96'}
                        color={'white'} 
                        style={style}
                        secureTextEntry={pass ? passBool : false}
                        />
                </View>
                {pass && <View style={{paddingRight:50}}>
                { passBool ? <EyeSlash size="26" color="#8A8E96" onPress={eyePress} style={{paddingRight:30}} /> : <Eye onPress={eyePress} size="26" color="#8A8E96" style={{paddingRight:30}}   />}
            </View>}
                  
               
                
              </View>
                 
              
            { error && (
              <Text style={{color:'#5568FE',alignSelf:'stretch',paddingStart:15,}}>{error.message || 'Error'}</Text>
            )}
            </>

            )}
        />
       
    </View>
  )
}

export default CustomInput