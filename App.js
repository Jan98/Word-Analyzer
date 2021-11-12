import React, {Component} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      input: '',
      consonants: 0,
      vowels: 0,
      characters: 0
    }
  }
  WordAnalyzer = () => {
    let input = this.state.input;
    let consonants = 0;
    let vowels = 0;
    let characters = 0;

    characters = input.length;

    for (let i=0;i<=input.length;i++){
      if((input.charAt(i).match(/[aeiouAEIOU]/))){
        vowels++;
      }
      else if((input.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/))){
        consonants++;
      }
      this.setState({characters:characters,vowels:vowels,consonants:consonants});

    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.title}>A Word Analyzer</Text><br></br>
        <TextInput onChangeText={(input) => this.setState({input})} style={Styles.analyzer} placeholder='Word'/>
        <Button color="#000000" onPress={this.WordAnalyzer} title='Analyze'/><br></br>
        <Text style={Styles.analyzer}>Word                     : {this.state.input}</Text>
        <Text style={Styles.analyzer}>No of Consonants  : {this.state.consonants}</Text>
        <Text style={Styles.analyzer}>No of Vowels         : {this.state.vowels}</Text>
        <Text style={Styles.analyzer}>No of Characters   : {this.state.characters}</Text>
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE8AA',
  },

  title: {
    fontFamily: " tahoma, verdana",
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },

  analyzer: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5
  },
});