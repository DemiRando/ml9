import { View, Text, TouchableOpacity ,Image,ScrollView,FlatList} from 'react-native'
import React,{useEffect,useState} from 'react'

import { Back} from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import NewsFeed from '../../components/NewsFeed';
import SanityClient from '../../sanity';
import * as Progress from 'react-native-progress';

const GauntletScreen = () => {
  const navigation = useNavigation();
  const [stories,setStory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    
    SanityClient.fetch(
      `
      *[_type == 'news' && type ->title =='Gauntlet']
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

    
    return (
      <View style={{backgroundColor:'#181920', flex:1}} >
       
            <View style={{backgroundColor:'#252A34',borderRadius:40 ,paddingBottom:10,paddingTop:10}}>
                
                <View>
                  <Image source={  require('../../Assets/images/granger.jpg')}
                                            style={{
                                                height: 180,
                                                width: '100%',
                                                borderRadius:10,
                                                
                                            }}
                                        />
                </View>
                <View style={{position:'absolute',top:20}}>
                  <TouchableOpacity onPress={navigation.goBack}>
                      <Back
                      variant="Outline" 
                      size={30}  
                      style={{
                        color:"#25232B" ,
                        }}
                      />
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center',paddingTop:10}}>
                  <Text style={{color:'#C3C5C9',fontSize:18,fontWeight:'bold'}}>ML9 Gauntlet </Text>
                </View>
                
            
            </View>
  
            { isLoading ? 
         <View style={{alignItems:'center',paddingTop:50}}>
          <Progress.CircleSnail indeterminate={true}  size={90} color={['#553EB8','#923EB8','#3E64B8']}  />
         </View>
          
         :
            <View style={{paddingTop:30,}}>
            <FlatList
                data={stories}
                renderItem={({item}) =>  <NewsFeed onPress={() => navigation.navigate('Content',{item})}
                      
                image={item.image}  headline={item.headline} date={item._createdAt.slice(0,10)} category={item.category}/> }
                />
            </View>
}  
        
        
      </View>
    )
}

export default GauntletScreen