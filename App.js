import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'

class App extends Component {
  render(){
    return(
      <View>
        <StatusBar backgroundColor = "blue" />
        <Text>Hello React Native</Text>
      </View>
    )
  }
}


export default App