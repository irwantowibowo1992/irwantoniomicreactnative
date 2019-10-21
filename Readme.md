## Class component dalam file terpisah

untuk implementasi class component dalam file terpisah, kita hanya perlu meng-import file/class pada class utama kita (App)

## Class Header.js
```javascript
    import React, { Component } from 'react'
    import { View, Text } from 'react-native'

    class Header extends Component{
        render(){
        return(
            <Text>Ini Adalah Header Class</Text>
        )
        }
    }

    export default Header
```

## Class App.js
```javascript
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
```

## Style.js
```javascript
    import { StyleSheet } from 'react-native'

    export default StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
```

pada kode App.js di atas diimport juga file Style.js yang ada di folder style, tujuannya adalah untuk memisahkan kode utama dan kode styling-nya.
Jadi kodenya akan terlihat lebih bersih dan rapi