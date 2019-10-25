import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Header extends Component{
    // //menulikan state secara langsung
    // state = {
    //   address: "Gunungkidul",

    //   // mengambil variabel dari props
    //   age: this.props.old
    // }

    constructor(props){
      super(props);
      this.state = {
        age: this.props.old
      }
  
    }

    render(){
      return(
        // <Text>{this.props.person} {this.state.age} {this.state.address}</Text>
        <Text>{this.props.person} {this.state.age}</Text>
      )
    }
}

export default Header