import { View, Text } from 'react-native'
import React from 'react'

const downline = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <View style={{flex: 1, height: 3, backgroundColor: '#181920'}} />
    <View style={{flex: 1, height: 3, backgroundColor: '#20242d'}} />
    <View style={{flex: 1, height: 3, backgroundColor: '#252A34'}} /> 
    <View style={{width:10,height:10,borderRadius:10/2,backgroundColor:'#252A34' }} />
    <View style={{flex: 1, height: 3, backgroundColor: '#252A34'}} />
    <View style={{flex: 1, height: 3, backgroundColor: '#20242d'}} />
    <View style={{flex: 1, height: 3, backgroundColor: '#181920'}} />
  </View>
  )
}

export default downline