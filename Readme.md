## Props

Secara sederhananya props adalah kita akan mengirim parameter yang kemuadian akan bisa dipakai di component yang lain. Component ini bisa class component maupun function component

Untuk class Component contohnya adalah seperti berikut

## App.js
```javascript
    class App extends Component {
    render(){
        return(
        <View style = {styles.container}>
            <StatusBar backgroundColor = "blue" />

            {/* panggil class Header */}
            <Header person = "Props Irwanto Wibowo" />

            <Text>Hello React Native</Text>

            <Footer />
        </View>
        )
    }
    }
```

## Header.js
```javascript
    class Header extends Component{
        render(){
        return(
            <Text>Ini Adalah Header Class {this.props.person}</Text>
        )
        }
    }
```

Sedangkan untuk functional component contohnya adalah seperti berikut
## App.js
```javascript
    class App extends Component {
        render(){
            return(
            <View style = {styles.container}>
                <StatusBar backgroundColor = "blue" />

                {/* panggil class Header */}
                <Header person = "Props Irwanto Wibowo" />

                <Text>Hello React Native</Text>

                <Footer tahun = "2019" />
            </View>
            )
        }
    }
```

## Footer.js
```javascript
    // Membuat function component 
    Footer = (props) => {
        var niomic = "@niomic"
    
        return(
        <View>
            <Text>Ini adalah Footer Niomic</Text>
            <Text>
                {niomic} {props.tahun}
            </Text>
        </View>
        )
    }
```