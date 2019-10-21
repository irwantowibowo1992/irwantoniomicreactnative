import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'

//import file Header
import Header from './Header'

import styles from './style/Style'

class App extends Component {
  render(){
    return(
      <View style = {styles.container}>
        <StatusBar backgroundColor = "blue" />

        {/* panggil class Header */}
        <Header />

        <Text>Hello React Native</Text>
      </View>
    )
  }
}


export default App