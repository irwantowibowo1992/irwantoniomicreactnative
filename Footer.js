import React, { Component } from 'react'
import { View, Text } from 'react-native'

    // Membuat function component 
    Footer = (props) => {
        var niomic = "@niomic"
    
        return(
        <View>
            <Text>Ini adalah Footer Niomic</Text>
            <Text>
                {niomic} {props.tahun}
            </Text>
        </View>
        )
    }

export default Footer