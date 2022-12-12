import { View, Text ,ScrollView,Image,TouchableOpacity,StatusBar,ImageBackground} from 'react-native'
import React from 'react'
import { Edit ,Whatsapp,MonitorMobbile,Logout} from 'iconsax-react-native';
import { useDispatch } from 'react-redux';
import {setLogOut,setLogged} from '../../components/Slices/LogSlice';
import {  signOut } from "firebase/auth";
import { auth } from '../../firebase';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const squad = 'NC Zone'
  const logOut =  async() =>{
    
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
    
    dispatch(setLogOut());
    
  }

  }
  return (
    <View style={{backgroundColor:'#181920',flex:1,}}>
      <ImageBackground
      source={require('../../Assets/images/matpaper.jpg')}
      resizeMode="cover"
      style={{flex:1}}
      >
      <View style={{paddingTop:30}}/>
      
      <View style={{paddingBottom:60,flexDirection:'row',paddingRight:15}}>
        <View style={{flex:1}}/>
        <TouchableOpacity onPress={logOut}>
        <Logout size="32" color="#553eb8" />
        </TouchableOpacity>
      </View>
      

      <View style={{ marginHorizontal:30,backgroundColor:'#252A34',opacity:0.95,borderRadius:40,paddingVertical:20}}>
        <View style={{flexDirection:'row',paddingRight:15}}>
            <View style={{flex:1}}/>
            <TouchableOpacity>
              <Edit size="32" color="#553eb8" variant="TwoTone"/>
            </TouchableOpacity>
          </View>
          


        <View style={{alignItems:'center',paddingBottom:10}}>
          <Image source={require('../../Assets/images/masha.jpg')} resizeMode="contain" 
              style={{  
                height: 150,
                width: 150,
                borderRadius:90,
              }}/> 
              
        </View>

        <View style={{alignItems:'center'}}>
          <View style={{paddingBottom:5}} >
            <Text style={{color:'#C3C5C9',fontSize:20,fontWeight:'bold'}}>Rendu</Text>
          </View>

          <View style={{flexDirection:'row',marginLeft:60,marginRight:40,paddingBottom:5}}>
            <View style={{flexDirection:'row',flex:1,}}>
              <MonitorMobbile size="22" color="#553eb8"/>
              <Text style={{color:'#6d7178',fontSize:16,fontWeight:'bold'}}>   550284598</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Whatsapp size="22" color="#553eb8" />
              <Text style={{color:'#6d7178',fontSize:16,fontWeight:'bold'}}> 08183883164</Text>
            </View>
          </View>
          
          <View style={{paddingBottom:10}} >
            <Text style={{color:'#6d7178',fontSize:16,fontWeight:'bold'}}>Squad: {squad}</Text>
          </View>
          
        </View>

        <View style={{borderWidth:1,marginHorizontal:20,
        padding:30,borderRadius:20,borderColor:'#181920',backgroundColor:'#181920',
        flexDirection:'row' }}>

          <View style={{alignItems:'center'}}>
            <Text style={{color:'#6d7178'}}>Likes</Text>
            <Text style={{color:'#C3C5C9',fontSize:20,fontWeight:'bold'}}>60</Text>
          </View>
          
          <View style={{alignItems:'center',paddingLeft:80}}>
            <Text style={{color:'#6d7178'}}>Tier</Text>
            <Text style={{color:'#C3C5C9',fontSize:20,fontWeight:'bold'}}>S</Text>
          </View>

          <View style={{alignItems:'center',paddingLeft:70}}>
            <Text style={{color:'#6d7178'}}>Posts</Text>
            <Text style={{color:'#C3C5C9',fontSize:20,fontWeight:'bold'}}>20</Text>
          </View>


        </View>

        
         
          

        

      </View>
      </ImageBackground>
    </View>
    
      )
}

export default ProfileScreen