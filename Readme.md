## Handling Text Input dan Set State

Untuk kali ini kita akan belajar meng-handle button. Yang kita butuhkan tentu saja button :)
Ceritanya kita akan membuat button dan ketika button ditekan maka akan mengeluarkan alert. Sederhana saja dulu.


### App.js
```javascript
    class App extends Component {

    handleTambah = () => {
        Alert.alert("Ini adalah handle tambah")
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
            </View>
            )
        }
    }
```

"<Button title="Button Tambah" onPress={this.handleTambah} />" adalah kode untuk membuat botton nya. Di sini terdapat kode "onPress={this.handleTambah}" yang kalau saya terjemahkan ketika button ditekan maka akan menuju ke function handleTambah. Nah di function handle tambah ini akan menampilkan alert nya. "handleTambah = () => { Alert.alert("Ini adalah handle tambah") }"

Run aplikasinya dan lihat hasilnya, ketika button ditekan maka akan muncul alert. Mudah bukan??

Oke mari kita modifikasi buttonnya. Ceritanya button ini akan menambahkan angka setiap button ditekan. Jadi angkanya akan bertambah 1 setiap button ditekan.

Kita modifikasi App.js dengan menambhkan state
```javascript
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
```
Pada kode di atas kita membuat constructor. Constructor ini akan dijankan pertama kali sebelum merender sesuatu.
Karena di constructornya kita mendefinisikan state jumlah dengan nilai awal 0 maka saat aplikasi dirender maka jumlah yang muncul pertama kali adalah 0 ( "<Text>Jumlah : {this.state.jumlah}</Text>" ). Barulah saat button ditakan maka button akan memanggil function handleTambah. Di function handleTambah ini variabel jumlah akan di setState dengan ditambah 1 (" this.setState({ jumlah: this.state.jumlah + 1 }) "). Jadi ketika button ditekan angkanya akan berubah dengan ditambahkan 1.