import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Header extends Component{
    render(){
      return(
        <Text>Ini Adalah Header Class {this.props.person}</Text>
      )
    }
}

export default Header