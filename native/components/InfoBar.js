import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image
} from 'react-native';

function InfoBar({navigation}){
    return (
      <View style={styles.header}>
        <View style={styles.onlineIcon}>
          <Image source={require("./assets/onlineIcon.png")}/>
        </View>
        <View>
          <Text style={styles.headerText}>{navigation.getParam('room')}</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  header:{
    width:"100%",
    height:"100%",
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#2979ff",
    padding:0,
    margin:0 
  },
  headerText:{
    fontWeight:'bold',
    fontSize:20,
    color:'#fff',
    letterSpacing:1
  },
  onlineIcon:{
    padding:10
  },
  closeIcon:{
    position:'absolute',
    right:"0%"
  }
});

export default InfoBar;
