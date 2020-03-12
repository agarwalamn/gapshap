/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import Navigator from "./routes/Homestack"

function App(){
    return (
      <Navigator/>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  joinMsg:{
    color:'#fff',
    fontSize:50,
    fontWeight:'bold',
    fontFamily:'Roboto,sans-serif',
    borderColor:'#fff'
  },
  inp:{
    backgroundColor:"#fff",
    width:"80%",
    padding:10,
    margin:15
  },
  test:{
    color:'#fff',
  },
  btn:{
    padding:10,
    color:"#fff",
    backgroundColor:"#2979ff",
    width:"80%",
    padding:10,
    margin:15,
    textAlign:'center',
    fontSize:20
  }
});

export default App;
