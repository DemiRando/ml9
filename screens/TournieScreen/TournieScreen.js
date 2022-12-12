import { View, Text,ImageBackground ,ScrollView} from 'react-native'
import React from 'react'
import Downline from '../../components/shapes/downline'
import GauntletBar from '../../components/tournie/gauntletBar'
import { useNavigation } from '@react-navigation/native';

const TournieScreen = () => {
  const navigation = useNavigation();
 
  return (
    
    <ScrollView style={{backgroundColor:'#181920',flex:1}}>

      <View style={{paddingBottom:10}}>
        <View style={{paddingBottom:0, }}>
           <ImageBackground source={require('../../Assets/images/GauntletBene.png')} resizeMode="cover" 
           style={{ flex: 1,justifyContent: "center",height:240}}/>     
           <View style={{paddingBottom:10,alignItems:'center'}}>
            <Text style={{bottom:10,position:'absolute',color:'#C3C5C9',fontSize:45,fontWeight:'bold'}}></Text>
          </View>
        </View>

        
         
        <View style={{backgroundColor:'#181920',marginHorizontal:0}}>
          <View style={{paddingBottom:10,paddingTop:5}}>
            <Downline/>
          </View>

          <View style={{paddingBottom:10,alignItems:'center'}}>
            <Text style={{color:'#353c4b',fontSize:25}}>All Tournaments Thus Far</Text>
          </View>

          <View style={{paddingBottom:30}}>
            <Downline/>
          </View>

        </View>
        <View>
          <GauntletBar onPress={() => navigation.navigate('Gaunt')}/>
        </View>
        <View>
          <GauntletBar/>
        </View>
        <View>
          <GauntletBar/>
        </View>
        <View>
          <GauntletBar/>
        </View>
        <View>
          <GauntletBar/>
        </View>
      </View>
     
      
      
      








    </ScrollView>
  )
}

export default TournieScreen