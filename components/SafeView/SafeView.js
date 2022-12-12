import { View, Text,StyleSheet,Platform,StatusBar } from 'react-native'
import React from 'react'
import { back } from 'react-native/Libraries/Animated/Easing'



export default StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight:0,
        backgroundColor:'transparent',

    }
})
