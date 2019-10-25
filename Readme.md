## State dan Props

State adalah variabel default yang dimiliki oleh suatu component yang nilainya dapat diubah ubah, berbeda dengan props yang nilainya tidak bisa diubah. Nilai pada state harus didefinisikan terlebih dahulu pada suatu component. Untuk menggunakan state kita harus menuliskannya di dalam class component. Terdapat 2 car dalam menuliskan state yaitu menulikannya secara langsung di dalam class component dan menuliskannya di dalam constructor.

## Untuk penulisan state secara langsung bisa dilihat seperti ini
### App.js
```javascript
    class App extends Component {
        render(){
            return(
            <View style = {styles.container}>
                <StatusBar backgroundColor = "blue" />

                {/* panggil class Header */}
                <Header person = "Name : Alex" />
                <Header old = "Age : 20" />

                <Text>Hello React Native</Text>

                <Footer tahun = "2019" />
            </View>
            )
        }
    }
```

### Header.js
```javascript
    class Header extends Component{
        //menulikan state secara langsung
        state = {
        address: "Gunungkidul",

        // mengambil variabel dari props
        age: this.props.old
        }

        render(){
        return(
            <Text>{this.props.person} {this.state.age} {this.state.address}</Text>
        )
        }
    }
```

## cara yang kedua adalah dengan melalui constructor

## App.js
```javascript
    constructor(props){
      super(props);
      this.state = {
        age: this.props.old
      }
    }

    render(){
      return(
        <Text>{this.props.person} {this.state.age}</Text>
      )
    }
```
pada kode di atas terdapat parameter di dalam constructor dan super (yaitu parameter props), hal ini dikarenakan kita mengambil parameter yang dikirim dari component lain, dan saat kita mengambil parameter dengan menggunakan props maka di constructor dan super harus kita isi dengan props.
Berbeda jika kita tidak memanggil menggunakan props, maka cukup dedefinisikan di constructor tanpa harus diisi dengan parameter di dalam constructor dan super, contoh :
```javascript
    constructor(){
      super();
      this.state = {
        age: "Umur : 25 "
      }
    }

    render(){
      return(
        <Text>{this.props.person} {this.state.age}</Text>
      )
    }
```

### App.js
```javascript
    class App extends Component {
    render(){
        return(
        <View style = {styles.container}>
            <StatusBar backgroundColor = "blue" />

            <Header person = "Name : Alex" />
            <Header old = "Age : 20" />

            <Text>Hello React Native</Text>

            <Footer tahun = "2019" />
        </View>
        )
    }
    }
```