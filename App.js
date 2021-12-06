import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [radius, setRadius] = useState();
  const [height, setHeight] = useState();
  const [volume, setVolume] = useState();


  function calcVolume () {
    let result = 1/3 * Math.pow(radius,2) * Math.PI * height;
    setVolume(result);
  }


  return (

    <View style={styles.container}>
      <Text style = {styles.header}>Térkúp</Text>

      <Text style={styles.textTitle}>Sugár</Text>
      <TextInput 
        style = {styles.input}
        placeholder = 'Sugár'
        onChangeText = { radius => setRadius(radius)}/>

      <Text style={styles.textTitle}>Magasság</Text>
      <TextInput 
        style = {styles.input}
        placeholder = 'Magasság'
        onChangeText = { height => setHeight(height)}
      />

      <Button
        title = "Számít"
        onPress = {calcVolume}
      />

      <Text style = {styles.resultDiplayer}>Térfogat</Text>
      <Text style = {styles.resultDiplayer}>{volume}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00e3df",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    width: '80%',
    marginTop: 8,
    marginBottom: 8,
  },

  header: {
    fontSize: 150,
    fontFamily: "Times New Roman",
    marginTop: 8,
    marginBottom: 8,
    color: "#1500ff"
  },
  textTitle: {
    fontSize: 30,
    fontFamily: "Arial",
    color: "#ffb0b0",
    marginTop: 8,
    marginBottom: 8,
  },

  resultDiplayer: {
    marginTop: 8,
    marginBottom: 8,
  }
  
});
