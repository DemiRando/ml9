import { View, Text,ImageBackground,ScrollView } from 'react-native'
import React from 'react'
import Dropdown from '../../components/Dropdown/Dropdown'

const TierListScreen = () => {
  return (
    
    <View style={{flex:1,opacity:1}}>
      <ImageBackground
      source={require('../../Assets/images/logopaq.png')}
      resizeMode="cover"
      style={{flex:1,}}
    >
      <View style={{flexDirection:'row',paddingTop:40,}}>
          
          <View style={{paddingRight:10,paddingLeft:40}}>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:18,}}>Gauntlet</Text>
            </View>
            <View>
              <Dropdown/>
            </View>
            
          </View>

          <View>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:18,}}>Role</Text>
            </View>
            <View>
              <Dropdown/>
            </View>
            
          </View>
        </View>

        <ScrollView>
          <View style={{paddingTop:20,alignSelf:'center'}}>
            <Text style={{fontSize:35,fontWeight:'bold'}}> S Tier</Text>
          </View>
          <View style={{paddingTop:10}}>
            <Text style={{fontSize:18,fontWeight:'400'}}>{`1	Afghanistan	38,928,346	652,860	60

2	Albania	2,877,797	27,400	105

3	Algeria	43,851,044	2,381,740	18

4	Andorra	77,265	470	164

5	Angola	32,866,272	1,246,700	26`}
</Text>
          </View>


        </ScrollView>
                

      </ImageBackground>
    </View>
      
    
  )
}

export default TierListScreen