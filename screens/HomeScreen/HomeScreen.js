import { View, Text,StyleSheet, ScrollView,FlatList,ImageBackground} from 'react-native'
import React,{useEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import NewsFeed from '../../components/NewsFeed'
import Ling from '../../components/Xfeed/Lingfeed'
import Granger from '../../components/Xfeed/Grangerfeed'
import Lunox from '../../components/Xfeed/Lunoxfeed'
import Guin from '../../components/Xfeed/Guinfeed'
import SanityClient from '../../sanity'
import * as Progress from 'react-native-progress';


const HomeScreen = () => {
  
  const [stories,setStory] = useState([]);
  //console.log()
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    
    SanityClient.fetch(
      `
      *[_type == 'news']
    {_id,_createdAt,content,headline,
    image,imageContent,
    "category":type ->title,
    "categoryImage":type ->image}
      `
    ).then((data) =>{ 
      setStory(data)
    });

   setIsLoading(false) ;
    
  }, []);

 
  const navigation = useNavigation();
  
  return (
  <View style={{backgroundColor:'#181920',flex:1} }>
    <ImageBackground
      source={require('../../Assets/images/darkdorapaper.jpg')}
      resizeMode="cover"
      style={{flex:1}}
      >
         { isLoading ? 
         <View style={{alignItems:'center',paddingTop:50}}>
          <Progress.CircleSnail indeterminate={true}  size={90} color={['#553EB8','#923EB8','#3E64B8']}  />
         </View>
          
         :  <FlatList
            ListHeaderComponent={
            <>
             <View style={{backgroundColor:'#252A34',opacity:0.95, paddingBottom:0,paddingTop:20}}>
                <ScrollView horizontal={true} keyboardShouldPersistTaps='always' showsHorizontalScrollIndicator={false} style={styles.container}>
                  <Ling onPress={() => navigation.navigate('MLNews')}/>
                  <Granger onPress={() => navigation.navigate('GauntletNews')}/>
                  <Lunox onPress={() => navigation.navigate('FantsayNews')}/>
                  <Guin onPress={() => navigation.navigate('GistNews')}/>
                </ScrollView>
              </View>

   
              <View>
                <Text style={{color:'#C3C5C9',fontSize:18,fontWeight:'bold',paddingBottom:10,paddingLeft:30,paddingTop:20}}>Latest News</Text>
              </View>
            </>}
            data={stories}
            renderItem={({item}) =>  <NewsFeed onPress={() => navigation.navigate('Content',{item})}
                  
            image={item.image}  headline={item.headline} date={item._createdAt.slice(0,10)} category={item.category}/> }
            />
            
            
          }
            
      
   
            </ImageBackground>
    
  </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
  height:250,
  },
  text:{}
})

export default HomeScreen