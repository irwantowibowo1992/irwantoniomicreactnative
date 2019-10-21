import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'

class Header extends Component{
  render(){
    return(
      <Text>Ini Adalah Header</Text>
    )
  }
}

class App extends Component {
  render(){
    return(
      <View>
        <StatusBar backgroundColor = "blue" />

        {/* panggil class Header */}
        <Header />

        <Text>Hello React Native</Text>
      </View>
    )
  }
}


export default App