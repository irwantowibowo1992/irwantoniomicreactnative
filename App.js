import React, { Component } from 'react'
import { View, Text, StatusBar, Button, Alert } from 'react-native'

//import file Header
import Header from './Header'

//import file Footer
import Footer from './Footer'

import styles from './style/Style'

class App extends Component {

  constructor() {
    super()

    this.state = {
      jumlah: 0
    }
  }

  handleTambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1
    })
  }

  render(){
    return(
      <View style = {styles.container}>
        <StatusBar backgroundColor = "blue" />

        {/* panggil class Header */}
        {/* <Header person = "Name : Alex" /> */}
        <Header old = "Age : 25" />

        <Text>Hello React Native</Text>

        <Footer tahun = "2019" />

        <Button title="Button Tambah" onPress={this.handleTambah} />

        <Text>Jumlah : {this.state.jumlah}</Text>
      </View>
    )
  }
}


export default App