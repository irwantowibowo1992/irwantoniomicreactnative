## Class component dalam satu file

kita bisa membuat class componen dalam satu file di, misalnya kita membuat class Header di dalam class class utama yaitu App

```javascript
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
```

pada kode di atas terlihat bahwa class Header didefinisakan di dalam class App, dan cara memanggilnya adalah dengan memanggil nama class nya di class utama yaitu App