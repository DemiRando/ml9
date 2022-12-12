import { View, Text,TouchableOpacity } from 'react-native'
import React,{useState,useEffect,useReducer} from 'react'
import SanityClient from '../../sanity'
import StatSort from '../../components/Tier/StatSort';
import { auth } from '../../firebase';
import { getAuth, signOut } from "firebase/auth";
import save from '../../components/SecureStore/save';
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';
import {setLogOut,setLogged} from '../../components/Slices/LogSlice';








const AdminScreen = () => {
  const dispatch = useDispatch();

  const [playerRefs,setPlayerRef] = useState([]);
  const [playerIds,setPlayerId] = useState([]);
  
  useEffect(() => {
    
    SanityClient.fetch(
      `*[_type == "squadsG7" ].players[]._ref`
    ).then((data) =>{ 
      setPlayerRef(data)
    });
    SanityClient.fetch(
      `*[_type == "squadsG7" ].players[]->id`
    ).then((data) =>{ 
      setPlayerId(data)
    });
    
  }, []);
  
  const press2 = async() =>{
    
    let sOut = false;
    //StatSort(playerRefs,playerIds);
   //console.log(StatSort(playerRefs,playerIds))
   await signOut(auth).then(() => {
    // Sign-out successful.
    sOut = true;
  }).catch((error) => {
    // An error happened.
    console.log('error')
  });

  if(sOut){
    await save('loggedIn','false');
    dispatch(setLogOut());
    console.log('done')
  }

  }

  const press = () => {
    
   

  if(playerRefs.length>0){
    console.log(playerRefs);
   }
  else{
    console.log('Error')
   }
  
   if(playerIds.length>0){
    console.log(playerIds);
   }else{
    console.log('Error')
   }

   }
  return (
    <View style={{backgroundColor:'#181920',flex:1,}}>
     
      <View style={{paddingTop:260}}/>
      <TouchableOpacity onPress={press}>
        <View style={{backgroundColor:'gray',marginHorizontal:90,padding:20,borderRadius:20,
        alignSelf:'center',
      }}>
        
            <View>
              <Text >Grade</Text>
            </View>         
        </View>
      </TouchableOpacity>
     
      <View style={{paddingTop:20}}/>
      <TouchableOpacity onPress={press2}>
        <View style={{backgroundColor:'gray',marginHorizontal:90,padding:20,borderRadius:20,
        alignSelf:'center',
      }}>
        
            <View>
              <Text >Test</Text>
            </View>         
        </View>
      </TouchableOpacity>


    </View>
  )
}

export default AdminScreen