import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Grangerfeed = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={{paddingLeft:30,width:300}}>
                <View >
                    <Image source={  require('../../Assets/images/granger.jpg')}
                                    style={{
                                        height: 180,
                                        width: 250,
                                        borderRadius:20,
                                    }}
                                />
                            
                </View>
                <View style={{paddingRight:30,paddingTop:10,paddingLeft:5}}>
                    <Text style={{fontWeight:'bold',color:'#C3C5C9'}}>All Things Gauntlet and Events </Text>
                    <Text style={{fontWeight:'bold',fontSize:10,paddingTop:5,color:'#a6a6a6'}}>ML9 Gauntlet</Text>
                </View>

                
                
        </View>
    </TouchableOpacity>

  )
}

export default Grangerfeed