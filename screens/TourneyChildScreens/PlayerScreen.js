import { View, Text ,ScrollView,Image,TouchableOpacity,StatusBar,ImageBackground} from 'react-native'
import React from 'react'
import { Edit ,Whatsapp,MonitorMobbile,ArrowCircleDown,ArrowCircleUp} from 'iconsax-react-native';
import StatsPolygon from '../../components/shapes/StatsPolygon';


const PlayerScreen = () => {
  const squad = 'NC Zone'
  const characterData = [
    {KDA: 10, Push: 10, Damage: 10, Farm: 10, Teamfight: 10, Survival: 10},
    {KDA: 8, Push: 3, Damage: 8, Farm: 6, Teamfight: 9, Survival: 7},
  ];
// <StatsPolygon cData={characterData}/>
  
  return (
    <ImageBackground
      source={require('../../Assets/images/matpaper.jpg')}
      resizeMode="cover"
      style={{flex:1}}
      >
      <ScrollView style={{flex:1,backgroundColor:'transparent',}}>
        <View style={{paddingTop:20}}/>
        
        
        <View style={{paddingBottom:0,alignSelf:'center'}}>
          <Text style={{color:'#6d7178',fontSize:20,fontWeight:'bold'}}>{'Tier & Statistics'}</Text>
        </View>

        <View style={{ marginHorizontal:30,backgroundColor:'#252A34',borderRadius:40,paddingVertical:20}}>
          <View style={{alignItems:'center',paddingBottom:0}}>
            <Image source={require('../../Assets/images/cecil.jpg')} resizeMode="contain" 
                style={{  
                  height: 150,
                  width: 150,
                  borderRadius:90,
                }}/> 
                
          </View>

          <View style={{alignItems:'center'}}>
            <View style={{paddingBottom:10}} >
              <Text style={{color:'#C3C5C9',fontSize:20,fontWeight:'bold'}}>Ojiz</Text>
            </View>

            
            <View style={{paddingBottom:10,flexDirection:'row'}} >
              <View style={{paddingRight:40}}>
                <Image source= {require('../../Assets/images/ncz.jpg') } 
                                    
                                    style={{
                                      height: 60,
                                      width:55,
                                      borderRadius:20,
                                          
                                        }}/>
              </View>
              <View>
                <Image source= {require('../../Assets/images/midlane.png') } 
                                    
                                    style={{
                                      height: 60,
                                      width:55,
                                      borderRadius:60,
                                          
                                        }}/>
              </View>
            </View>
            
          </View>

          <View style={{borderWidth:1,marginHorizontal:20,
          padding:30,borderRadius:20,borderColor:'#181920',backgroundColor:'#181920',
          }}>
            <View style={{flexDirection:'row'}}>
              <View style={{alignItems:'center'}}>
                <Text style={{color:'#6d7178'}}>Gauntlet</Text>
                <Text style={{color:'#C3C5C9',fontSize:20,fontWeight:'bold'}}>7</Text>
              </View>
              
              <View style={{alignItems:'center',paddingLeft:60}}>
                <Text style={{color:'#6d7178'}}>Tier</Text>
                <Text style={{color:'#C3C5C9',fontSize:20,fontWeight:'bold'}}>S</Text>
              </View>

              <View style={{alignItems:'center',paddingLeft:45}}>
                <Text style={{color:'#6d7178'}}>Appearances</Text>
                <Text style={{color:'#C3C5C9',fontSize:20,fontWeight:'bold'}}>8</Text>
              </View>  
            </View>
            <View style={{paddingTop:0,alignSelf:'center',paddingLeft:10}}>
              <StatsPolygon cData={characterData}/>
            </View>
          </View>
          <View style={{alignSelf:'center',flexDirection:'row',paddingTop:10}}>
            <View style={{paddingRight:5}}>
              <Text style={{color:'#6d7178'}}>View</Text>
            </View>
            <View>
              <ArrowCircleUp
                              size="22"
                              color="#553eb8"
                              variant="Broken"
                              />  
            </View>
            
            
          </View>
          
        </View>
        
        <View style={{paddingTop:10}}/>
        





      </ScrollView>
    </ImageBackground>
  )
}



export default PlayerScreen