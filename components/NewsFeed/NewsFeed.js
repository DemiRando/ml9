import { View, Text ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { NotificationCircle } from 'iconsax-react-native';
import {urlFor} from '../../sanity'

 

const NewsFeed = ({onPress,image,headline,date,category,content}) => {
    

  return (
   <TouchableOpacity onPress={onPress} >
        <View style={{paddingBottom:20,paddingLeft:20,paddingRight:20}}>
                
                
                
                <View style={{flexDirection:'row',backgroundColor:'#252A34',opacity:0.95,paddingBottom:20,borderWidth:1,borderRadius:20,borderColor:'#282B33'}}>
                    
                    <View style={{flex:1,paddingTop:30,}}>
                        <View style={{paddingLeft:10,flexDirection:'row',paddingBottom:10}}>
                            <View style={{borderColor:'#5a6072',backgroundColor:'#5a6072',borderWidth:1,borderRadius:30,paddingTop:5,paddingBottom:5,paddingLeft:15,paddingRight:15}}>
                                <Text style={{fontSize:10,color:'black',fontWeight:'bold'}}>{category}</Text> 
                        
                            </View>
                            
                        </View>
                        <View style={{paddingLeft:10}}>
                            <Text style={{fontSize:14,fontWeight:'bold',paddingLeft:10,color:'#C3C5C9',paddingRight:10}}>{headline}</Text> 
                        
                        </View>
                        <View style={{position:'absolute',bottom:0,flexDirection:'row',paddingLeft:15,paddingTop:10}}>
                            <NotificationCircle size="24" color="#553EB8" variant="Bold"/>
                            <Text style={{paddingLeft:5,paddingTop:4,fontSize:12, color:'#a6a6a6',fontWeight:'bold'}}>{date}</Text>
                        
                        </View>            
                    </View>          
                   <View style={{paddingTop:15,paddingRight:20}}>
                   <Image source= {{uri: urlFor(image).url()} } 
                        style={{
                            height: 130,
                            width: 130,
                            borderRadius:30,
                           
                        }}
                    />
                   </View>
                    
                </View>
                    
        </View>
  
   </TouchableOpacity>
  )
}

export default NewsFeed