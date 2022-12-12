import { View, Text ,ScrollView,Image,TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'
import {Building, Chart, Profile2User, UserOctagon} from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';

const EventsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor:'#181920',flex:1}} >
      <ImageBackground
      source={require('../../Assets/images/matpaper.jpg')}
      resizeMode="cover"
      style={{flex:1}}
      >
        <View style={{paddingTop:150}}/>
        <TouchableOpacity onPress={()=> navigation.navigate('Fantasy')}>
          <View style={{ flexDirection:'row',alignItems:'center',marginHorizontal:30,backgroundColor:'#252A34',opacity:0.95,borderRadius:40,paddingVertical:20}}>
            <View style={{paddingLeft:50}}>
              <Chart size="32" color="#553eb8"/>
            </View>
            <View style={{paddingLeft:30}}>
              <Text style={{color:'#6d7178',fontSize:16,fontWeight:'bold'}}>Fantasy League</Text>
            </View>
          </View>
        </TouchableOpacity>
        

        <View style={{paddingTop:20}}/>
        <TouchableOpacity onPress={()=> navigation.navigate('Tier')}>
          <View style={{ flexDirection:'row',alignItems:'center',marginHorizontal:30,backgroundColor:'#252A34',opacity:0.95,borderRadius:40,paddingVertical:20}}>
            <View style={{paddingLeft:50}}>
              <UserOctagon size="32" color="#553eb8"/>
            </View>
            <View style={{paddingLeft:30}}>
              <Text style={{color:'#6d7178',fontSize:16,fontWeight:'bold'}}>Tier Lists</Text>
            </View>
          </View>
        </TouchableOpacity>
        

        <View style={{paddingTop:20}}/>
        <TouchableOpacity onPress={()=> navigation.navigate('Guide')}>
          <View style={{ flexDirection:'row',alignItems:'center',marginHorizontal:30,backgroundColor:'#252A34',opacity:0.95,borderRadius:40,paddingVertical:20}}>
            <View style={{paddingLeft:50}}>
              <Building size="32" color="#553eb8"/>
            </View>
            <View style={{paddingLeft:30}}>
              <Text style={{color:'#6d7178',fontSize:16,fontWeight:'bold'}}>Hero Guides</Text>
            </View>
          </View>

        </TouchableOpacity>
        
        <View style={{paddingTop:20}}/>
        <TouchableOpacity onPress={()=> navigation.navigate('Comparison')}>
          <View style={{ flexDirection:'row',alignItems:'center',marginHorizontal:30,backgroundColor:'#252A34',opacity:0.95,borderRadius:40,paddingVertical:20}}>
            <View style={{paddingLeft:50}}>
              <Profile2User size="32" color="#553eb8"/>
            </View>
            <View style={{paddingLeft:30}}>
              <Text style={{color:'#6d7178',fontSize:16,fontWeight:'bold'}}>Player Comparisons</Text>
            </View>
          </View>
        </TouchableOpacity>
        





      </ImageBackground>
    </View>
  )
}

export default EventsScreen