import { View, Text ,ScrollView,Image,TouchableOpacity,SafeAreaView,Dimensions,ImageBackground} from 'react-native'
import React from 'react'
import SafeView from '../../components/SafeView/SafeView'

import { useNavigation } from '@react-navigation/native';
import {urlFor} from '../../sanity'


const ContentScreen = ({route}) => {
  const Navigation = useNavigation();

  const {  item} = route.params;
  
  const imageContent = item.imageContent ? item.imageContent : item.image;
  const imageCategory = urlFor(item.categoryImage).url()
  const imagery = 'https://reactnative.dev/img/tiny_logo.png'


  return (
    <ImageBackground
        source={null}
        resizeMode="cover"
        style={{flex:1}}
        >
      <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#25232B'}}>
        <SafeAreaView style={SafeView.container}>
          <View style={{marginLeft:20,marginRight:20,paddingBottom:20}}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#C3C5C9',paddingTop:10}}>
              {item.headline}</Text>
          </View>
          <View style={{flexDirection:'row',marginLeft:20}}>
            <View style={{paddingRight:15}}>
              <Image source={{uri: imageCategory}} 
                        style={{
                            height: 70,
                            width: 70,
                            borderRadius:100,
                           
                        }}/>
            </View>
            <View>
              <Text style={{fontSize:16,fontWeight:'bold',color:'#C3C5C9',paddingBottom:10,paddingTop:5}}>{item.category}</Text>
              <Text style={{fontSize:16,color:'#a6a6a6'}}>{item._createdAt.slice(0,10)}</Text>
            </View>
          </View>
          <View style={{paddingLeft:20,paddingRight:20,paddingTop:20}}>
             <Image source={{uri: urlFor(imageContent).url()}} 
                        style={{
                            height: Dimensions.get("window").height*0.5,
                            width: '100%',
                            borderRadius:18,   
              }}
                        resizeMode="cover"
              />
          </View>
          <View style={{paddingTop:20,paddingLeft:20,}}>
            <Text style={{fontSize:16,color:'#a6a6a6',lineHeight:32}}> {item.content} </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  
  )
}

export default ContentScreen