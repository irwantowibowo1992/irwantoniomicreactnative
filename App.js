import React, { Component } from 'react'
import { View, Text, StatusBar, Button, Alert } from 'react-native'

//import file Header
import Header from './Header'

//import file Footer
import Footer from './Footer'

import styles from './style/Style'

class App extends Component {

  // constructor() {
  //   super()

  //   this.state = {
  //     jumlah: 0
  //   }
  // }

  // handleTambah = () => {
  //   this.setState({
  //     jumlah: this.state.jumlah + 1
  //   })
  // }

  render(){
    return(
      // <View style = {styles.container}>
      //   <StatusBar backgroundColor = "blue" />

      //   {/* panggil class Header */}
      //   {/* <Header person = "Name : Alex" /> */}
      //   <Text style={styles.header}>Hello React Native</Text>
      //   <Header old = "Age : 25" />

      //   <Footer tahun = "2019" />

      //   <Button title="Button Tambah" onPress={this.handleTambah} />

      //   <Text style={styles.jumlah}>Jumlah : {this.state.jumlah}</Text>
      // </View>

      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Text style={{ flex: 1, backgroundColor: 'yellow', margin: 20, borderRadius: 25 }}>Halaman 1</Text>
        <Text style={{ flex: 2, backgroundColor: 'green' }}>Halaman 2</Text>
      </View>

    )
  }
}


export default App