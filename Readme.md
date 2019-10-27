## Handling Text Input dan Set State

Pada materi sebelumnya............state sendiri bisa digunakan di dalam class component, sedangkan untuk fanction component kita tidak bisa menggunakan state. Anyway lupakan duu soal ini karena saya belum paham soal state dan props secara menyeluruh.

Pada materi saat ini kita akan belajar bagaimana memanfaatkan state untuk mengolah inputan data. Menarik akan, makanya simak ters ya.


### Header.js
```javascript
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
            age: this.props.old,
            input: ''
        }
    
        }

        render(){
        return(
            <View>
            {/* <Text>{this.props.person} {this.state.age} {this.state.address}</Text> */}
            <Text>{this.props.person} {this.state.age}</Text>

            <TextInput onChangeText={(events) => {this.setState({input:events})}} />
            <Text>Inputan : {this.state.input}</Text>
            </View>
            
        )
        }
    }
```

Hal pertama yang harus kita lakukan adalah membuat constructor. Constractor ini adalah fungsi yang pertama dieksekusi sebelum merender aplikasi. Di dalam constructor ini kita definisikan variabel untuk menampung inputan, misal kita beri nama variabelnya dengan "input" dan untuk value nya kita beri nilai kosong karena akan diisi dengan nilai dari textInput dari masukan si user. 

Kemudian di dalam textInput kita menambahkan property onChangeText yang berfungsi untuk memberikan sebuah value dari text inputan, misalkan saja di textxInput kita beri atau kita ketik "Irwanto" maka akan memberikan nilai value "Irwanto". Selanjutnya kita set untuk state nya dengan menggunakan '(events) => {this.setState({input:events})}'. 

Penjelasan dari kode tersebut kira kira seperti ini, "this.setState" ini berfungsi untuk men-set data masukkan user ke dalam variabel input. Variabel input ini akan berisi nilai events (input:events) di mana events didapat dari properti function '(events) => {}'. Jadi secara sederhananya data input yang pertama kita definisikan di state yang semula kosong akan diisi oleh data dari inputan user tersebut.
Kemudian data yang diinputkan tadi akan ditampilkan dengan mengakses statenya '{this.state.input}'