import { View, Text ,Image,TouchableOpacity,} from 'react-native'
import React,{useState} from 'react'
import { ArrowCircleUp,ArrowCircleDown} from 'iconsax-react-native';

const squadbar = ({onPress=null}) => {
  const [isExpanded,setExpand] = useState(false);
  const onDrop = () =>{
    isExpanded ? setExpand(false) : setExpand(true)
  }
  return (
    <View style={{paddingBottom:20}}>
      {
        isExpanded ? 
        <View>
          <View style={{borderWidth:1,borderColor:'#252A34',backgroundColor:'#252A34',borderRadius:20,
                              padding:10,marginHorizontal:10,
                  }}>

            <View style={{flexDirection:'row'}}>
              <View style={{paddingLeft:10}}>
                <Image source= {require('../../Assets/images/ncz.jpg') } 
                                
                                style={{
                                  height: 70,
                                  width:70,
                                  borderRadius:60,
                                      
                                    }}/>
              </View>
              <View style={{paddingLeft:20,paddingTop:5 ,flex:1}}>
                      <Text style={{color:'#C3C5C9',fontSize:24,}}>NC Zone</Text>
                      <Text style={{color:'#6d7178'}}>{'Rank 1' + '  |  ' + '8'+' Members'}</Text>    
              </View>
              <View style={{paddingRight:10,alignSelf:'center'}}>
                <TouchableOpacity onPress={onDrop}>
                  <ArrowCircleUp
                          size="32"
                          color="#553eb8"
                          variant="Broken"
                          />
                </TouchableOpacity>
                      
              </View>
                    
            </View>
            <TouchableOpacity onPress={onPress}>
              <View style={{paddingTop:10}}>
                
                <View style={{flexDirection:'row',marginHorizontal:15}}>
                  <View style={{paddingLeft:5,alignSelf:'center',flex:1}}>
                    <Text style={{color:'#797979',fontSize:18,}}>Ojiz</Text>
                  </View>
                  <View style={{flex:1}}>
                    <Image source= { require('../../Assets/images/midlane.png')}  
                              style={{
                                              height: 60,
                                              width: 55,
                                                  
                                          }} />
                  </View>
                  <View style={{paddingLeft:10,paddingRight:20,alignSelf:'center',}}>
                    <Text style={{color:'#797979',fontSize:23,fontWeight:'bold'}}>B</Text>  
                  </View>
                  
                  
                  
                </View>
              </View>    
            </TouchableOpacity>                        
            <TouchableOpacity onPress={onPress}>
              <View style={{paddingTop:10}}>
                <View style={{flexDirection:'row',marginHorizontal:15}}>
                  <View style={{paddingLeft:5,alignSelf:'center',flex:1}}>
                    <Text style={{color:'#797979',fontSize:18,}}>Habinger</Text>
                  </View>
                
                  <View style={{flex:1}}>
                    <Image source= { require('../../Assets/images/jungle.png')}  
                              style={{
                                              height: 60,
                                              width: 55,
                                                  
                                          }} />
                  </View>

                  <View style={{paddingLeft:10,paddingRight:20,alignSelf:'center',}}>
                    <Text style={{color:'#797979',fontSize:23,fontWeight:'bold'}}>S</Text>  
                  </View>
                  
                  
                </View>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={onPress}>
              <View style={{paddingTop:10}}>
                <View style={{flexDirection:'row',marginHorizontal:15}}>
                  <View style={{paddingLeft:5,alignSelf:'center',flex:1}}>
                    <Text style={{color:'#797979',fontSize:18,}}>Ilios</Text>
                  </View>
                  
                  <View style={{flex:1}}>
                    <Image source= { require('../../Assets/images/explane.png')}  
                              style={{
                                              height: 60,
                                              width: 55,
                                                  
                                          }} />
                  </View>

                  <View style={{paddingLeft:10,paddingRight:20,alignSelf:'center',}}>
                    <Text style={{color:'#797979',fontSize:23,fontWeight:'bold'}}>A</Text>  
                  </View>                         
                  
                  
                  
                </View>
              </View>
            </TouchableOpacity>
            
            <View style={{paddingTop:10}}>
              <View style={{flexDirection:'row',marginHorizontal:15}}>
                <View style={{paddingLeft:5,alignSelf:'center',flex:1}}>
                  <Text style={{color:'#797979',fontSize:18,}}>Raiden</Text>
                </View>
                
                <View style={{flex:1}}>
                  <Image source= { require('../../Assets/images/roam.png')}  
                            style={{
                                            height: 60,
                                            width: 55,
                                                
                                        }} />
                </View>

                <View style={{paddingLeft:10,paddingRight:20,alignSelf:'center',}}>
                  <Text style={{color:'#797979',fontSize:23,fontWeight:'bold'}}>A</Text>  
                </View>
                
                
              </View>
            </View>
            <View style={{paddingTop:10}}>
              <View style={{flexDirection:'row',marginHorizontal:15}}>
                <View style={{paddingLeft:5,alignSelf:'center',flex:1}}>
                  <Text style={{color:'#797979',fontSize:18,}}>Rendu</Text>
                </View>
                
                <View style={{flex:1}}>
                  <Image source= { require('../../Assets/images/goldlane.png')}  
                            style={{
                                            height: 60,
                                            width: 55,
                                                
                                        }} />
                </View>

                <View style={{paddingLeft:10,paddingRight:20,alignSelf:'center',}}>
                  <Text style={{color:'#797979',fontSize:23,fontWeight:'bold'}}>S</Text>  
                </View>
                
                
              </View>
            </View>
                                      
          </View>
        </View>  
        
        :

        <View style={{borderWidth:1,borderColor:'#252A34',backgroundColor:'#252A34',borderRadius:20,
    padding:10,marginHorizontal:10
    }}>

        <View style={{flexDirection:'row'}}>
          <View style={{paddingLeft:10}}>
            <Image source= {require('../../Assets/images/ncz.jpg') } 
                          
                          style={{
                              height: 70,
                              width:70,
                              borderRadius:60,
                            
                          }}/>
          </View>
          <View style={{paddingLeft:20,paddingTop:5 ,flex:1}}>
            <Text style={{color:'#C3C5C9',fontSize:24,}}>NC Zone</Text>
            <Text style={{color:'#6d7178'}}>{'Rank 1' + '  |  ' + '8'+' Members'}</Text>    
          </View>
          <View style={{paddingRight:10,alignSelf:'center'}}>
            <TouchableOpacity onPress={onDrop}>
              <ArrowCircleDown
                size="32"
                color="#553eb8"
                variant="Broken"
                />
            </TouchableOpacity>
            
          </View>
          
        </View>
        
        
      </View>
      }
      
    </View>
  )
}

export default squadbar