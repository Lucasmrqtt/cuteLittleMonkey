import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import db from './db_1.json';
import PhonicButton from './components/phonicButton';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      text:'',
      chunks:[],
      phones:[]
    }
  }

  render(){
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={'#5c4609'}
            centerComponent={{
              text:'Cute Little Monkey',
              style:{color:'white',fontSize:20}
            }}
          />
          <Image
            source={require('./assets/faceMonkey.png')}
            style={styles.imageIcon}/>
          <TextInput style={styles.inputBox}
            onChangeText={text=>{this.setState({text:text})}}
            value={this.state.text}
          />  
          <TouchableOpacity style={styles.goButton} 
            onPress={()=>{
              var word = this.state.text.toLowerCase().trim()
              db[word]
              ?
                (this.setState({chunks:db[word].chunks}),
                this.setState({phones:db[word].phones}))
              :
                Alert.alert("Não foi possivel encontrar essa palavra.")
            }}>
            <Text style={styles.buttonText}>
              Go
            </Text>
          </TouchableOpacity>
          <View>
            {this.state.chunks.map((item, index)=>{
              return(
                <PhonicButton 
                  wordChunck={this.state.chunks[index]}
                  wordPhone={this.state.phones[index]}
                  buttonIndex={index}
                />
              )
            })}
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    fontSize: 20,
    fontWeight: 'bold'
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf:'center', 
  },
  chunkButton: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red',
  },
});