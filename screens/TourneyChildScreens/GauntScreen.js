import { View, Text ,Image,TouchableOpacity,ScrollView,ImageBackground} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Squadbar from '../../components/tournie/squadbar'

const GauntScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor:'#181920',flex:1}}>
    
        <View style={{ }}>
            <Image source={require('../../Assets/images/GauntletBene.png')} resizeMode="cover" 
                style={{ height:240,width:'100%'}}/>     
        </View>
        
        <View style={{paddingTop:15}}/>

        <View style={{flexDirection:'row',
          borderRadius:10,marginHorizontal:70}}>
          <View style={{paddingTop:10,flex:1,paddingLeft:30}}>
              <Text style={{fontSize:20,color:'#C3C5C9',fontWeight:'bold'}}>Squad Rankings G7</Text>
          </View>
          <View style={{paddingRight:10,paddingTop:10}}>
            <TouchableOpacity>
                  <Image  source= { require('../../Assets/images/challonge2.png')}  
                          style={{
                                          height: 26,
                                          width: 25,
                                            
                                      }}
                                      
                  />
              </TouchableOpacity>
          </View>
        </View>
        
       
       <View style={{paddingTop:20}}>
            <Squadbar onPress={() => navigation.navigate('Player')}/>
       </View>
       
     
    
    </ScrollView>
  )
}

export default GauntScreen