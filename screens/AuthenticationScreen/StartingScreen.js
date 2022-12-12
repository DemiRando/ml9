import { View, Text ,TouchableOpacity,Image,Dimensions} from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

const StartingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor:'#25232B', flex:1,}} >  
      <View>
        <View style={{}}>
          <Image source={require('../../Assets/images/logo2.jpg')}
          style={{
            height: Dimensions.get("window").height,
            width: Dimensions.get("window").width

        }}
        />
        </View>
        <View style={{ }}>
          <View style={{bottom:160,alignItems:'center'}}>
            <Text style={{fontWeight:'bold',color:'#989898'}}>keep up with your favorite teams and events on</Text>
            <Text style={{fontWeight:'bold',color:'#989898'}}>our official platform. Be on point</Text>
            <Text style={{fontWeight:'bold',color:'#989898'}}>anywhere and anytime</Text>
          
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style={{bottom:140,borderWidth:3,borderColor:'#215139',backgroundColor:'#f5f5f5' ,
            paddingVertical:12,alignItems:'center',
            marginHorizontal:10,borderRadius:1}}>
              <Text style={{fontWeight:'bold',color:'#000000'}}>Get Started</Text>
            </View>
            
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default StartingScreen