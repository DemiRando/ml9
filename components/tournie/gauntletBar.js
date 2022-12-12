import { View, Text ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Downline from '../shapes/downline'
import { NotificationCircle } from 'iconsax-react-native';

const gauntletBar = ({onPress=null}) => {
  return (
    <View>
    <View style={{borderWidth:1,marginHorizontal:40,padding:20,borderBottomRightRadius:30,borderTopLeftRadius:30,
    borderColor:'#252A34',borderRadius:10 ,flexDirection:'row',backgroundColor:'#252A34'
    }}>
        <View style={{flex:1,paddingTop:0}}>
            <TouchableOpacity onPress={onPress}>
                <View style={{paddingTop:10}}>
                    <Text style={{color:'#C3C5C9',fontSize:18,paddingLeft:10}}>ML9ja Gauntlet 7</Text>
                </View>
                <View style={{flexDirection:'row',paddingLeft:10,paddingTop:20}}>
                                        <NotificationCircle size="24" color="#FF7324" variant="Bold"/>
                                        <Text style={{paddingLeft:5,paddingTop:4,fontSize:12, color:'#a6a6a6',fontWeight:'bold'}}>2022-09-21</Text>
                                    
                                    </View>
            </TouchableOpacity>
        </View>    
        
        
        <View style={{paddingTop:18}}>
            <TouchableOpacity>
                <Image source= { require('../../Assets/images/challonge2.png')}  
                                    style={{
                                        height: 44,
                                        width: 40,
                                        
                                    }}
                />
            </TouchableOpacity>
            
        </View>
      
    </View>
    <View style={{paddingTop:15,paddingBottom:15}}>
    <Downline/>
    </View>
  </View>
  )
}

export default gauntletBar