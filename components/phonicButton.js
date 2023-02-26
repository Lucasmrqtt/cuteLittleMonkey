import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Audio } from 'expo-av';

export default class PhonicButton extends React.Component {
  constructor(props){
    super(props)
    this.state={
      pressedButtonIndex:''
    }
  }
    playSound=async(soundChunk)=>{
        var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3'
        await Audio.Sound.createAsync(
            {uri:soundLink},
            {shouldPlay:true}
        )
    }

    render() {
        return (
            <TouchableOpacity style={this.props.buttonIndex==this.state.pressedButtonIndex
                ?[styles.chunkButton, {backgroundColor:"white"}]
                :[styles.chunkButton, {backgroundColor:"red"}]
              }
              onPress={()=>{
                this.setState({pressedButtonIndex:this.props.buttonIndex})
                this.playSound(this.props.wordPhone)
              }}>

              <Text style={this.props.buttonIndex==this.state.pressedButtonIndex
                  ?[styles.displayText, {color:"red"}]
                  :[styles.displayText, {color:"white"}]
                }>
                {this.props.wordChunck}
              </Text>
            </TouchableOpacity>
        )
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