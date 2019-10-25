import React, { Component } from 'react'
import { View, Text } from 'react-native'

    // Membuat function component 
    Footer = () => {
        var niomic = "@niomic"
    
        return(
        <View>
            <Text>Ini adalah Footer Niomic</Text>
            <Text>{niomic}</Text>
        </View>
        )
    }

export default Footer