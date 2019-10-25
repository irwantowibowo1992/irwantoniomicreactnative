## Function Component Dalam 1 File

Yang harus kita perhatikan adalah jika kita menuliskan function component ataupun class component tidak boleh dituliskan di dalam class component ataupun function component itu sendiri, jadi kita harus menuliskannya di luar class component ataupun function component inti. Misal class intinya adalah App maka penulisannya di luar class App.

## Class Header.js
```javascript
    // Membuat function component 
    const Footer = () => {
        var niomic = "@niomic"

        return(
            <View>
            <Text>Ini adalah Footer</Text>
            <Text>{niomic}</Text>
            </View>
        )
    }

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
```