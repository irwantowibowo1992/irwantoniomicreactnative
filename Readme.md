## Function Component Dengan File Terpisah

Untuk funtion component dengan file terpisah ini kita akan memindahkan function Footer ke dalam file Footer.js dan mengimportnya di App.js

## Footer.js
```javascript
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
```

## App.js
```javascript
    //import file Footer
    import Footer from './Footer'

    import styles from './style/Style'

    class App extends Component {
    render(){
        return(
        <View style = {styles.container}>
            <StatusBar backgroundColor = "blue" />

            {/* panggil class Header */}
            <Header />

            <Text>Hello React Native</Text>

            <Footer />
        </View>
        )
    }
    }


    export default App
```