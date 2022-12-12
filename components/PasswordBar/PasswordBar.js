import { View, Text ,TextInput,Image} from 'react-native'
import React from 'react'

const PasswordBar = () => {
  return (
    <View style={{ flexDirection:'row' , alignItems:'center'}}>

    <TextInput
      placeholder="Search your issues                                      "
      keyboardShouldPersistTaps
      placeholderTextColor={'#8A8E96'} color={'#8A8E96'} style={{backgroundColor:'#252A34',borderRadius:20,paddingVertical:20,paddingLeft:40}}
      onChangeText={text => this.props.chnageInputText(text.toLowerCase())}
    />
    <Image
      style={{height: 70,
        width: 70,
        borderRadius:100,}}
      source={require('../../Assets/images/ling.jpg')}
    />
  </View>
  )
}

export default PasswordBar